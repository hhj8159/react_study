import React, { useState } from 'react';
import Toolbar from './Toolbar';

const LandingPage = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const onClickLogin = () => {
    setIsLoggedIn(true);
  };
  const onClickLogout = () => {
    setIsLoggedIn(false);
  };

  const obj = {isLoggedIn, onClickLogin, onClickLogout};
  return (
    <div>
      <Toolbar {...obj} onClickLoginToggle={() => setIsLoggedIn(isLoggedIn => !isLoggedIn)}/>    
      {/* <Toolbar isLoggedIn={isLoggedIn} onClickLogin={onClickLogin} onClickLogout={onClickLogout} onClickLoginToggle={onClickLoginToggle}/>     */}
      <div style={{padding : 16 }}>리액트와 함께하는 리액트 공부!</div>
    </div>
  );
}

export default LandingPage;
