import React from 'react'
import './Login.css'
import { Link, Route, Routes, Outlet } from 'react-router-dom';
import SignUp from '../Components/SignUp'
import SignIn from '../Components/SignIn'


export default function Login() {
  return (
    <div className='containerLogin'>
        
        <div className="background">
          <div className='backgroundInner'>
            <img className='loginIcon' src='../headerIcon.png'/>  
          </div>
          <img className='loginImg vibrate' src='../loginImg.png'/> 
          <br/><br/><br/>
          <div className='text2' >Simplify your day-to-day activities with Taskly. </div>
          <div className='text2'>Our intuitive interface ensures that you can manage your tasks with ease,<br/> whether you’re at home, at work, or on the go.</div>
        </div>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/SignUp" element={<SignUp />} /> 
        </Routes>
        <Outlet />
    </div>
  )
}
