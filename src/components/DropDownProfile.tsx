import React from 'react'
import { useNavigate } from 'react-router-dom'
import { cleartoken } from '../services/apiRequests';


const DropDownProfile = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        cleartoken();
        navigate("/");
      };
    
  return (
    <div className='dropDownMenu'>
      <ul>
        <li className='dropDownElement' onClick={() => navigate('/applicant/profile')}>Profile</li>
        <li className='dropDownElement' onClick={handleLogout}>Logout</li>
      </ul>
    </div>
  )
}

export default DropDownProfile
