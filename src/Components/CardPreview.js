import React from 'react'
import './Styles/CardPreview.css'

export default function CardPreview({title, description, priority, date}) {
  return (
    <div className='card-layout'>
        <h5 className='card-title'>{title.length>27?`${title.slice(0,27)}...`:title}</h5>
        <p className='card-description display-4'>{description.length>148?`${description.slice(0,148)}...`:description}</p>
        <div className='card-bottom'>
            <div className='card-toggle'><i class="bi bi-three-dots-vertical"></i></div>
            <div className={`card-priority ${priority}`}><i class="bi bi-bullseye"></i>&nbsp;{priority}</div>
            <div className='card-date'>
                <b>17</b><span className='month'>DEC</span>
            </div>
        </div>

    </div>
  )
}
