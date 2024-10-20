import React from 'react'
import './Styles/Delete.css'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default function({taskTitle,handleDelete2,taskId,getTasks}) {

function deleteTask(taskId) {
    const accessToken = localStorage.getItem('access_token');  
    axios.delete(`http://127.0.0.1:5000/dashboard`, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      },
      data: {
        taskId: taskId 
      }
    }).then(response => {
      console.log('Task deleted:', response.data);
      getTasks(); 
    })
    .catch(error => {
      console.error('Error deleting task:', error);
    });
}

  return (
    <div className='fill-area'>
      <div className='addContainer pt-3 ps-3 deleteContainer'>  
        <div className="deleteHead"><i class="bi bi-exclamation-circle text-danger deleteIcon"></i><br/>Are you sure you want to delete<br/> <strong>{taskTitle}</strong>?</div>
        <div className="deleteSub">This action is permanent and cannot be undone.</div><br/>
        <div className="buttonContainer pb-3 pe-2 d-flex justify-content-end">
            <Button onClick={() => {handleDelete2()}} variant="info" className='cancelBtn'>Cancel</Button>
            <Button onClick={() => {handleDelete2();deleteTask()}} variant='danger' className='text-info mx-2'>Delete</Button>
        </div>      
      </div>
    </div>
  )
}
