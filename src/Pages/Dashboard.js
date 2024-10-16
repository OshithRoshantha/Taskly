import React from 'react'
import './Styles/Dashboard.css'

export default function Dashboard() {
  return (
    <div className='main-layout'>
        <div className='head-strip h4 mb-0'>Dashboard</div>
        <div className='dashboard-container'>
            <div className='dashboard-item1'>
                <div className='head-text'><p className='b'>To do</p><i class="bi bi-plus-lg addBtn"></i></div>
                
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
