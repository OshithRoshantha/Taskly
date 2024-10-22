import React from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Styles/LoginComponent.css'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import axios from 'axios';

export default function SignIn() {
  
  const [invalidEmail, setInvalidEmail] = React.useState(false);
  const [invalidPassword, setInvalidPassword] = React.useState(false);
  const navigate = useNavigate();

  function processSignIn(){
    const email = document.querySelector('.user-email').value;
    const password = document.querySelector('.user-password').value;
  
    axios.post('http://127.0.0.1:5000/', {
      email: email,
      password: password
    })
    .then(response => {
      if (response.data["message"]=="userNotExists"){
        showInvalidEmail();
        hideInvalidPassword();
      }
      else if (response.data["message"]=="invalidPwd"){
        showInvalidPassword();
        hideInvalidEmail();
      }  
      else if (response.data["message"]=="logged"){
        const accessToken = response.data.access_token;
        localStorage.setItem('access_token', accessToken);
        navigate('/dashboard');
      }  
    })
    .catch(error => {
      console.error(error);
    });
  }

  function showInvalidEmail(){
    setInvalidEmail(true);
  }

  function hideInvalidEmail(){
    setInvalidEmail(false);
  }

  function showInvalidPassword(){
    setInvalidPassword(true);
  }

  function hideInvalidPassword(){
    setInvalidPassword(false);
  }

  useEffect(() => {
    localStorage.removeItem('access_token');  
  }, []);

  return (
    <div className='container'>
    <div className="inputcontainer">
    <div className="header">
        <div className="display-3 text-info">Sign In</div>
        <div className='text-info'>Welcome back! Log in to your account.</div>
    </div> 
    <Form>
      <Row>
        <Col>
        
            <Form.Label className='text-info'>Email Address</Form.Label>
            <InputGroup>
                <InputGroup.Text><i class="bi bi-envelope-at-fill"></i></InputGroup.Text>
                <Form.Control className={`user-email inputField ${invalidEmail ? 'is-invalid' : ''}`} type="email" required placeholder="you@example.com"/>
            </InputGroup>
            {invalidEmail && <p className='invalid-text'>The email address you entered isn't connected to an account.</p>}
        </Col>      
      </Row>
      <Row>
        <Col>
            <Form.Label className='text-info'>Password</Form.Label>
            <InputGroup>
                <InputGroup.Text><i class="bi bi-shield-lock-fill"></i></InputGroup.Text>
                <Form.Control className={`user-password inputField ${invalidPassword ? 'is-invalid' : ''}`} type="password" required  placeholder="Password"/>
            </InputGroup>
            {invalidPassword && <p className='invalid-text'>The password you entered is incorrect.</p>}
        </Col>      
      </Row>
      <br/>
      <Button onClick={processSignIn} className="signIn">Sign In</Button>
      <br/><br/>
        <div className='noAccount'>
            <div className='text-info'>Don't have an account?</div>
            <a className='text-primary linkTo' href='SignUp' >Sign Up</a>
        </div>
    </Form>
    </div>
    
    </div>
  )
}
