import React, { useState } from 'react'
import ButtonIcon from '../../assets/recruiter_button_icon.png'
import ApplicationInterface from '../ApplicationInterface';
import DeletePrompt from '../DeletePrompt';

const DeleteJob = () => {
    const [apply, setApply] = useState(false);

    
          
  return (
   
    <div >
      <div className="deleteButton">
      <img src={ButtonIcon} alt="logo" className="ButtonIcon" />
        <div className="searchButtonText">delete</div>
      {/* <div>
      {
        apply ? (<DeletePrompt />) : ''
      }
      </div> */}
    </div>      
    </div>
  )
}

export default DeleteJob
