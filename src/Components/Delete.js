import React from 'react'
import './Styles/Delete.css'
import Button from 'react-bootstrap/Button';

export default function Delete({taskTitle,handleDelete}) {
  return (
    <div className='fill-area'>
    <div className='addContainer pt-3 ps-3 deleteContainer'>  
        <div className="deleteHead"><i class="bi bi-exclamation-circle text-danger deleteIcon"></i>&nbsp;&nbsp;Are you sure you want to delete <strong>{taskTitle}</strong>?</div>
        <div className="deleteSub">This action is permanent and cannot be undone.</div><br/>
       <div className="buttonContainer pb-3 pe-2 d-flex justify-content-end">
            <Button onClick={handleDelete} variant="info" className='cancelBtn'>Cancel</Button>
            <Button onClick={handleDelete} variant='danger' className='text-info mx-2'>Delete</Button>
       </div>      
    </div></div>
  )
}
