import React from 'react'
import Button from 'react-bootstrap/Button';

export default function EmptyUpcoming({showAddTask}) {
  return (
    <div className='emptyContainer'>
        <img className='emptyIcon' src='../emptyTask.png'/>
        <br/>
        <div className="emptyText">What do you need to get done?</div>
        <Button onClick={showAddTask}  size='sm'><i class="bi bi-plus-circle-fill emptyAddTask"></i> Add task</Button>
    </div>
  )
}
