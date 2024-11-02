import React, { useState,useEffect } from 'react';
import './Styles/Dashboard.css'
import CardPreview from '../Components/CardPreview'
import Add from '../Components/Add'
import { PieChart } from 'react-minimal-pie-chart';
import axios from 'axios';

export default function Dashboard() {
    const [addTask, setAddTask] = React.useState(false);
    const [toDoTasks, setToDoTasks] = useState([]);
    const [inProgressTasks, setInProgressTasks] = useState([]);
    const [doneTasks, setDoneTasks] = useState([]);
    const [inProgressCount, setInProgressCount] = useState(0);
    const [toDoCount, setToDoCount] = useState(0);
    const [doneCount, setDoneCount] = useState(0);
    const [userName, setUserName] = useState('');

    function addTaskHandler(){
        setAddTask(true);
    }
    function closeAddTask(){
        setAddTask(false);
    }

    function getTasks(){
        const sortToDo = document.querySelector('.sort-toDo').value;
        const sortInProgress = document.querySelector('.sort-inProgress').value;
        const sortDone = document.querySelector('.sort-done').value;

        fetchTasks("To do",sortToDo, setToDoTasks);
        fetchTasks("In progress",sortInProgress, setInProgressTasks);
        fetchTasks("Done",sortDone, setDoneTasks);
        getTaskCount("To do",setToDoCount);
        getTaskCount("In progress",setInProgressCount);
        getTaskCount("Done",setDoneCount);
    }

    function fetchTasks(status, sort, stateRef) {
        const accessToken = localStorage.getItem('access_token'); 

        axios.post('http://taskly-backend-service:5000/dashboard', {
            status: status,
            sort: sort
        }, {
            headers: {
                Authorization: `Bearer ${accessToken}` 
            }
        })
        .then(response => {
            stateRef(response.data.tasks);
        })
        .catch(err => {
            console.error('Error fetching tasks:', err);
        });
    }

    function logout(){
        window.location.href = '/';
    }

    const mapPriority=(priority) => {
        switch (priority) {
            case "1":
                return "HIGH";
            case "2":
                return "MID";
            case "3":
                return "LOW";
        }
    };

    function getUser(){
        const accessToken = localStorage.getItem('access_token');
        axios.post('http://taskly-backend-service:5000/dashboard/userInfo',{},{
            headers: {
                Authorization: `Bearer ${accessToken}` 
            }
        })
        .then(response => {
            setUserName(response.data.user.first_name);
        })
        .catch(error => {
            console.error('Error fetching user:', error);
        });
    }

    function getTaskCount(status,countRef){
        const accessToken = localStorage.getItem('access_token');

        axios.post('http://taskly-backend-service:5000/dashboard/count', {
            status: status
          }, {
            headers: {
                Authorization: `Bearer ${accessToken}` 
            }
        }).then(response => {
            countRef(response.data.count);
        })
        .catch(error => {
            console.error('Error adding task:', error);
        });
    }

    useEffect(() => {
        getTasks(); 
        getUser();
    }, []);
 
  return (
    <div className='main-layout'>
        {addTask && <Add getTasks={getTasks} closeAddTask={closeAddTask}/>}
        <div className='head-strip h4 mb-0'>Dashboard
            <button onClick={() => {logout()}} type="button" class="btn btn-danger">Log out</button>
        </div>
        <div className='dashboard-container'>
            <div className='dashboard-item1'>
                <div className='head-text'>
                    <p className='b'>To do</p>
                    <div className='sort-by-full'>
                        <i class="bi bi-sort-alpha-down"></i>&nbsp;&nbsp;
                        <select className='sort-by sort-toDo' onChange={getTasks}>
                            <option value="date" selected>Due Date</option>
                            <option value="priority">Priority</option>
                        </select> 
                    </div>
                </div>
                <div className='item-inner'>
                    {toDoTasks.map(task => (
                        <CardPreview 
                            taskId={task._id} 
                            taskColor={task.taskColor}
                            taskTitle={task.taskTitle} 
                            taskDesc={task.taskDesc}
                            taskPriority={mapPriority(task.taskPriority)} 
                            taskDate={new Date(task.taskDate)} 
                            status={task.status}
                            getTasks={getTasks}
                        />
                    ))}
                </div>
                <p onClick={addTaskHandler} className='add-task' align='center'><i class="bi bi-plus-lg"></i>&nbsp;Add Task</p>
            </div>
            <div className='dashboard-item2'>
                <div className='head-text head-text2'>
                    <p className='b'>In progress</p>
                    <div className='sort-by-full'>
                        <i class="bi bi-sort-alpha-down"></i>&nbsp;&nbsp;
                        <select className='sort-by sort-inProgress' onChange={getTasks}>
                            <option value="date" selected>Due Date</option>
                            <option value="priority">Priority</option>
                        </select> 
                    </div>
                </div>
                <div className='item-inner'>
                    {inProgressTasks.map(task => (
                        <CardPreview 
                            taskId={task._id} 
                            taskColor={task.taskColor}
                            taskTitle={task.taskTitle} 
                            taskDesc={task.taskDesc}
                            taskPriority={mapPriority(task.taskPriority)} 
                            taskDate={new Date(task.taskDate)} 
                            status={task.status}
                            getTasks={getTasks}
                        />
                    ))}
                </div>  
                <p onClick={addTaskHandler}  className='add-task' align='center'><i class="bi bi-plus-lg"></i>&nbsp;Add Task</p>       
            </div>
            <div className='dashboard-item3'>
                <div className='head-text'>
                    <p className='b'>Done</p>
                    <div className='sort-by-full'>
                        <i class="bi bi-sort-alpha-down"></i>&nbsp;&nbsp;
                        <select className='sort-by sort-done' onChange={getTasks}>
                            <option value="date" selected>Due Date</option>
                            <option value="priority">Priority</option>
                        </select> 
                    </div>
                </div>
                <div className='item-inner'>
                    {doneTasks.map(task => (
                        <CardPreview 
                            taskId={task._id} 
                            taskColor={task.taskColor}
                            taskTitle={task.taskTitle} 
                            taskDesc={task.taskDesc}
                            taskPriority={mapPriority(task.taskPriority)} 
                            taskDate={new Date(task.taskDate)} 
                            status={task.status}
                            getTasks={getTasks}
                        />
                    ))}
                </div>
                <p onClick={addTaskHandler}  className='add-task' align='center'><i class="bi bi-plus-lg"></i>&nbsp;Add Task</p>
            </div>
            <div className='dashboard-item4'>
                <div className='head-text'></div>
                <div className='item-inner'>
                    <div className='box2'>
                        <p style={{ marginBottom: "0" }}>Hello,</p>
                        <h2>{userName}</h2>
                    </div>
                </div>
                <div className='item-inner'>
                    <div className='box1'>Task Activity
                    <p className='percentage-txt'>
                        <h1 style={{ marginBottom: "0" }}>{toDoCount}</h1>
                        <p  style={{ marginBottom: "0" }} className='to-do'>TO DO</p>
                    </p>
                    <PieChart className='pie-chart'
                        data={[
                            { title: 'In progress', value: inProgressCount, color: '#413ac8' },
                            { title: 'To do', value: toDoCount, color: '#f8a731' },
                            { title: 'Done', value: doneCount, color: '#0d94cb' },
                        ]}
                        lineWidth={40} 
                        radius={40}     
                        animate 
                    />;
                    <div className='legend'><i class="bi bi-circle-fill ip"></i>&nbsp;In progress &nbsp;<i class="bi bi-circle-fill td"></i>&nbsp;To do &nbsp;<i class="bi bi-circle-fill do"></i>&nbsp;Done</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
