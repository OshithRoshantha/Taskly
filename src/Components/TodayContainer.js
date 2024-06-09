import React, { useState } from 'react'
import './TaskContainer.css'

export default function TodayContainer() {
    const[todayTaskCount,setTodayTaskCount]=useState(0);
  return (
    <div className="dashboardContainer d-flex justify-content-center">
        <div className='todayContainer'>
            <div className="todayHeader">Today</div>
            <div className="taskCount"><i class="bi bi-bookmark-check-fill taskCountIcon"></i> {todayTaskCount} tasks</div>
            <hr/>
        </div>
    </div>
    
  )
}
