import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Logout = () => {
  const navigate =useNavigate();
  return (
    <div className='logout-btn' onClick={() => navigate('/')}>
      Logout
    </div>
  )
}

export default Logout
