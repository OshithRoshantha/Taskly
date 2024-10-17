import './Styles/Update.css';
import React, { useState } from 'react';
import './Styles/Add.css';
import DatePicker from 'react-datepicker';
import { CirclePicker } from 'react-color';
import 'react-datepicker/dist/react-datepicker.css';

export default function Update({ taskTitle, taskDesc, taskDate, taskPriority, taskColor, hideUpdateModal }) {
    const [title, setTitle] = useState(taskTitle); 
    const [desc, setDesc] = useState(taskDesc); 
    const [selectedDate, setSelectedDate] = useState(taskDate);
    const [color, setColor] = useState(taskColor);
    const [priority, setPriority] = useState(taskPriority);

    const handleColorChange = (color) => {
        setColor(color.hex); 
    };

    const handlePriorityChange = (e) => {
        setPriority(e.target.value); 
    };

    return (
        <div className='fill-area'>
            <div className='add-container'>
                <input
                    className='task-title update-title'
                    type='text'
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)} 
                />
                <textarea
                    className='task-desc update-desc'
                    rows={7}
                    value={desc} 
                    onChange={(e) => setDesc(e.target.value)}
                ></textarea>
                <div className='btn-tray btn-tray3'>
                    <DatePicker
                        className='date-picker'
                        selected={selectedDate}
                        onChange={(date) => setSelectedDate(date)}
                        placeholderText='Due date'
                    />
                    <select style={{ marginLeft: '-13%' }} className='task-priority' value={priority} onChange={handlePriorityChange}>
                        <option value='LOW'>Low</option>
                        <option value='MID'>Medium</option>
                        <option value='HIGH'>High</option>
                    </select>
                    <CirclePicker
                        className='color-picker'
                        color={color}
                        onChangeComplete={handleColorChange}
                        colors={['#0000FF', '#FF0000', '#FFD700', '#800080']}
                    />
                </div>
                <div className='btn-tray2'>
                    <button onClick={hideUpdateModal} type="button" className="btn btn-info">Cancel</button>
                    <button onClick={hideUpdateModal} type="button" className="btn btn-light save-btn">Save</button>
                </div>
            </div>
        </div>
    );
}
