import React, { useState } from 'react';
const FileInput = ({handleChange, fileKey}) => {
// return <input type='file' id='file' name='file' multiple onChange={handleChange}/>;
}

const MyForm = () => {
  const [name, setName] = useState('');
  const [req, setReq] = useState('');
  const [fruit, setFruit] = useState('');
  const [file, setFile] = useState([]);
  // let value = '';
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // 과일 미선택시 alert로 알림 메세지 표시
    !fruit && alert('과일을 선택');
  }
  
  const handleChange = e => {
    switch (e.target.id) {
      case "name" :
        setName(e.target.value.replace(/[^0-9]/g, ''))
        break;
        // 영소문자 입력 (한글, 숫자도 가능)  
      case "req" :
        setReq(e.target.value.toLowerCase())
        break;
        // 반드시 과일을 선택하게 지정
      case "fruit" :
        setFruit(e.target.value)
        break;
      case 'file' :
        setFile(Array.from(e.target.files, f => f.name));
        break;
      default:
        break;        
      }
      // 숫자만 입력받게 변형
      // 1.
      // new RegExp("[^0-9]", "g").test("123") ? setValue() : '';
      // 2.
      // new RegExp("[^0-9]", "g").test("123") && setValue(e.target.value);
      // 3.
      // e.target.value.match(/[0-9]/g);
      // 4.
      // setName(e.target.value.replace(/[^0-9]/g, ''))
      
      // 대문자로 입력
      // setValue(e.target.value.toUpperCase()) 
    }
    
    // onFocus onBlur
    
  


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>이름<input type='text' name='name'onChange={handleChange} id='name' value={name}/></label>
        <label>
          <p>요청사항</p>
          <textarea onChange={handleChange} id='req' value={req}></textarea>
        </label>
        <label htmlFor="fruit">과일을 선택하세요</label>
        <select id='fruit' onChange={handleChange}>
          <option value={''}>과일을 선택하세요</option>
          <option value={'apple'}>사과</option>
          <option value={'banana'}>바나나</option>
          <option value={'grape'}>포도</option>
          <option value={'watermelon'}>수박</option>
        </select>
        <br />
        {/* 파일 업로드 후 value값 변경 불가 >> 조건부 렌더링을 통해 컴포넌트 리로드 {<FileInput />} */}
        <input type='file' id='file' name='file' multiple onChange={handleChange}/>
        <p>업로드된 파일</p>
        <ul>
          {file.map(f => <li key={f}>{f}</li>)}
        </ul>
        <hr />
        <button>제출</button>
      </form>
    </div>
  );
}

export default MyForm;
