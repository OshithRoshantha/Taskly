import React from 'react'
import './Styles/Dashboard.css'
import CardPreview from '../Components/CardPreview'

export default function Dashboard() {
    var title="Test Titlesdgsdsdfsdfsjkfsdjkfnsjfnakjlfjknjkfaejkgjkerfgnjekgerge";
    var description="sdffdbfjhfbfksnfskdfndfgdgdfffffffffffffffffffffffffsdfsffsfdsfsdfsfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffskfsndfkjsnfdjfskdf";
    var priority="MID";
    var date=12/12/2021;
  return (
    <div className='main-layout'>
        <div className='head-strip h4 mb-0'>Dashboard</div>
        <div className='dashboard-container'>
            <div className='dashboard-item1'>
                <div className='head-text'><p className='b'>To do</p><i class="bi bi-plus-lg addBtn"></i></div>
                <div className='item-inner'>
                    <CardPreview title={title} description={description} priority={priority} date={date} status={"To do"}/> 
                    <CardPreview title={title} description={description} priority={priority} date={date} status={"To do"}/> 
                    <CardPreview title={title} description={description} priority={priority} date={date} status={"To do"}/>
                </div>
                <p className='add-task' align='center'><i class="bi bi-plus-lg"></i>&nbsp;Add Task</p>
            </div>
            <div className='dashboard-item2'>
                <div className='head-text'><p className='b'>In progress</p><i class="bi bi-plus-lg addBtn"></i></div>
                <div className='item-inner'>
                    <CardPreview title={title} description={description} priority={priority} date={date} status={"In progress"}/> 
                </div>  
                <p className='add-task' align='center'><i class="bi bi-plus-lg"></i>&nbsp;Add Task</p>       
            </div>
            <div className='dashboard-item3'>
                <div className='head-text'><p className='b'>Done</p><i class="bi bi-plus-lg addBtn"></i></div>
                <div className='item-inner'>
                    <CardPreview title={title} description={description} priority={priority} date={date} status={"Done"}/> 
                    <CardPreview title={title} description={description} priority={priority} date={date} status={"Done"}/> 
                </div>
                <p className='add-task' align='center'><i class="bi bi-plus-lg"></i>&nbsp;Add Task</p>
            </div>
            <div className='dashboard-item4'>
                <div className='head-text'><p className='b'>Notes & References</p></div>
            </div>
        </div>
    </div>
  )
}
