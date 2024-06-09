import React, { useState } from 'react'
import AppHeader from '../Components/AppHeader';
import AddTask from '../Components/AddTask';
import OpenTask from '../Components/OpenTask';
import TodayContainer from '../Components/TodayContainer';
import UpcomingContainer from '../Components/UpcomingContainer';
import Calender from '../Components/Calender';
import './Dashboard.css'


export default function Dashboard() {
  const[addTaskVisible,setAddTaskVisible]=useState(false);
  const[openTaskVisible,setOpenTaskVisible]=useState(false);
  const[visibleToday,setVisibleToday]=useState(true);
  const[visibleUpcoming,setVisibleUpcoming]=useState(false);
  function closeAddTask(){
    setAddTaskVisible(false);
  }
  function showAddTask(){
    setAddTaskVisible(true);
  }
  function closeOpenTask(){
    setOpenTaskVisible(false);
  }
  function showToday(){
    setVisibleToday(true);
  }
  function hideToday(){
    setVisibleToday(false);
  }
  function showUpcoming(){
    setVisibleUpcoming(true);
  }
  function hideUpcoming(){
    setVisibleUpcoming(false);
  }
  return (
    <div> 
        <AppHeader showAddTask={showAddTask} showToday={showToday} hideToday={hideToday} showUpcoming={showUpcoming} hideUpcoming={hideUpcoming}/>
        {addTaskVisible && <AddTask closeAddTask={closeAddTask}/>}
        {openTaskVisible && <OpenTask closeOpenTask={closeOpenTask}/>}
        <div className="calender_task">
            <Calender/>
            {visibleToday && <TodayContainer showAddTask={showAddTask}/>}
            {visibleUpcoming && <UpcomingContainer showAddTask={showAddTask}/>} 
        </div>
           
    </div>
  )
}
