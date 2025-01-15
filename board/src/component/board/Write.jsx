import React, {useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAxios from '../../hooks/useAxios';
import { useAuth } from '../../hooks/AuthContext';

const Write = () => {
  const {email, token} = useAuth();
  const [board, setBoard] = useState({title:'', content:'', memberEmail:''});
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

    req('post', 'notes', board);

    alert("글쓰기 성공");
    navigate("/notes");
  }

  const handleFileUpload = async e => {
    const file = e.target.files[0];
    if(!file) return;
    console.log(file);

    const formData = new FormData();
    formData.append("file", file);  
    try {
      const headers = {
        'Authorization': `Bearer ${token}`
      }

      const response = await fetch("http://localhost:8080/api/v1/file/upload", {
        method: "POST",
        body: formData,
        headers
      });
  
      const result = await response.json();
      if (result.status === "success") {
        console.log("File uploaded successfully:", result.data);
      } else {
        console.error("Upload failed:", result.message);
      }
    } catch (error) {
      console.error("Error during upload:", error);
    }
  };  

  return (
    <div>
      <h1>Write</h1>
      <form onSubmit={handleSubmit}>   
        <input name='title' value={board.title} onChange={handleChange}/>
        <input name='content' value={board.content} onChange={handleChange}/>
        <input name='memberEmail' value={board.memberEmail} onChange={handleChange}/>
        <input type='file' onChange={handleFileUpload}></input>
        <button>글쓰기</button>
      </form>
    </div>
  );
}

export default Write;