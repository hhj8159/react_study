import React, { useState } from 'react';

const Counter = () => {
  // var count = 0;
  // 버튼 3종, 1증가, 1감소, 초기화
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>총 {count}번 클릭했습니다.</p>
      <button onClick={() => {setCount(count + 1)}}>1증가</button>
      <button onClick={() => {setCount(count - 1)}}>1감소</button>
      <button onClick={() => {setCount(0)}}>초기화</button>
    </div>
  );  
}

export default Counter;
