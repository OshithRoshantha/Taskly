import React from 'react'
import './Styles/Dashboard.css'
import CardPreview from '../Components/CardPreview'
import Add from '../Components/Add'
import { PieChart } from 'react-minimal-pie-chart';

export default function Dashboard() {
    const [addTask, setAddTask] = React.useState(false);

    function addTaskHandler(){
        setAddTask(true);
    }
    function closeAddTask(){
        setAddTask(false);
    }

    var inProgressCount=120;
    var toDoCount=15;
    var doneCount=20;
    var title="Test Titlesdgsdsdfsdfsjkfsdjkfnsjfnakjlfjknjkfaejkgjkerfgnjekgerge";
    var description="sdffdbfjhfbfksnfskdfndfgdgdfffffffffffffffffffffffffsdfsffsfdsfsdfsfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffskfsndfkjsnfdjfskdf";
    var priority="MID";
    const date = new Date();
    
  return (
    <div className='main-layout'>
        {addTask && <Add closeAddTask={closeAddTask}/>}
        <div className='head-strip h4 mb-0'>Dashboard</div>
        <div className='dashboard-container'>
            <div className='dashboard-item1'>
                <div className='head-text'>
                    <p className='b'>To do</p>
                    <div className='sort-by-full'>
                        <i class="bi bi-sort-alpha-down"></i>&nbsp;&nbsp;
                        <select className='sort-by'>
                            <option selected>Due Date</option>
                            <option>Priority</option>
                        </select> 
                    </div>
                </div>
                <div className='item-inner'>
                    <CardPreview taskColor={'#5D68C4'} taskTitle={title} taskDesc={description} taskPriority={priority} taskDate={date} status={"To do"}/> 
                    <CardPreview taskColor={'#6BB779'} taskTitle={title} taskDesc={description} taskPriority={priority} taskDate={date} status={"To do"}/> 
                    <CardPreview taskColor={'#D45661'} taskTitle={title} taskDesc={description} taskPriority={priority} taskDate={date} status={"To do"}/> 
                    <CardPreview taskColor={'#D28E2F'} taskTitle={title} taskDesc={description} taskPriority={priority} taskDate={date} status={"To do"}/> 
                </div>
                <p onClick={addTaskHandler} className='add-task' align='center'><i class="bi bi-plus-lg"></i>&nbsp;Add Task</p>
            </div>
            <div className='dashboard-item2'>
                <div className='head-text head-text2'>
                    <p className='b'>In progress</p>
                    <div className='sort-by-full'>
                        <i class="bi bi-sort-alpha-down"></i>&nbsp;&nbsp;
                        <select className='sort-by'>
                            <option selected>Due Date</option>
                            <option>Priority</option>
                        </select> 
                    </div>
                </div>
                <div className='item-inner'>
                <CardPreview taskColor={'#3496D4'} taskTitle={title} taskDesc={description} taskPriority={priority} taskDate={date} status={"In progress"}/> 
                </div>  
                <p onClick={addTaskHandler}  className='add-task' align='center'><i class="bi bi-plus-lg"></i>&nbsp;Add Task</p>       
            </div>
            <div className='dashboard-item3'>
                <div className='head-text'>
                    <p className='b'>Done</p>
                    <div className='sort-by-full'>
                        <i class="bi bi-sort-alpha-down"></i>&nbsp;&nbsp;
                        <select className='sort-by'>
                            <option selected>Due Date</option>
                            <option>Priority</option>
                        </select> 
                    </div>
                </div>
                <div className='item-inner'>
                <CardPreview taskColor={'#3496D4'} taskTitle={title} taskDesc={description} taskPriority={priority} taskDate={date} status={"Done"}/> 
                <CardPreview taskColor={'#3496D4'} taskTitle={title} taskDesc={description} taskPriority={priority} taskDate={date} status={"Done"}/> 
                </div>
                <p onClick={addTaskHandler}  className='add-task' align='center'><i class="bi bi-plus-lg"></i>&nbsp;Add Task</p>
            </div>
            <div className='dashboard-item4'>
                <div className='head-text'></div>
                <div className='item-inner'>
                    <div className='box2'>
                        <p style={{ marginBottom: "0" }}>Hello,</p>
                        <h2>Oshith</h2>
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
