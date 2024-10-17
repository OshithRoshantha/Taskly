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
                <select className='task-priority'>
                    <option value='LOW'>Low</option>
                    <option value='MID'>Medium</option>
                    <option value='HIGH' selected>High</option>
                </select>
                <CirclePicker
                    className='color-picker'
                    color={color}
                    onChangeComplete={handleColorChange}
                    colors={['#0000FF', '#FF0000','#FFD700','#800080']}
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
