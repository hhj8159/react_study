import React, { useState } from 'react';

const TopingList = (props) => {
  const [mySet, setMySet] = useState(new Set());
  const {topings, onSetMyTopings} = props;

  const handleChange = e => {
    const c = e.target.checked;
    if(c && mySet.size >= 3) {
      alert('최대 3개의 토핑')
      return;
    }
    const newSet = new Set(mySet);
    c ? newSet.add(e.target.value) : newSet.delete(e.target.value);
    setMySet(newSet);
    // 부모 컴포넌트에 자식 state 전달
    onSetMyTopings(newSet);
  };

  console.log(topings);
  return topings.length === 0 ? <h1>토핑을 불러오는 중 입니다</h1> : (
    <>
    <h3>최대 선택 가능 토핑은 3개입니다.</h3>
    <ul>
      {topings.map((t, i) => <li key={i}><label><input type='checkbox' name='toping' value={t} onChange={handleChange} checked={mySet.has(t)}/>{t}</label></li>)}
    </ul>
    </>
  )
}

const Multiple = () => {
  const [myTopings, setMyTopings] = useState(new Set());
  const topings = ["베이컨", "페퍼로니", "파인애플", "치즈", "고구마", "감자", "새우", "불고기"];
  return (
    <form onSubmit={e => {
      e.preventDefault();
      if(myTopings.size === 0) {
        alert("최소 1개의 토핑을 선택하세요");
        return;
      }
      alert(`선택한 토핑은 ${Array.from(myTopings).join(", ")}`);
    }}>
      <TopingList topings={topings} myTopings={myTopings} onSetMyTopings={setMyTopings}/>
      <button>주문</button>        
    </form>
  );
}

export default Multiple;
