import React from 'react'
import './Styles/Dashboard.css'
import CardPreview from '../Components/CardPreview'
import Add from '../Components/Add'

export default function Dashboard() {
    const [addTask, setAddTask] = React.useState(false);

    function addTaskHandler(){
        setAddTask(true);
    }
    function closeAddTask(){
        setAddTask(false);
    }

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
                    <CardPreview taskColor={'#0000FF'} taskTitle={'title1'} taskDesc={description} taskPriority={priority} taskDate={date} status={"To do"}/> 
                    <CardPreview taskColor={'#0000FF'} taskTitle={'title2'} taskDesc={description} taskPriority={priority} taskDate={date} status={"To do"}/> 
                    <CardPreview taskColor={'#0000FF'} taskTitle={title} taskDesc={description} taskPriority={priority} taskDate={date} status={"To do"}/> 
                    <CardPreview taskColor={'#0000FF'} taskTitle={title} taskDesc={description} taskPriority={priority} taskDate={date} status={"To do"}/> 
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
                <CardPreview taskColor={'#0000FF'} taskTitle={title} taskDesc={description} taskPriority={priority} taskDate={date} status={"In progress"}/> 
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
                <CardPreview taskColor={'#0000FF'} taskTitle={title} taskDesc={description} taskPriority={priority} taskDate={date} status={"Done"}/> 
                <CardPreview taskColor={'#0000FF'} taskTitle={title} taskDesc={description} taskPriority={priority} taskDate={date} status={"Done"}/> 
                </div>
                <p onClick={addTaskHandler}  className='add-task' align='center'><i class="bi bi-plus-lg"></i>&nbsp;Add Task</p>
            </div>
            <div className='dashboard-item4'>
                <div className='head-text'><p className='b'>Notes & References</p></div>
            </div>
        </div>
    </div>
  )
}
