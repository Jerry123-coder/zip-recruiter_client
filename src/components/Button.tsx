import React from 'react'
import ButtonIcon from '../assets/recruiter_button_icon.png'

const Button = () => {
  return (
    <div className="applyButton">
      <img src={ButtonIcon} alt="logo" className="ButtonIcon" />
          <div className="searchButtonText">pending</div>
      </div>
  )
}

export default Button
