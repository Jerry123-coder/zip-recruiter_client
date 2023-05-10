import React from 'react'
import { useNavigate } from 'react-router-dom'


const DropDownProfile = () => {
    const navigate = useNavigate();
    
  return (
    <div className='dropDownMenu'>
      <ul>
        <li className='dropDownElement' onClick={() => navigate('/applicant/profile')}>Profile</li>
        <li className='dropDownElement' onClick={() => navigate('/')}>Logout</li>
      </ul>
    </div>
  )
}

export default DropDownProfile
