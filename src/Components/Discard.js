import React from 'react'
import './Discard.css'
import Button from 'react-bootstrap/Button';

export default function Discard({hideDiscardContainer,hideUpdateConatiner,undo}) {
  return (
    <div className='addContainer pt-3 ps-3 deleteContainer'>
        <i class="bi bi-exclamation-circle text-danger deleteIcon"></i>
        <div className="deleteHead">Discard changes?</div>
        <div className="deleteSub">The changes you've made won't be saved.</div><br/>
       <div className="buttonContainer pb-3 pe-2 d-flex justify-content-end">
            <Button onClick={() => {
                hideDiscardContainer();
                undo();
             }}  
        variant="info" className='cancelBtn'>Cancel</Button>
            <Button onClick={() => {
                hideDiscardContainer();
                hideUpdateConatiner();
             }} 
        variant='danger' className='text-info mx-2'>Discard</Button>
       </div>      
    </div>
  )
}
