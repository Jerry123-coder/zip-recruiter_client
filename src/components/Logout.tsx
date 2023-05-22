import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { cleartoken } from '../services/apiRequests';

const Logout = () => {
    const navigate =useNavigate();

    const handleLogout = () => {
        cleartoken();
        navigate("/");
      };

  
  return (
    <div className='logout-btn' onClick={handleLogout}>
      Logout
    </div>
  )
}

export default Logout
