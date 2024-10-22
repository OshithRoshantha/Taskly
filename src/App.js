import './App.css';
import React from 'react'
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SessionMessage from './Components/SessionMessage';
import { useEffect } from 'react';
import jwtDecode from 'jwt-decode';

function App() {
  const [sessionMessage, setSessionMessage] = React.useState(false);

  function removeSessionMessage(){
    setSessionMessage(false);
  }

  function checkSession(){
    const accessToken=localStorage.getItem('access_token');
    const decodedToken=jwtDecode(accessToken);
    const expirationTime=decodedToken.exp * 1000;
    if(Date.now()>=expirationTime){
      setSessionMessage(true);
    }
  }
  useEffect(() => {
    checkSession();  
  }, []);

  return (
    <div className="App">
      {sessionMessage && <SessionMessage removeSessionMessage={removeSessionMessage}/>}
      <BrowserRouter>
        <Routes>
          <Route path='/*' element={<Login/>}></Route>
          <Route path='/dashboard' element={<Dashboard/>}></Route>
        </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
