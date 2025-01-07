import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  console.log(location);
  return (
    <>
      {/* Router의 Link 컴포넌트는 직접적 페이지 이동을 담당
      path relative : ../ ./ / 상대 경로 지정가능
      */}
      <Navbar expand="lg" className='mb-4' sticky="top" bg='light'>
        <Container>
          <Navbar.Brand as={Link} to="/">React Sample Post</Navbar.Brand>
          <Nav variant="pills" activeKey={location.pathname} className='me-auto' defaultActiveKey="/">
          <Nav.Item>
            <Nav.Link as={Link} to="/" eventKey="/">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/posts" eventKey="/posts">Post</Nav.Link>
          </Nav.Item>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
