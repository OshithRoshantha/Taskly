import React, { useEffect, useRef } from 'react';
import './Styles/CardPreview.css'
import Delete from './Delete';

export default function CardPreview({title, description, priority, date, status}) {
    const [isExpanded, setIsExpanded] = React.useState(false);
    const[dropDownItem1,setDropDownItem1]=React.useState(true);
    const[dropDownItem2,setDropDownItem2]=React.useState(true);
    const[dropDownItem3,setDropDownItem3]=React.useState(true);
    const [deleteModal, setDeleteModal] = React.useState(false);
    const [remove, setRemove] = React.useState('');

    function handleExpand(){
        setIsExpanded(!isExpanded);
    }

    function closeExpand(){
        if(isExpanded)
            setIsExpanded(false);
    }

    function handleDelete(){
        setDeleteModal(!deleteModal);
    }

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
    <div className='card-layout' onClick={closeExpand}>
        <div className={`${remove}`}></div>
        {deleteModal && <Delete taskTitle={title.length>27?`${title.slice(0,27)}...`:title} handleDelete={handleDelete}/>}
        <div className='card-header'>
            <h5 className='card-title'>{title.length>27?`${title.slice(0,27)}...`:title}</h5>
            <div className='card-toggle' onClick={handleExpand}><i class="bi bi-three-dots-vertical"></i></div>
            {isExpanded && <div className='drop-down'>
                {dropDownItem1 && <div onClick={handleExpand} className='drop-down-item'>To do&nbsp;&nbsp;<i class="bi bi-hourglass-split"></i></div>}
                {dropDownItem2 && <div onClick={handleExpand}  className='drop-down-item'>In progress&nbsp;&nbsp;<i class="bi bi-check-circle"></i></div>}
                {dropDownItem3 && <div onClick={handleExpand}  className='drop-down-item'>Done&nbsp;&nbsp;<i class="bi bi-check-circle-fill"></i></div>}
                <div onClick={() => {handleExpand();handleDelete()}}  className='drop-down-item delete'>Delete&nbsp;&nbsp;<i class="bi bi-trash deleteIcon"></i></div>
            </div>}
        </div>
        <p className='card-description display-4'>{description.length>148?`${description.slice(0,148)}...`:description}</p>
        <div className='card-bottom'>
            <div className={`card-priority ${priority}`}><i class="bi bi-bullseye"></i>&nbsp;{priority}</div>
            <div className='card-date'>
                <b>17</b><span className='month'>DEC</span>
            </div>
        </div>

    </div>
  )
}
