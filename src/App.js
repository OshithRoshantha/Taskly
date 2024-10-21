import './App.css';
import React from 'react'
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SessionMessage from './Components/SessionMessage';
import { useEffect } from 'react';

function App() {
  const [sessionMessage, setSessionMessage] = React.useState(false);

  function removeSessionMessage(){
    setSessionMessage(false);
  }

  function checkSession(){
    const accessToken = localStorage.getItem('access_token');
    if(!accessToken){
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
