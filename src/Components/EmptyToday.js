import React from 'react'
import './EmptyToday.css'
import Button from 'react-bootstrap/Button';

export default function EmptyToday({ showAddTask }) {
  return (
    <div className='emptyContainer'>
        <img className='emptyIcon' src='../emptyTask.png'/>
        <br/>
        <div className="emptyText">What do you need to get done?</div>
        <Button onClick={showAddTask} size='sm'><i class="bi bi-plus-circle-fill emptyAddTask"></i> Add task</Button>
    </div>
  )
}
