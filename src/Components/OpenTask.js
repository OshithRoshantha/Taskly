import React, { useState, useRef, useEffect } from 'react';
import './OpenTask.css'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import UpdateForm from './UpdateForm';
import Delete from './Delete';
import Discard from './Discard';

export default function OpenTask({closeOpenTask}) {
    const[taskTitle,setTaskTitle]=useState('Test Title');
    const[description,setDescription]=useState('Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio adipisci harum accusamus vel, laboriosam soluta repudiandae ad obcaecati rem optio?');
    const[priotity,setPriotity]=useState('Medium');
    const[orginalDueDate,setOrginalDueDate]=useState('10/06/2024');

    const[dropSelect,setDropSelect]=useState(priotity);
    const taskInputRef = useRef(null);
    const descriptionInputRef = useRef(null);
    const[updateConatiner,setUpdateConatiner]=useState(false);
    const[deleteContainer,setDeleteContainer]=useState(false);
    const[discardContainer,setDiscardContainer]=useState(false);
    function showUpdateConatiner(){
      setUpdateConatiner(true);
    }
    function hideUpdateConatiner(){
      setUpdateConatiner(false);
    }
    function showDeleteContainer(){
      setDeleteContainer(true);
    }
    function hideDeleteContainer(){
      setDeleteContainer(false);
    }
    function showDiscardContainer(){
      setDiscardContainer(true);
    }
    function hideDiscardContainer(){
      setDiscardContainer(false);
    }
    useEffect(() => {
      const taskInputField = taskInputRef.current;
      const descriptionInputField = descriptionInputRef.current;
      taskInputField.value = taskTitle;
      descriptionInputField.value = description;
      const handleFocus = (inputField) => {
        setTimeout(() => {
          inputField.setSelectionRange(inputField.value.length, inputField.value.length);
        }, 0);
      };
      taskInputField.addEventListener('focus', () => handleFocus(taskInputField));
      descriptionInputField.addEventListener('focus', () => handleFocus(descriptionInputField));
      return () => {
        taskInputField.removeEventListener('focus', () => handleFocus(taskInputField));
        descriptionInputField.removeEventListener('focus', () => handleFocus(descriptionInputField));
      };
    }, [taskTitle, description]);
    function handleSelect(eventKey){
        setDropSelect(eventKey);
        showUpdateConatiner();
    }
    const [selectedDate, setSelectedDate] = useState(null);
    const handleChange = date => {
        setSelectedDate(date);
        showUpdateConatiner();
    }; 

    function save(){
      //update current data to API
    }
    function undo(){
      //read current data from API
    }

  return (
    <div className='addContainer'>
       {discardContainer && <Discard hideDiscardContainer={hideDiscardContainer} hideUpdateConatiner={hideUpdateConatiner} undo={undo}/>}
       {deleteContainer && <Delete hideDeleteContainer={hideDeleteContainer} closeOpenTask={closeOpenTask} taskTitle={taskTitle}/>}
       {updateConatiner && <UpdateForm hideUpdateConatiner={hideUpdateConatiner} showDiscardContainer={showDiscardContainer} save={save}/>}
       <Form className='px-0 py-0 formInputs'>
            <div className="closeBtn" onClick={closeOpenTask}><i class="bi bi-x-circle closeIcon"></i></div>
            <Form.Group controlId="taskName">
                <Form.Control type="text" className='taskinputField taskName openTaskTitle' onChange={showUpdateConatiner} required placeholder={taskTitle} ref={taskInputRef}/>
            </Form.Group>
            <Form.Group controlId="description">
                <Form.Control as="textarea" className='taskinputField description openTaskDescription' onChange={showUpdateConatiner}  required placeholder={description} ref={descriptionInputRef}/>
            </Form.Group>
       </Form>  
        <div className="dropdowns ps-4 formInputsButton">
        <img className='calanderIcon' src='../calendarIcon.png'/> 
        <DatePicker
            selected={selectedDate}     
            onChange={handleChange}
            dateFormat="dd/MM/yyyy"
            className="form-control datePick py-1 text-primary"
            placeholderText={selectedDate ? selectedDate.toLocaleDateString() :{orginalDueDate}}
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
       <div className="buttonContainer pb-3 pe-3 d-flex justify-content-end">
            <Button onClick={showDeleteContainer} className='ps-4 pe-1' variant='danger'><i class="bi bi-trash deleteIcon"></i></Button>
       </div>      
    </div>
  )
}
