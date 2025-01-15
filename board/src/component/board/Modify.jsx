import React, {useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useAxios from '../../hooks/useAxios';
import { useAuth } from '../../hooks/AuthContext';

const Modify = () => {
  const param = useParams();
  const num = param.num;

  const {email} = useAuth();
  const [board, setBoard] = useState({title:'', content:'', memberEmail:'', num:''});
  const navigate = useNavigate();
  const {req} = useAxios();

  useEffect(() => {
    (async() => {
      const resp = await req('get', `notes/${num}`);
      console.log(resp);
      setBoard(resp);
    })();
  }, [req, num]);

  const handleChange = e => {
    const {name, value} = e.target;
    setBoard({...board, [name] : value})
  }
  // const handleSubmit = async e => {
  //   try{
  //     const resp = await req('put', `notes/${num}`, board);
  //     console.log(resp);

  //   }catch(error){
  //     console.error("실패", error.message);
  //   }
  //   // alert("글쓰기 성공");
  //   navigate("/notes");
  // }
  const handleSubmit = e => {
    
    e.preventDefault();
    console.log(board);

    req('put', `notes/${num}`, board);

    alert("글쓰기 성공");
    navigate("/notes");
  }

  return (
    <div>
      <h1>Modify</h1>
      <form onSubmit={handleSubmit}>   
        <input name='title' value={board.title} onChange={handleChange}/>
        <input name='content' value={board.content} onChange={handleChange}/>
        <input name='memberEmail' value={board.memberEmail} onChange={handleChange}/>
        <button>글수정</button>
      </form>
    </div>
  );
}

export default Modify;