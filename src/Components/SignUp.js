import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Styles/LoginComponent.css'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import axios from 'axios';

export default function SignUp() {

  const [userExists, setUserExists] = React.useState(false);
  const navigate = useNavigate();

  function processSignUp() {
    const firstName = document.querySelector('.create-fname').value;
    const lastName = document.querySelector('.create-lname').value;
    const email = document.querySelector('.create-email').value;
    const password = document.querySelector('.create-password').value;
  
  }

  return (
    <div className='container'>
    <div className="inputcontainer">
    <div className="header">
        <div className="display-3 text-info">Sign Up</div>
        <div className='text-info'>Get started by creating your account.</div>
    </div> 
    <Form>
      <Row>
        <Col>
            <Form.Label required className='text-info create-fname'>First Name</Form.Label>
            <Form.Control className='inputField' placeholder="John" />
        </Col>
        <Col>
            <Form.Label required className='text-info create-lname'>Last Name</Form.Label>
            <Form.Control className='inputField' placeholder="Doe" />
        </Col>
      </Row>
      <Row>
        <Col>
            <Form.Label required className='text-info create-email'>Email Address</Form.Label>
            <InputGroup>
                <InputGroup.Text><i class="bi bi-envelope-at-fill"></i></InputGroup.Text>
                <Form.Control className='inputField' type="email" required placeholder="John@example.com"/>
            </InputGroup>
        </Col>      
      </Row>
      {userExists && <p className='invalid-text'>This account already exists. Please try to login.</p>}
      <Row>
        <Col>
            <Form.Label required className='text-info create-password'>Password</Form.Label>
            <InputGroup>
                <InputGroup.Text><i class="bi bi-shield-lock-fill"></i></InputGroup.Text>
                <Form.Control className='inputField' type="password" required  placeholder="Create password"/>
            </InputGroup>
        </Col>      
      </Row>
      <br/>
      <Button onClick={processSignUp}  className="signIn">Sign Up</Button>
      <br/><br/>
        <div className='noAccount'>
            <div className='text-info'>Already have an account?</div>
            <a className='text-primary linkTo' href='/' >Sign In</a>
        </div>
    </Form>
    </div>
    </div>
  )
}
