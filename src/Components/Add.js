import React, { useState,useEffect } from 'react';
import './Styles/Add.css'
import DatePicker from 'react-datepicker';
import { CirclePicker } from 'react-color';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';

export default function Add({closeAddTask,getTasks}) {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate()+1);

    const [selectedDate, setSelectedDate] = useState(tomorrow);
    const [backgroundColor, setBackgroundColor] = useState('blue-back');
    const [color, setColor] = useState('#5D68C4');
    const [aiButton,setAiButton]=useState(false);
    const [taskTitle,setTaskTitle]=useState('');
    const [loading, setLoading] = useState(false);

    function showAiButton(){
        setAiButton(true);
    }

    function hideAiButton(){
        setAiButton(false);
    }

    const handleColorChange = (color) => {
      setColor(color.hex); 
    };

    function generateTitle(){
        const taskDesc = document.querySelector('.task-desc').value;
        const accessToken = localStorage.getItem('access_token');
        setLoading(true);
        setTaskTitle('');
        axios.post('http://localhost:8080/dashboard/generateTopic', {
            summary: taskDesc
          }, {
            headers: {
                Authorization: `Bearer ${accessToken}` 
            }
        }).then(response => {
            setTaskTitle(response.data.topic.replace(/\b\w/g, (char) => char.toUpperCase()));  
        })
        .catch(error => {
            console.error('Generating Error:', error);
        })
        .finally(() => {
            setLoading(false); 
        });
    }

    useEffect(() => {
        if(color=="#3496D4")
            setBackgroundColor('light-blue-back');
        else if(color=="#6BB779")
            setBackgroundColor('green-back');
        else if(color=="#D45661")
            setBackgroundColor('red-back');
        else if(color=="#D28E2F")
            setBackgroundColor('yellow-back');
        else if(color=="#5D68C4")
            setBackgroundColor('blue-back');
     }, [color]);

     function addNewTask(){
        const taskTitle = document.querySelector('.task-title').value;
        const taskDesc = document.querySelector('.task-desc').value;
        const taskPriority = document.querySelector('.task-priority').value;
        const accessToken = localStorage.getItem('access_token');

        axios.post('http://localhost:8080/dashboard/addTask', {
            taskTitle: taskTitle,
            taskDesc: taskDesc,
            taskColor: color,
            taskPriority: taskPriority,
            taskDate: selectedDate,
            status: "To do"
          }, {
            headers: {
                Authorization: `Bearer ${accessToken}` 
            }
        }).then(response => {
            getTasks();
        })
        .catch(error => {
            console.error('Error adding task:', error);
        });
    }


  return (
    <div className='fill-area'>
        <div className='add-container'>
            <input   className={`task-title ${loading ?'loading-animation':''}`} type='text' value={loading?'Generating...':taskTitle} placeholder='Add a Title'/>
            <textarea className='task-desc' rows={7} placeholder='Add a Description' onChange={showAiButton}></textarea>
            <div className='btn-tray'>
                <DatePicker 
                    className={`date-picker ${backgroundColor}`}
                    selected={selectedDate}
                    onChange={(date) => setSelectedDate(date)}
                    placeholderText='Due date'
                />
                <select className='task-priority' style={{backgroundColor:color}}>
                    <option value='3'>Low</option>
                    <option value='2'>Medium</option>
                    <option value='1' selected>High</option>
                </select>
                <CirclePicker
                    className='color-picker'
                    color={color}
                    onChangeComplete={handleColorChange}
                    colors={['#5D68C4', '#6BB779', '#D45661', '#D28E2F', '#3496D4']}
                />
            </div>
            <div className='btn-tray2'>
                <div className='empty-div'>
                    {aiButton && <button className="ai-generate-button" onClick={() =>{hideAiButton(); generateTitle();}}>AI Generate ✨</button>}
                </div>
                <button onClick={closeAddTask} type="button" class="btn btn-info">Cancel</button>
                <button onClick={() => { closeAddTask(); addNewTask(); }}  type="button" class="btn btn-light save-btn">Save</button>
            </div>
        </div>
    </div>
  )
}
