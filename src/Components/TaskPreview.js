import React, { useState } from 'react'
import './TaskPreview.css'
import Card from 'react-bootstrap/Card';

export default function TaskPreview() {
    const[taskTitle,setTaskTitle]=useState('task name');
    const[taskDescription,setTaskDescription]=useState('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx');
    const[prior,setPrior]=useState('Medium');
    const[dueDate,setDueDate]=useState('10/06/2024');
  return (
    <div className='taskCard'>
    <Card className='hoverCard'>
      <Card.Header>  
        <div className="cardHeader">
            <div className="cardHeaderL"><i class="bi bi-signpost taskIcon"></i> {prior} priority</div>
            <div className="cardHeaderR">{dueDate}</div>
        </div>
        </Card.Header>
      <Card.Body>
        <Card.Title>{taskTitle}</Card.Title>
        <Card.Text>
          {taskDescription}
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  )
}
