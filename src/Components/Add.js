import React, { useState } from 'react';
import './Styles/Add.css'
import DatePicker from 'react-datepicker';
import { CirclePicker } from 'react-color';
import 'react-datepicker/dist/react-datepicker.css';

export default function Add({closeAddTask}) {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate()+1);

    const [selectedDate, setSelectedDate] = useState(tomorrow);
    const [color, setColor] = useState('#FFD700');

    function handlePriority(e) {
        if (e.target.value === '1') {
            e.target.style.backgroundColor = 'green';
        } 
        else if (e.target.value === '2') {
            e.target.style.backgroundColor = 'orange';
        }   
        else {
            e.target.style.backgroundColor = 'red';
        }
    }

    const handleColorChange = (color) => {
      setColor(color.hex); 
    };

  return (
    <div className='fill-area'>
        <div className='add-container'>
            <input className='task-title' type='text' placeholder='Add a Title'/>
            <textarea className='task-desc' rows={7} placeholder='Add a Description'></textarea>
            <div className='btn-tray'>
                <DatePicker className='date-picker'
                    selected={selectedDate}
                    onChange={(date) => setSelectedDate(date)}
                    placeholderText='Due date'
                />
                <select className='task-priority' onChange={handlePriority}>
                    <option value='1'>Low</option>
                    <option value='2'>Medium</option>
                    <option value='3' selected>High</option>
                </select>
                <CirclePicker
                    className='color-picker'
                    color={color}
                    onChangeComplete={handleColorChange}
                    colors={['#007BFF', '#FF5733','#FFD700','#6F42C1']}
                />
            </div>
            <div className='btn-tray2'>
                <button onClick={closeAddTask} type="button" class="btn btn-info">Cancel</button>
                <button onClick={closeAddTask}  type="button" class="btn btn-light save-btn">Save</button>
            </div>
        </div>
    </div>
  )
}
