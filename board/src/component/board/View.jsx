import React, { useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import useAxios from '../../hooks/useAxios';

const View = () => {
  const param = useParams();
  const num = param.num;
  const {data, loading, error, req} = useAxios();  
  const nav = useNavigate();

  useEffect (() => {
    (async() => {
      const resp = await req('get', `notes/${num}`);
      console.log(resp);
    })();
  }, [num, req]);

    if(error) {
      return <div><h1>에러발생</h1></div>
    }

    if(loading) {
      return <div><h1>로딩중</h1></div>
    }

    // 삭제 처리
    const handleDelete = e => {
      e.preventDefault();
      console.log('삭제 동작');
      if(!window.confirm("삭제 하시겠습니까?")) {
        return;
      }  
      req('delete', `notes/${num}`);
      nav('/notes');
    };
    // const handleModify = e => {
    //   e.preventDefault();
    //   navigate("/modify");
    // }

  return data && (
    <div>
      <h1>View</h1>
      <p>{param.num}번 게시글</p>
      <p>{data.title}</p>
      <p>{data.content}</p>
      <p>{data.memberEmail}</p>
      <p>{data.regDate}</p>
      <p>{data.modDate}</p>

      <div>
        <h3>attachs : {data.attachDtos.length}</h3>
        <ul>
          {data.attachDtos.map(a => <li key={a.uuid}><Link to={a.url}>{a.origin}</Link></li>)}
        </ul>
      </div>
      <Link to={`/notes/modify/${data.num}`}><button>수정</button></Link>      
      <button onClick={handleDelete}>삭제</button>
    </div>
    
  );
}

export default View;
