import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/AuthContext';

const DashBoard = () => {
  const {email, token, logout} = useAuth();
  // const [email, setEmail] = useState(localStorage.getItem('email'));
  // const [token, setToken] = useState(localStorage.getItem('token'));

  // const handleLogout = () => {
  //   // setItem, getItem, removeItem
  //   localStorage.removeItem('email');
  //   localStorage.removeItem('token');    
  //   setEmail('');
  //   setToken('');
  // }
  // console.log({token});
  return (
    <div>
      <h1>시작페이지</h1>
      <p>{email || 'guest'}</p>
      <p>{token}</p>
      {email ? <><button onClick={logout}>로그아웃</button><Link to={'/list'}>게시글</Link></> : <Link to={'/'}>로그인</Link>}
    </div>
  );
}

export default DashBoard;
