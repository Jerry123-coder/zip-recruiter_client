import React, { useState } from 'react'
import ButtonIcon from '../../assets/recruiter_button_icon.png'


const EditJob = () => {
    const [apply, setApply] = useState(false);

    const toggleApply = () => {
        setApply(!apply)
    }
  return (
   
    <div>
      <div className="editButton" onClick={toggleApply}>
      <img src={ButtonIcon} alt="logo" className="ButtonIcon" />
        <div className="searchButtonText">edit</div>
      <div>
      </div>
    </div>      
    </div>
  )
}

export default EditJob
