import React, { useState } from 'react'
import ButtonIcon from '../assets/recruiter_button_icon.png'
import ApplicationInterface from './ApplicationInterface';

const Button = () => {

  const [apply, setApply] = useState(false);

  const toggleApply = () => {
      setApply(!apply)
  }

  return (
    <div className="applyButton" onClick={toggleApply}>
      <img src={ButtonIcon} alt="logo" className="ButtonIcon" />
        <div className="searchButtonText">pending</div>
      <div>
      {
        apply ? (<ApplicationInterface />) : ''
      }
      </div>
    </div>
  )
}

export default Button
