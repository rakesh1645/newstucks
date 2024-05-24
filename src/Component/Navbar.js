import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbara = (props) => {
  const [mode, setMode] = useState('light');

  const toggleBtn = () => {
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
   
    } else {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
    
    }
  };

  return (
    <Navbar expand="lg" className="navbar fixed-top navbar-dark bg-dark">
      <Container>
        <Navbar.Brand href="/">News-Stucks</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/Science">Science</Nav.Link>
            <Nav.Link href="/Sports">Sports</Nav.Link>
            <Nav.Link href="/health">Health</Nav.Link>
            <Nav.Link href="/Bussiness">Bussiness</Nav.Link>
            <Nav.Link href="/Technologies">Technologies</Nav.Link>
        
          </Nav>
        </Navbar.Collapse>
        <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
          <input className="form-check-input" type="checkbox" role="switch" onClick={toggleBtn} id="flexSwitchCheckDefault" />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable dark mode</label>
        </div>
      </Container>
    </Navbar>
  );
};

export default Navbara;
