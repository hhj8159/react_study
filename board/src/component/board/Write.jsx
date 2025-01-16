import React, {useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAxios from '../../hooks/useAxios';
import { useAuth } from '../../hooks/AuthContext';

const Write = () => {

  const {email} = useAuth();
  const [board, setBoard] = useState({title:'', content:'', memberEmail:'', attachDtos:[]});
  const[uploaded, setUploaded] = useState([]);
  const navigate = useNavigate();
  const {req} = useAxios();

  useEffect(() => {
    setBoard(prev => ({...board, memberEmail:email}))
  }, [email]);

  const handleChange = e => {
    const {name, value} = e.target;
    setBoard({...board, [name] : value})
  }
  
  const handleSubmit = e => {
    e.preventDefault();
    console.log(board);
    
    req('post', 'notes', {...board, attachDtos : uploaded});

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

      // for(let i; i < files.length; i++) {
      //   setAttachArr([...attachArr, result[i]])
      // }
      } catch (error) {
        console.error("Error during upload:", error);
    }
    e.target.value = '';
  };  

  // const inputFile =;

  return (
    <div>
      <h1>Write</h1>
      <form onSubmit={handleSubmit}>   
        <input name='title' value={board.title} onChange={handleChange}/>
        <input name='content' value={board.content} onChange={handleChange}/>
        <input name='memberEmail' value={board.memberEmail} onChange={handleChange}/>
        <input type='file' onChange={handleFileUpload} name='file' multiple />
        <button>글쓰기</button>
      </form>
      <ul>
        {uploaded.map(u => <li key={u.uuid}><Link to={u.url}>{u.origin}</Link> <button data-uuid={u.uuid} onClick={e => setUploaded(uploaded.filter(file => file.uuid !== e.currentTarget.dataset.uuid))}>삭제</button> </li>)}
      </ul>
    </div>
  );
}

export default Write;