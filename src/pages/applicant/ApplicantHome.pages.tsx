import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import Logout from '../../components/Logout'
import Navbar from '../../components/Navbar'
import ButtonLogo from '../../assets/recruiter_button_icon.png'

import { FaSearch } from 'react-icons/fa'
import { MdOutlineLocationOn } from 'react-icons/md'
import Job from '../../components/Job'
import ApplicationInterface from '../../components/ApplicationInterface'
import jobs from '../../jobs.json'
import ItemCard from '../../components/ItemCard'
import { IJob } from '../../interfaces'
import { getId } from '../../services/apiRequests'

const ApplicantHome = () => {

  const [jobQuery, setJobQuery] = useState('')
  const [jobData, setJobData] = useState<IJob[]>([])

  const search = ({jobs}:any) => {
    return jobs.filter((job:any) => job.job_title.toLowerCase().includes(jobQuery));
  }

  useEffect(() => {
    const userData = getId('user')
    const id = userData.recruiter_id
    try {
      fetch (`http://localhost:9000/applicants/jobs`,{
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
        })
          .then(res => res.json())
          .then(data =>{
            
            setJobData(data.jobs)
          })
          // console.log({jobData})
        // .catch(e)
    } catch(e) {
      console.log(e)
    }
   
      
  }, []);

  return (
    <div className='pageContainer'>
    <Navbar />
    <div className='searchSection'>
      <h1>Search for a job</h1>
      <div className="searchInputs">
          <div className="jobSearch">
              <span className="icon">
                <FaSearch />
              </span>
              <input type="text" name="jobSearch" value={jobQuery} onChange={(e)=> setJobQuery(e.target.value)} required />
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
     {
          jobData?.map(({job_id, job_title, organization, job_location, job_type, job_description, pay, recruiterRecruiterId}) => (
            // jobs.map(() => (
            < Job
            job_id={job_id}
            job_title={job_title}
            organization={organization}
            job_location={job_location}
            job_type={job_type}
            job_description={job_description}
            pay={pay}
            recruiterRecruiterId={recruiterRecruiterId}
            />
          ))
        }
    </div>
    </div>
  )
}

export default ApplicantHome