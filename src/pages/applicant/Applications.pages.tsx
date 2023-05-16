import React, {useState} from 'react'
import { Navigate } from 'react-router-dom'
import Logout from '../../components/Logout'
import Navbar from '../../components/Navbar'
import ButtonLogo from '../../assets/recruiter_button_icon.png'

import { FaSearch } from 'react-icons/fa'
import { MdOutlineLocationOn } from 'react-icons/md'
import Job from '../../components/Job'
import jobs from '../../jobs.json'
import AppliedJob from '../../components/AppliedJob'
import { IJob } from '../../interfaces'

const Applications = () => {

  const [jobData, setJobData] = useState<IJob[]>([]);

  return (
    <>
    <div className='pageContainer'>
    <Navbar />
    <div className='searchSection'>
      <h1>My Applications</h1>
      <div className="searchInputs">
          <div className="jobSearch">
              <span className="icon">
                <FaSearch />
              </span>
              <input type="text" name="jobSearch" required />
              <label> search </label>
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
        {
          jobs.map(({job_id, job_title, organization, job_location, job_type, job_description, pay, recruiterRecruiterId, status}) => (
            < AppliedJob
            job_id={job_id}
            job_title={job_title}
            organization={organization}
            job_location={job_location}
            job_type={job_type}
            job_description={job_description}
            pay={pay}
            recruiterId={recruiterRecruiterId}
            status={status}
            />
          ))
        }
    </div>

    </div>

    </>
  )
}


export default Applications