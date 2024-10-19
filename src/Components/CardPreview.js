import React, { useEffect, useRef } from 'react';
import './Styles/CardPreview.css'
import Delete from './Delete';
import Update from './Update';

export default function CardPreview({taskTitle,taskDesc,taskDate,taskPriority,taskColor,status}) {
    const[dropDownItem1,setDropDownItem1]=React.useState(true);
    const[dropDownItem2,setDropDownItem2]=React.useState(true);
    const[dropDownItem3,setDropDownItem3]=React.useState(true);
    const [deleteModal, setDeleteModal] = React.useState(false);
    const [showUpdate, setShowUpdate] = React.useState(false);
    const [showDropDown, setShowDropDown] = React.useState(false);
    const [remove, setRemove] = React.useState('');

    function handleDelete(){
        setDeleteModal(!deleteModal);
    }

    function showUpdateModal(){
        setShowUpdate(true);
    }

    function hideUpdateModal(){
        setShowUpdate(false)
        console.log('hide update modal');
    }

    function showDropDownModel(){
        setShowDropDown(true);
    }

    function hideDropDownModel(){
        setShowDropDown(false);
    }

    const formatDate = (dateObject) => {
        const day = dateObject.getDate(); 
        const monthIndex = dateObject.getMonth();
        const monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
        const month = monthNames[monthIndex]; 
        return { day, month };
    };
    
    const { day, month } = formatDate(taskDate); 

    useEffect(() => {
        if (status === "To do") {
            setDropDownItem1(false);
            setDropDownItem2(true);
            setDropDownItem3(true);
            setRemove('');
        } else if (status === "In progress") {
            setDropDownItem2(false);
            setDropDownItem1(true);
            setDropDownItem3(true);
            setRemove('');
        } else if (status === "Done") {
            setDropDownItem3(false);
            setDropDownItem1(true);
            setDropDownItem2(true);
            setRemove('remove');
        }
    }, [status]);

  return (
    <div>
        {deleteModal && <Delete taskTitle={taskTitle.length>27?`${taskTitle.slice(0,27)}...`:taskTitle} hideUpdateModal={hideUpdateModal} handleDelete={handleDelete}/>} 
        <div className='toggle-dropDown'>
            <div className='card-toggle' onClick={showDropDownModel}><i class="bi bi-three-dots-vertical"></i></div>
            {showDropDown && <div className='drop-down'>
                {dropDownItem1 && <div onClick={hideDropDownModel} className='drop-down-item'>To do&nbsp;&nbsp;<i class="bi bi-hourglass-split"></i></div>}
                {dropDownItem2 && <div onClick={hideDropDownModel}  className='drop-down-item'>In progress&nbsp;&nbsp;<i class="bi bi-check-circle"></i></div>}
                {dropDownItem3 && <div onClick={hideDropDownModel}  className='drop-down-item'>Done&nbsp;&nbsp;<i class="bi bi-check-circle-fill"></i></div>}
                <div onClick={() => {hideDropDownModel();handleDelete()}}  className='drop-down-item delete'>Delete&nbsp;&nbsp;<i class="bi bi-trash deleteIcon"></i></div>
            </div>}  
        </div>
        <div style={{ backgroundColor:status==="Done"?'#878787':taskColor }} className={` card-layout ${remove}`} onClick={() => {hideDropDownModel();showUpdateModal()}}>
            {showUpdate && <Update hideUpdateModal={hideUpdateModal} handleDelete={handleDelete} taskPriority={taskPriority} taskTitle={taskTitle} taskColor={taskColor} taskDate={taskDate} taskDesc={taskDesc}/>}
            <div className='card-header'>
                <h5 className='card-title'>{taskTitle.length>27?`${taskTitle.slice(0,27)}...`:taskTitle}</h5>
                <div className='card-toggle hide-toggle'><i class="bi bi-three-dots-vertical"></i></div>
            </div>
            <p className='card-description display-4'>{taskDesc.length>148?`${taskDesc.slice(0,148)}...`:taskDesc}</p>
            <div className='card-bottom'>
                <div className={`card-priority ${taskPriority}`}><i class="bi bi-bullseye"></i>&nbsp;{taskPriority}</div>
                <div className='card-date'>
                    <b>{day}</b><span className='month'>{month}</span>
                </div>
            </div>
        </div>        
    </div>
  )
}
