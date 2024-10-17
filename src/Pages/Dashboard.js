import React from 'react'
import './Styles/Dashboard.css'
import CardPreview from '../Components/CardPreview'

export default function Dashboard() {
    var title="sdffdbfjhfbfksnfskdfnskfsndfkjsnfdjfskdf";
    var description="sdffdbfjhfbfksnfskdfndfgdgdfffffffffffffffffffffffffsdfsffsfdsfsdfsfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffskfsndfkjsnfdjfskdf";
    var priority="MID";
    var date=12/12/2021;
  return (
    <div className='main-layout'>
        <div className='head-strip h4 mb-0'>Dashboard</div>
        <div className='dashboard-container'>
            <div className='dashboard-item1'>
                <div className='head-text'><p className='b'>To do</p><i class="bi bi-plus-lg addBtn"></i></div>
                <CardPreview title={title} description={description} priority={priority} date={date} status={"To do"}/>
            </div>
            <div className='dashboard-item2'>
                <div className='head-text'><p className='b'>In progress</p><i class="bi bi-plus-lg addBtn"></i></div>               
            </div>
            <div className='dashboard-item3'>
                <div className='head-text'><p className='b'>Done</p><i class="bi bi-plus-lg addBtn"></i></div>
            </div>
            <div className='dashboard-item4'>
                <div className='head-text'><p className='b'>Notes & References</p></div>
            </div>
        </div>
    </div>
  )
}
