import React from 'react'
import './Login.css'
import { Link, Route, Routes, Outlet } from 'react-router-dom';
import SignUp from '../Components/SignUp'
import SignIn from '../Components/SignIn'


export default function Login() {
  return (
    <div className='containerLogin'>
        <div className="background"></div>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/SignUp" element={<SignUp />} /> 
        </Routes>
        <Outlet />
    </div>
  )
}
