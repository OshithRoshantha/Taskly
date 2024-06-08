import React, { useState } from 'react'
import AppHeader from '../Components/AppHeader';
import AddTask from '../Components/AddTask';

export default function Dashboard() {
  const[addTaskVisible,setAddTaskVisible]=useState(false);
  function closeAddTask(){
    setAddTaskVisible(false);
  }
  function showAddTask(){
    setAddTaskVisible(true);
  }
  return (
    <div> 
        <AppHeader showAddTask={showAddTask}/>
        {addTaskVisible && <AddTask closeAddTask={closeAddTask}/>}
    </div>
  )
}
