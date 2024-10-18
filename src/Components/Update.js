import './Styles/Update.css';
import React, { useState } from 'react';
import './Styles/Add.css';
import DatePicker from 'react-datepicker';
import { CirclePicker } from 'react-color';
import 'react-datepicker/dist/react-datepicker.css';
import Discard from './Discard';

export default function Update({ taskTitle, taskDesc, taskDate, taskPriority, taskColor, handleDelete,hideUpdateModal}) {
    const [title, setTitle] = useState(taskTitle); 
    const [desc, setDesc] = useState(taskDesc); 
    const [selectedDate, setSelectedDate] = useState(taskDate);
    const [color, setColor] = useState(taskColor);
    const [priority, setPriority] = useState(taskPriority);
    const [showDiscard, setShowDiscard] = useState(false);
    const [showUpdateBtn, setShowUpdateBtn] = useState(false);
    const handleColorChange = (color) => {
        setColor(color.hex); 
    };

    const handlePriorityChange = (e) => {
        setPriority(e.target.value); 
    };

    function showDiscardModal(){
        setShowDiscard(true);
    }

    function hideDiscardModal(){
        setShowDiscard(false);
    }

    function updateBtnModel(){
        setShowUpdateBtn(true);
    }

    return (
        <div className='fill-area2'>
            {showDiscard && <Discard hideUpdateModal={hideUpdateModal} hideDiscardModal={hideDiscardModal}/>}
            <div className='update-container'>
                <input
                    className='task-title update-title'
                    type='text'
                    value={title} 
                    onChange={(e) => {setTitle(e.target.value); updateBtnModel();}} 
                />
                <textarea
                    className='task-desc update-desc'
                    rows={7}
                    value={desc} 
                    onChange={(e) => {setDesc(e.target.value); updateBtnModel();}}
                ></textarea>
                <div className='btn-tray btn-tray3'>
                    <DatePicker
                        className='date-picker'
                        selected={selectedDate}
                        onChange={(date) =>{setSelectedDate(date);updateBtnModel();}}
                        placeholderText='Due date'
                    />
                    <select style={{ marginLeft: '-13%' ,width:'20%',backgroundColor:taskColor}} className='task-priority' value={priority} onChange={(e) => {
                        handlePriorityChange(e);
                        updateBtnModel();
                    }}>
                        <option value='LOW'>Low</option>
                        <option value='MID'>Medium</option>
                        <option value='HIGH'>High</option>
                    </select>
                    <CirclePicker
                        className='color-picker'
                        color={color}
                        onChangeComplete={(color) => {
                            handleColorChange(color); 
                            updateBtnModel();
                        }}
                        colors={['#5D68C4', '#6BB779', '#D45661', '#D28E2F', '#3496D4']}
                    />
                </div>
                <div className='btn-tray2'>
                    <button onClick={showDiscardModal} type="button" className="btn btn-info">Cancel</button>
                    {showUpdateBtn && <button onClick={hideUpdateModal} type="button" className="btn btn-primary update-btn">Update</button>}
                    <button onClick={handleDelete} type="button" className="btn btn-danger save-btn"><i class="bi bi-trash deleteIcon"></i></button>
                </div>
            </div>
        </div>
    );
}
