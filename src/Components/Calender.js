import React, { useState } from 'react';
import { Calendar, momentLocalizer, Views } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './Calender.css'

const localizer = momentLocalizer(moment);

export default function Calender() {
    const [events, setEvents] = useState([]);

  return (
    <div className='custom-calendar'>
         <Calendar variant="primary"
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 280 }}
                views={['month']}
                defaultView={Views.MONTH}
                toolbar={true} 
            />
    </div>
  )
}
