import React, { useState } from 'react'
import AppHeader from '../Components/AppHeader';
import AddTask from '../Components/AddTask';
import OpenTask from '../Components/OpenTask';


export default function Dashboard() {
  const[addTaskVisible,setAddTaskVisible]=useState(false);
  const[openTaskVisible,setOpenTaskVisible]=useState(true);
  function closeAddTask(){
    setAddTaskVisible(false);
  }
  function showAddTask(){
    setAddTaskVisible(true);
  }
  function closeOpenTask(){
    setOpenTaskVisible(false);
  }
  return (
    <div> 
        <AppHeader showAddTask={showAddTask}/>
        {addTaskVisible && <AddTask closeAddTask={closeAddTask}/>}
        {openTaskVisible && <OpenTask closeOpenTask={closeOpenTask}/>}
            
    </div>
  )
}
