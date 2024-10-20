import React, { useEffect, useRef } from 'react';
import './Styles/CardPreview.css'
import Delete from './Delete';
import UpdateWindow from './UpdateWindow';
import Delete2 from './Delete2';
import axios from 'axios';

export default function CardPreview({taskId,taskTitle,taskDesc,taskDate,taskPriority,taskColor,status,getTasks}) {
    const[dropDownItem1,setDropDownItem1]=React.useState(true);
    const[dropDownItem2,setDropDownItem2]=React.useState(true);
    const[dropDownItem3,setDropDownItem3]=React.useState(true);
    const [deleteModal, setDeleteModal] = React.useState(false);
    const [deleteModal2, setDeleteModal2] = React.useState(false);
    const [showDropDown, setShowDropDown] = React.useState(false);
    const [remove, setRemove] = React.useState('');
    const[updateModel,setUpdateModel]=React.useState(false);

    function handleDelete(){
        setDeleteModal(!deleteModal);
    }

    function handleDelete2(){
        setDeleteModal2(!deleteModal2);
    }

    function handleUpdateModel(){
        setUpdateModel(!updateModel);
    }

    function showDropDownModel(){
        setShowDropDown(true);
    }

    function hideDropDownModel(){
        setShowDropDown(false);
    }

    function moveToDone(){
        updateTaskStatus("Done");
    }
    function moveToInProgress(){
        updateTaskStatus("In progress");
    }
    function moveToToDo(){
        updateTaskStatus("To do");
    }

    const mapPriority=(priority) => {
        switch (priority) {
            case "HIGH":
                return "1";
            case "MID":
                return "2";
            case "LOW":
                return "3";
        }
    };

    function updateTaskStatus(updateStatus){
        const accessToken = localStorage.getItem('access_token');

        axios.put('http://127.0.0.1:5000/dashboard', {
            taskId: taskId,
            taskTitle: taskTitle,
            taskDesc: taskDesc,
            taskColor: taskColor,
            taskPriority: mapPriority(taskPriority),
            taskDate: taskDate,
            status: updateStatus
          }, {
            headers: {
                Authorization: `Bearer ${accessToken}` 
            }
        }).then(response => {
            getTasks();
            console.log('Task updated:', response.data);
        })
        .catch(error => {
            console.error('Error adding task:', error);
        });
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
        {updateModel && <UpdateWindow handleUpdateModel={handleUpdateModel} handleDelete={handleDelete} taskPriority={taskPriority} taskTitle={taskTitle} taskColor={taskColor} taskDate={taskDate} taskDesc={taskDesc}/>}
        {deleteModal && <Delete getTasks={getTasks} taskId={taskId} taskTitle={taskTitle.length>27?`${taskTitle.slice(0,27)}...`:taskTitle} handleUpdateModel={handleUpdateModel} handleDelete={handleDelete}/>} 
        {deleteModal2 && <Delete2 getTasks={getTasks} taskId={taskId} taskTitle={taskTitle.length>27?`${taskTitle.slice(0,27)}...`:taskTitle} handleDelete2={handleDelete2}/>}
        <div className='toggle-dropDown'>
            <div className='card-toggle' onClick={showDropDownModel}><i class="bi bi-three-dots-vertical"></i></div>
            {showDropDown && <div className='drop-down'>
                {dropDownItem1 && <div  onClick={() => {hideDropDownModel();moveToToDo()}}  className='drop-down-item'>To do&nbsp;&nbsp;<i class="bi bi-hourglass-split"></i></div>}
                {dropDownItem2 && <div  onClick={() => {hideDropDownModel();moveToInProgress()}}   className='drop-down-item'>In progress&nbsp;&nbsp;<i class="bi bi-check-circle"></i></div>}
                {dropDownItem3 && <div  onClick={() => {hideDropDownModel();moveToDone()}}   className='drop-down-item'>Done&nbsp;&nbsp;<i class="bi bi-check-circle-fill"></i></div>}
                <div onClick={() => {hideDropDownModel();handleDelete2()}}  className='drop-down-item delete'>Delete&nbsp;&nbsp;<i class="bi bi-trash deleteIcon"></i></div>
            </div>}  
        </div>
        <div style={{ backgroundColor:status==="Done"?'#878787':taskColor }} className={` card-layout ${remove}`} onClick={() => {hideDropDownModel();handleUpdateModel()}}>

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
