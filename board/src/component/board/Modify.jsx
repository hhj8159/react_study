import React, {useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import useAxios from '../../hooks/useAxios';

const Modify = () => {
  const param = useParams();
  const num = param.num;

  const [board, setBoard] = useState({title:'', content:'', memberEmail:'', attachDtos:[]});
  const navigate = useNavigate();
  const[uploaded, setUploaded] = useState([]);
  const {req} = useAxios();

  useEffect(() => {
    (async() => {
      const resp = await req('get', `notes/${num}`);
      console.log(resp);
      setBoard(resp);
      setUploaded(resp.attachDtos)
    })();
  }, [req, num]);

  const handleChange = e => {
    const {name, value} = e.target;
    setBoard({...board, [name] : value})
  }

  const handleSubmit = e => {    
    e.preventDefault();
    console.log(board);

    req('put', `notes/${num}`, {...board, attachDtos:uploaded});

    alert("글쓰기 성공");
    navigate("/notes");
  }

  const handleFileUpload = async e => {
    const files = e.target.files; // 유사배열형태 
    if(!files) return;
    console.log(files);
    
    const formData = new FormData();
    for(let i = 0; i < files.length; i++) {
      formData.append("file", files[i]);  
    }
    
    console.log(formData);
    try {
      const result = await req('post','file/upload', formData, {'Content-Type' : 'multipart/form-data'});
      console.log(result);
      setUploaded([...uploaded, ...result]);

      } catch (error) {
        console.error("Error during upload:", error);
    }
    e.target.value = '';
  };  

  return (
    <div>
      <h1>Modify</h1>
      <form onSubmit={handleSubmit}>   
        <input name='title' value={board.title} onChange={handleChange}/>
        <input name='content' value={board.content} onChange={handleChange}/>
        <input name='memberEmail' value={board.memberEmail} onChange={handleChange}/>
        <input type='file' onChange={handleFileUpload} name='file' multiple />
        <div>
          <h3>attachs : {board.attachDtos.length}</h3>
          <ul>
            {board.attachDtos.map(a => <li key={a.uuid}><Link to={a.url}>{a.origin}</Link></li>)}
          </ul>
       </div>
        <button>글수정</button>
        <hr />
          <ul>
            {uploaded.map(u => <li key={u.uuid}><Link to={u.url}>{u.origin}</Link> <button data-uuid={u.uuid} onClick={e => setUploaded(uploaded.filter(file => file.uuid !== e.currentTarget.dataset.uuid))}>삭제</button> </li>)}
          </ul>
      </form>
    </div>
  );
}

export default Modify;