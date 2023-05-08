import React from 'react'
import { Navigate } from 'react-router-dom'
import Logout from '../../components/Logout'
import Navbar from '../../components/Navbar'

const ApplicantHome = () => {
  return (
    <div>
    <Navbar />
    <div>ApplicantHome</div>
    <Logout />
    </div>
  )
}

export default ApplicantHome