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

    const handleColorChange = (color) => {
      setColor(color.hex); 
    };

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

        axios.post('http://127.0.0.1:5000/dashboard/addTask', {
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
            console.log('Task added:', response.data);
        })
        .catch(error => {
            console.error('Error adding task:', error);
        });
    }


  return (
    <div className='fill-area'>
        <div className='add-container'>
            <input className='task-title' type='text' placeholder='Add a Title'/>
            <textarea className='task-desc' rows={7} placeholder='Add a Description'></textarea>
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
                <button onClick={closeAddTask} type="button" class="btn btn-info">Cancel</button>
                <button onClick={() => { closeAddTask(); addNewTask(); }}  type="button" class="btn btn-light save-btn">Save</button>
            </div>
        </div>
    </div>
  )
}
