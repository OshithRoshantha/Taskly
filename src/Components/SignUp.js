import React from 'react'
import './Styles/LoginComponent.css'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';

export default function SignUp() {
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
            <Form.Label className='text-info'>First Name</Form.Label>
            <Form.Control className='inputField' placeholder="John" />
        </Col>
        <Col>
            <Form.Label className='text-info'>Last Name</Form.Label>
            <Form.Control className='inputField' placeholder="Doe" />
        </Col>
      </Row>
      <Row>
        <Col>
        
            <Form.Label className='text-info'>Email Address</Form.Label>
            <InputGroup>
                <InputGroup.Text><i class="bi bi-envelope-at-fill"></i></InputGroup.Text>
                <Form.Control className='inputField' type="email" required placeholder="John@example.com"/>
            </InputGroup>
        </Col>      
      </Row>
      <Row>
        <Col>
            <Form.Label className='text-info'>Password</Form.Label>
            <InputGroup>
                <InputGroup.Text><i class="bi bi-shield-lock-fill"></i></InputGroup.Text>
                <Form.Control className='inputField' type="password" required  placeholder="Create password"/>
            </InputGroup>
        </Col>      
      </Row>
      <br/>
      <Button href='/' className="signIn">Sign Up</Button>
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
