import React, { useState,useEffect } from 'react';
import './Styles/UpdateWindow.css'
import DatePicker from 'react-datepicker';
import { CirclePicker } from 'react-color';
import 'react-datepicker/dist/react-datepicker.css';
import Discard from './Discard';

export default function UpdateWindow({ taskTitle, taskDesc, taskDate, taskPriority, taskColor, handleDelete, handleUpdateModel}) {
    const [title, setTitle] = useState(taskTitle); 
    const [desc, setDesc] = useState(taskDesc); 
    const [selectedDate, setSelectedDate] = useState(taskDate);
    const [color, setColor] = useState(taskColor);
    const [backgroundColor, setBackgroundColor] = useState('blue-back');
    const [priority, setPriority] = useState(taskPriority);
    const [showDiscard, setShowDiscard] = useState(false);
    const [showUpdateBtn, setShowUpdateBtn] = useState(false);
    
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

    function closeUpdateBtnModel(){
        setShowUpdateBtn(false);
    }
  return (
    <div className='update-window'>
        <div className='update-inner'>
        {!showUpdateBtn && <div className="close-btn" onClick={handleUpdateModel}><i class="bi bi-x"></i></div>}        
            {showDiscard && <Discard closeUpdateBtnModel={closeUpdateBtnModel} hideDiscardModal={hideDiscardModal}/>}
            <div>
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
                        className={`date-picker ${backgroundColor}`}
                        selected={selectedDate}
                        onChange={(date) =>{setSelectedDate(date);updateBtnModel();}}
                        placeholderText='Due date'
                    />
                    <select style={{ marginLeft: '-13%' ,width:'20%',backgroundColor:color}} className='task-priority' value={priority} onChange={(e) => {
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
                <div className='btn-tray5'>
                    {showUpdateBtn && <button onClick={showDiscardModal} type="button" className="btn btn-info">Cancel</button>}  
                    {showUpdateBtn && <button onClick={closeUpdateBtnModel} type="button" className="btn btn-primary update-btn">Update</button>}
                    <button onClick={handleDelete} type="button" className="btn btn-danger save-btn"><i class="bi bi-trash deleteIcon"></i></button>
                </div>
            </div>
        </div>
    </div>
  )
}
