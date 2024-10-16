import React from 'react'
import './Styles/LoginComponent.css'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';

export default function SignIn() {
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
                <Form.Control className='inputField' type="email" required placeholder="you@example.com"/>
            </InputGroup>
        </Col>      
      </Row>
      <Row>
        <Col>
            <Form.Label className='text-info'>Password</Form.Label>
            <InputGroup>
                <InputGroup.Text><i class="bi bi-shield-lock-fill"></i></InputGroup.Text>
                <Form.Control className='inputField' type="password" required  placeholder="Password"/>
            </InputGroup>
        </Col>      
      </Row>
      <br/>
      <Button href='/Dashboard' className="signIn">Sign In</Button>
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
