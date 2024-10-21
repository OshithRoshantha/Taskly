import React from 'react'
import './Styles/SessionMessage.css'

export default function SessionMessage({removeSessionMessage}) {
    function handleLogin(){
        window.location.href = '/';
    }

  return (
    <div className='session-layout'>
        <div className='session-message'>
            <h3>Your session has expired</h3>
            <p>Please login again to continue.</p>
            <div className="lower-row">
                <button onClick={() => {handleLogin();removeSessionMessage()}} type="button" class="btn btn-light session-btn">Log in</button>
            </div>
        </div>
    </div>
  )
}
