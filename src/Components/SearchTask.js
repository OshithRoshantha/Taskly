import React, { useState } from 'react'
import './SearchTask.css'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function SearchTask({hideSearch,hideOpacity}) {
    const[dropSelect,setDropSelect]=useState("");
    function handleSelect(eventKey){
        setDropSelect(eventKey);
    }
    const [selectedDate, setSelectedDate] = useState(null);
    const handleChange = date => {
    setSelectedDate(date);
    }; 
  return (
    <div className='addContainer searchContainer'>
        <img className='searchIcon' src='../searchIcon.png'/> 
        <img onClick={() => {hideSearch();hideOpacity()}} className='closeIconSearch' src='../closeIcon.png'/> 
        <Form>
            <Form.Control className='searchTitle taskinputField' type="text" placeholder="Task title..." required />
        </Form>
        <hr/>
        <div className="searchHeadings">Sort</div>
        <div className="sortBtn">
            <DatePicker
                selected={selectedDate}
                onChange={handleChange}
                dateFormat="dd/MM/yyyy"
                className="form-control datePick2 py-1 text-dark"
                placeholderText={selectedDate ? selectedDate.toLocaleDateString() :'Due date'}
            />
            <div className="sortDrop">
                <Dropdown onSelect={handleSelect}>
                <Dropdown.Toggle variant="outline-dark" className='mx-2 dropBtn2 py-1'  id="dropdown-basic">
                {dropSelect || "Priority"}
                </Dropdown.Toggle>
                <Dropdown.Menu className='dMenu'>
                    <Dropdown.Item eventKey="High"><i class="bi bi-signpost dropMenuIcon high"></i> High</Dropdown.Item>
                    <Dropdown.Item eventKey="Medium"><i class="bi bi-signpost dropMenuIcon mid"></i> Medium</Dropdown.Item>
                    <Dropdown.Item eventKey="Low"><i class="bi bi-signpost dropMenuIcon low"></i> Low</Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>
            </div>           
            <Button onClick={() => {hideSearch();hideOpacity()}} variant="outline-dark" className='sortSearch'>Search</Button>
        </div>
    </div>
  )
}
