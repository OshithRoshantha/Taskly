import React, { useState } from 'react'
import AppHeader from '../Components/AppHeader';
import AddTask from '../Components/AddTask';
import OpenTask from '../Components/OpenTask';
import TodayContainer from '../Components/TodayContainer';
import UpcomingContainer from '../Components/UpcomingContainer';
import Calender from '../Components/Calender';
import './Dashboard.css'
import SearchTask from '../Components/SearchTask';
import BackOpacity from '../Components/BackOpacity';


export default function Dashboard() {
  const[addTaskVisible,setAddTaskVisible]=useState(false);
  const[openTaskVisible,setOpenTaskVisible]=useState(false);
  const[visibleToday,setVisibleToday]=useState(true);
  const[visibleUpcoming,setVisibleUpcoming]=useState(false);
  const[visibleSearch,setVisibleSearch]=useState(false);
  const[visibleOpacity,setVisibleOpacity]=useState(false);
  function showOpacity(){
    setVisibleOpacity(true);
  }
  function hideOpacity(){
    setVisibleOpacity(false);
  }
  function closeAddTask(){
    setAddTaskVisible(false);
  }
  function showAddTask(){
    setAddTaskVisible(true);
  }
  function closeOpenTask(){
    setOpenTaskVisible(false);
  }
  function showOpenTask(){
    setOpenTaskVisible(true);
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
  function showSearch(){
    setVisibleSearch(true);
  }
  function hideSearch(){
    setVisibleSearch(false);
  }
  return (
    <div> 
        <AppHeader showOpacity={showOpacity} hideOpacity={hideOpacity} closeAddTask={closeAddTask} hideSearch={hideSearch} showSearch={showSearch} showAddTask={showAddTask} showToday={showToday} hideToday={hideToday} showUpcoming={showUpcoming} hideUpcoming={hideUpcoming}/>
        {visibleOpacity && <BackOpacity/>} 
        {addTaskVisible && <AddTask closeAddTask={closeAddTask} hideOpacity={hideOpacity}/>}
        {openTaskVisible && <OpenTask closeOpenTask={closeOpenTask} hideOpacity={hideOpacity}/>}
        {visibleSearch &&  <SearchTask hideOpacity={hideOpacity} hideSearch={hideSearch}/>}
        <div className="calender_task">
            <Calender/>
            {visibleToday && <TodayContainer showAddTask={showAddTask} showOpenTask={showOpenTask} showOpacity={showOpacity}/>}
            {visibleUpcoming && <UpcomingContainer showAddTask={showAddTask} showOpenTask={showOpenTask} showOpacity={showOpacity}/>} 
        </div>        
    </div>
  )
}
