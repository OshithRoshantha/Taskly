import React from 'react'
import './UpdateForm.css'
import Button from 'react-bootstrap/Button';

export default function UpdateForm({hideUpdateConatiner,showDiscardContainer,save}) {
  return (
    <div className=''>
        <div className="closeBtnHide"></div>
        <div className="updateForm ms-2 mt-2">
            <div className="updateButtonContainer">
            <Button onClick={showDiscardContainer} variant="info" className='cancelBtn'>Cancel</Button>
            <Button onClick={() => {
                hideUpdateConatiner();
                save();
              }} 
              className='ms-2'>Save</Button>
            </div>
        </div>        
    </div>
  )
}
