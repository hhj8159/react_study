import React, { useState } from 'react';

const MyArray = () => {
  const fruits = ['사과', '딸기', '포도', '복숭아', '귤']; // 과일의 이름들


  // 초기값
  const fruitsCount = fruits.map(f => ({name: f, count:0})); // [{사과:0},{딸기:0}...]
  console.log(fruitsCount);  
  const [bucket, setBucket] = useState([...fruitsCount]);
  return (
    <div>
      <button onClick={() => {
        const rand = parseInt(Math.random() * bucket.length);
        // bucket.push(fruits[rand]);
        bucket[rand].count++;
        setBucket([...bucket]);
      }}>과일 추가</button>

      {/* <button onClick={() => {
        const rand = parseInt(Math.random() * bucket.length);
        bucket.splice(rand, 1);
        setBucket([...bucket]);
      }}>과일 제거</button> */}
      
      <button onClick={() => setBucket([...fruitsCount])}>바구니 비우기</button>
      <ul>
        {bucket.map((f, i) => <li key={i}>{f.name} :: {f.count}개</li>)}
      </ul>
    </div>
  );
}

export default MyArray;
