import React, { useState, useEffect } from 'react';
import './TaskContainer.css'
import EmptyToday from './EmptyToday';
import TaskPreview from './TaskPreview';

export default function TodayContainer({showAddTask,showOpenTask,showOpacity}) {
    const[todayTaskCount,setTodayTaskCount]=useState(1);
    const[visibleTodayEmpty,setVisisbleTodayEmpty]=useState(false)
    useEffect(() => {
      if (todayTaskCount === 0) {
          setVisisbleTodayEmpty(true);
      } else {
          setVisisbleTodayEmpty(false);
      }
  }, [todayTaskCount]);
  return (
    <div className="dashboardContainer d-flex ">
        <div className='todayContainer'>
            <div className="todayHeader">Today</div>
            <div className="taskCount"><i class="bi bi-bookmark-check-fill taskCountIcon"></i> {todayTaskCount} tasks</div>
            <hr/>
            {visibleTodayEmpty && <EmptyToday showAddTask={showAddTask} showOpacity={showOpacity}/>}
            <TaskPreview showOpenTask={showOpenTask} showOpacity={showOpacity}/>
        </div>
    </div>  
  )
}
