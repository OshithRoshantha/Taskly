import React, { useState } from 'react';
import './Styles/Add.css'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function Add() {
    const [selectedDate, setSelectedDate] = useState(null);
  return (
    <div className='fill-area'>
        <div className='add-container'>
            <input className='task-title' type='text' placeholder='Add a Title'/>
            <textarea className='task-desc' rows={7} placeholder='Add a Description'></textarea>
            <div className='btn-tray'>
                <DatePicker className='date-picker'
                    selected={selectedDate}
                    onChange={(date) => setSelectedDate(date)}
                    placeholderText='Pick a Date'
                />
            </div>
            <div className='btn-tray2'>
                <button type="button" class="btn btn-info">Cancel</button>
                <button type="button" class="btn btn-light save-btn">Save</button>
            </div>
        </div>
    </div>
  )
}
