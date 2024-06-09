import React, { useState } from 'react'
import './AddTask.css'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


export default function AddTask({closeAddTask}) {
    const[dropSelect,setDropSelect]=useState("");
    function handleSelect(eventKey){
        setDropSelect(eventKey);
    }
    const [selectedDate, setSelectedDate] = useState(null);
    const handleChange = date => {
    setSelectedDate(date);
    }; 
  return (
    <div className='addContainer'>
       <Form className='px-3 py-2'>
            <Form.Group controlId="taskName">
                <Form.Control type="text" className='taskinputField taskName' required placeholder="Task Name"/>
            </Form.Group>
            <Form.Group controlId="description">
                <Form.Control as="textarea" className='taskinputField description' required placeholder="Description"/>
            </Form.Group>
       </Form>  
        <div className="dropdowns ps-4">
        <img className='calanderIcon' src='../calendarIcon.png'/> 
        <DatePicker
            selected={selectedDate}
            onChange={handleChange}
            dateFormat="dd/MM/yyyy"
            className="form-control datePick py-1 text-primary"
            placeholderText={selectedDate ? selectedDate.toLocaleDateString() :'Due date'}
        />      
       <Dropdown onSelect={handleSelect}>
            <Dropdown.Toggle variant="outline-primary" className='mx-2 dropBtn py-1'  id="dropdown-basic">
            <i class="bi bi-signpost dropIcon"></i> {dropSelect || "Priority"}
            </Dropdown.Toggle>
            <Dropdown.Menu className='dMenu'>
                <Dropdown.Item eventKey="High"><i class="bi bi-signpost dropMenuIcon high"></i> High</Dropdown.Item>
                <Dropdown.Item eventKey="Medium"><i class="bi bi-signpost dropMenuIcon mid"></i> Medium</Dropdown.Item>
                <Dropdown.Item eventKey="Low"><i class="bi bi-signpost dropMenuIcon low"></i> Low</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
        </div>
       <hr/>
       <div className="buttonContainer pb-3 pe-2 d-flex justify-content-end">
            <Button onClick={closeAddTask} variant="info" className='cancelBtn'>Cancel</Button>
            <Button onClick={closeAddTask} className='text-info mx-2'>Add Task</Button>
       </div>      
    </div>
  )
}
