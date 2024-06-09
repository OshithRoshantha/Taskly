import React, { useState } from 'react'

export default function UpcomingContainer() {
    const[upcomingTaskCount,setUpcomingTaskCount]=useState(0);
  return (
    <div className="dashboardContainer d-flex justify-content-center">
        <div className='todayContainer'>
            <div className="todayHeader">Upcoming</div>
            <div className="taskCount"><i class="bi bi-bookmark-check-fill taskCountIcon"></i> {upcomingTaskCount} tasks</div>
            <hr/>
        </div>
    </div>
  )
}
