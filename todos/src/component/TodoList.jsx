import React, { useEffect, useState } from 'react';
import Todo from './Todo';

// jqueryXmlHttpReauest
// $.ajax().done().done()
// 순차처리 하기 위함
// promise 체이닝 메소드 성공시.then() 실패시.catch()
// fetch() promise타입 객체를 반환함
// fetch() window에서 사용 nodejs는 사용못함, 400, 500번대 오류는 에러로 인식하지 않음
// await비동기를 순차로 만든다 (await는 async함수 내부에서만 사용가능)

// 1. CORS 처리 (oirigin issue) / security
// 2. Re render 조건 : state, props 변화 감지
// 3. useEffect
// 4. js / promise, async await
// 5. fetch, axios
const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const myUrl = 'http://localhost:8080/api/todo/list';
  const sampleUrl = "https://jsonplaceholder.typicode.com/posts/1";
  useEffect(() => {
    (async () => {
      const response = await fetch(myUrl);
      if(!response.ok) {
        throw new Error('네트워크 상태불량')
      }    
      const data = await response.json();    
      console.log(data);
      setTodos(data);
    })();
  }, []);  
  return todos.length ? <ul>{todos.map(todo => <Todo key={todo.id} {...todo} />)}</ul> : <ul><li>페이지 로딩중...</li></ul>;
}

export default TodoList;
