import React, { useEffect, useRef } from 'react';
import './Styles/CardPreview.css'

export default function CardPreview({title, description, priority, date, status}) {
    const [isExpanded, setIsExpanded] = React.useState(false);
    const[dropDownItem1,setDropDownItem1]=React.useState(true);
    const[dropDownItem2,setDropDownItem2]=React.useState(true);
    const[dropDownItem3,setDropDownItem3]=React.useState(true);

    function handleExpand1(){
        setIsExpanded(true);
    }

    function handleExpand2(){
        setIsExpanded(false);
    }

    useEffect(() => {
        if (status === "To do") {
            setDropDownItem1(false);
            setDropDownItem2(true);
            setDropDownItem3(true);
        } else if (status === "In progress") {
            setDropDownItem2(false);
            setDropDownItem1(true);
            setDropDownItem3(true);
        } else if (status === "Done") {
            setDropDownItem3(false);
            setDropDownItem1(true);
            setDropDownItem2(true);
        }
    }, [status]);

  return (
    <div className='card-layout'>
        <h5 className='card-title'>{title.length>27?`${title.slice(0,27)}...`:title}</h5>
        <p className='card-description display-4'>{description.length>148?`${description.slice(0,148)}...`:description}</p>
        <div className='card-bottom'>
            {isExpanded && <div className='drop-down'>
                {dropDownItem1 && <div onClick={handleExpand2} className='drop-down-item'>To do&nbsp;&nbsp;<i class="bi bi-hourglass-split"></i></div>}
                {dropDownItem2 && <div onClick={handleExpand2}  className='drop-down-item'>In progress&nbsp;&nbsp;<i class="bi bi-check-circle"></i></div>}
                {dropDownItem3 && <div onClick={handleExpand2}  className='drop-down-item'>Done&nbsp;&nbsp;<i class="bi bi-check-circle-fill"></i></div>}
                <div onClick={handleExpand2}  className='drop-down-item delete'>Delete&nbsp;&nbsp;<i class="bi bi-trash deleteIcon"></i></div>
            </div>}
            <div className='card-toggle' onClick={handleExpand1}><i class="bi bi-three-dots-vertical"></i></div>
            <div className={`card-priority ${priority}`}><i class="bi bi-bullseye"></i>&nbsp;{priority}</div>
            <div className='card-date'>
                <b>17</b><span className='month'>DEC</span>
            </div>
        </div>

    </div>
  )
}
