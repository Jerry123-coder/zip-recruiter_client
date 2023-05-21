import React from 'react'
import Navbar from '../../components/Navbar'
import ButtonLogo from '../../assets/recruiter_button_icon.png'

import { FaSearch } from 'react-icons/fa'
import { MdOutlineLocationOn } from 'react-icons/md'

const ApplicantProfile = () => {
  return (
    <div className='pageContainer'>
    <Navbar />
    <div className='searchSection'>
      <h1>My Profile</h1>
     
      <div className="jobType">
        <ul>
            <li>Partime</li>
            <li>Full time</li>
            <li>Freelance</li>
          </ul>
      </div>
      
    </div>
    <div className="jobs">
    </div>
    </div>
  )
}


export default ApplicantProfile
