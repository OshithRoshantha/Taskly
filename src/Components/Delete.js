import React from 'react'
import './Delete.css'
import Button from 'react-bootstrap/Button';

export default function Delete({closeDelete}) {
    const taskName='Task Name';
  return (
    <div className='addContainer pt-3 ps-3 deleteContainer'>
        <i class="bi bi-exclamation-circle text-danger deleteIcon"></i>
        <div className="deleteHead">Are you sure you want to delete <strong>{taskName}</strong>?</div>
        <div className="deleteSub">This action is permanent and cannot be undone.</div><br/>
       <div className="buttonContainer pb-3 pe-2 d-flex justify-content-end">
            <Button onClick={closeDelete} variant="info" className='cancelBtn'>Cancel</Button>
            <Button variant='danger' className='text-info mx-2'>Delete</Button>
       </div>      
    </div>
  )
}
