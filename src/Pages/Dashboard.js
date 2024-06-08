import React, { useState } from 'react'
import AppHeader from '../Components/AppHeader';
import AddTask from '../Components/AddTask';
import Delete from '../Components/Delete';

export default function Dashboard() {
  const[addTaskVisible,setAddTaskVisible]=useState(false);
  const[deleteVisible,setDeleteVisible]=useState(false);
  function closeAddTask(){
    setAddTaskVisible(false);
  }
  function showAddTask(){
    setAddTaskVisible(true);
  }
  function closeDelete(){
    setDeleteVisible(false);
  }
  function showDelete(){
    setDeleteVisible(true);
  }
  return (
    <div> 
        <AppHeader showAddTask={showAddTask}/>
        {addTaskVisible && <AddTask closeAddTask={closeAddTask}/>}
        {deleteVisible && <Delete closeDelete={closeDelete}/>}       
    </div>
  )
}
