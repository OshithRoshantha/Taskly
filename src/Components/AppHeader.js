import React from 'react'
import { useState,useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import '../Components/AppHeader.css'

export default function AppHeader() {
  const fName="Oshith";
  const lName="Roshantha";
    const userName= `${fName} ${lName}`;

    const [time, setTime] = useState(new Date().toLocaleTimeString());
    const [date, setDate] = useState('');
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
        useEffect(() => {
        const timer = setInterval(() => {
          setTime(new Date().toLocaleTimeString());
        }, 1000);
        return () => clearInterval(timer);
         }, []);
        useEffect(() => {
        const updateDate = () => {
          const now = new Date();
          const formattedDate = `${String(now.getDate()).padStart(2, '0')}, ${now.toLocaleString('default', { month: 'long' })}, ${now.getFullYear()}`;
          setDate(formattedDate);
        };
        updateDate();
        const now = new Date();
        const millisTillMidnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0, 0) - now;
        const timer = setTimeout(() => {
          updateDate();
          setInterval(updateDate, 24 * 60 * 60 * 1000);
        }, millisTillMidnight);
        return () => clearTimeout(timer);
        }, []);
  return (
    <div class="HeaderContainer">
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary-dark" bg="dark">
      <Container className='containerHeader'>
        <Navbar.Brand onClick={handleShow}><i class="bi bi-layout-sidebar-inset primary"></i></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav ">
          <Nav className="me-auto">
            <div className="iconCo"><img className='headerIcon' src='../headerIcon.png'/></div>
          </Nav>
          <Nav className='headerRight'>
              <NavDropdown title={<i className="bi bi-gear gearIcon"></i>} id="basic-nav-dropdown" menuVariant="dark">
              <div className="dropdownText">
                 <i class="bi bi-person-circle userIcon"></i><br/>{userName},
              </div>
              <br/>
              <NavDropdown.Item className='logOut px-6' href='/'><i class="bi bi-box-arrow-left"></i> Log Out</NavDropdown.Item>
              </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Offcanvas show={show} onHide={handleClose} className="bg-dark" style={{width: '18%'}}>
        <Offcanvas.Header >
          <Offcanvas.Title className='text-info userWelcome'><br/>Hi,<br/>{userName}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body >
          <br/>
          <Button variant='dark' className='text' style={{width: '100%',textAlign: 'left'}}><i class="bi bi-plus-circle-fill canavaIconAdd"></i>Add Task</Button>
          <br/>
          <Button className='canavaBtn' variant='dark'style={{width: '100%',textAlign: 'left'}}><i class="bi bi-search canavaIcon"></i>Search</Button>
          <Button className='canavaBtn' variant='dark'style={{width: '100%',textAlign: 'left'}}><i class="bi bi-calendar-day canavaIcon"></i>Today</Button>
          <Button className='canavaBtn' variant='dark'style={{width: '100%',textAlign: 'left'}}><i class="bi bi-calendar-plus canavaIcon"></i>Upcoming</Button>
        </Offcanvas.Body>
    </Offcanvas>
    </div>
  )
}
