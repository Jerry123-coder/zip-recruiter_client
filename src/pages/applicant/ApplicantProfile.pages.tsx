import React from 'react'
import { Navigate } from 'react-router-dom'
import Logout from '../../components/Logout'
import Navbar from '../../components/Navbar'
import ButtonLogo from '../../assets/recruiter_button_icon.png'

import { FaSearch } from 'react-icons/fa'
import { MdOutlineLocationOn } from 'react-icons/md'
import Job from '../../components/Job'

const ApplicantProfile = () => {
  return (
    <div className='pageContainer'>
    <Navbar />
    <div className='searchSection'>
      <h1>Jobs Applied</h1>
      <div className="searchInputs">
          <div className="jobSearch">
              <span className="icon">
                <FaSearch />
              </span>
              <input type="text" name="jobSearch" required />
              <label> search </label>
          </div>
          <div className="jobLocationSearch">
              <span className="icon">
                <MdOutlineLocationOn />
              </span>
              <input type="text" name="jobLocationSearch" required />
              <label> location </label>
          </div>
          <div className="searchButton">
          <img src={ButtonLogo} alt="logo" className="ButtonIcon" />
          <div className="searchButtonText">Search</div>
          </div>
      </div>
      <div className="jobType">
        <ul>
            <li>Partime</li>
            <li>Full time</li>
            <li>Freelance</li>
          </ul>
      </div>
      
    </div>
    <div className="jobs">
    <Job />
    <Job />
    <Job />
    <Job />
    <Job />
    </div>
    </div>
  )
}


export default ApplicantProfile
