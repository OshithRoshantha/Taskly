import React, { useState, useEffect } from 'react';
import EmptyUpcoming from './EmptyUpcoming';

export default function UpcomingContainer({showAddTask,showOpacity}) {
    const[upcomingTaskCount,setUpcomingTaskCount]=useState(0);
    const[visibleUpcomingEmpty,setVisisbleUpcomingEmpty]=useState(false)
    useEffect(() => {
      if (upcomingTaskCount === 0) {
          setVisisbleUpcomingEmpty(true);
      } else {
          setVisisbleUpcomingEmpty(false);
      }
  }, [upcomingTaskCount]);
  return (
    <div className="dashboardContainer d-flex justify-content-center">
        <div className='todayContainer'>
            <div className="todayHeader">Upcoming</div>
            <div className="taskCount"><i class="bi bi-bookmark-check-fill taskCountIcon"></i> {upcomingTaskCount} tasks</div>
            <hr/>
            {visibleUpcomingEmpty && <EmptyUpcoming showAddTask={showAddTask} showOpacity={showOpacity}/>}           
        </div>
    </div>
  )
}
