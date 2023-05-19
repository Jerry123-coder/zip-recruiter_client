import React, {useState, useEffect} from 'react'
import Navbar from '../../components/Navbar'
import ButtonLogo from '../../assets/recruiter_button_icon.png'

import { FaSearch } from 'react-icons/fa'
import AppliedJob from '../../components/AppliedJob'
import { IApplicantJob, IAppliedJob, IJob } from '../../interfaces'
import { getId } from '../../services/apiRequests'

const Applications = () => {

  const [jobData, setJobData] = useState<IApplicantJob[]>([]);

  useEffect(() => {
    const userData = getId('user')
    const tokens = getId('tokens')
    const id = userData.applicant_id
    try {
      fetch (`http://localhost:9000/applicants/applications/${id}`,{
        method: "GET",
        headers: {
          "Content-type": "application/json",
          Authorization: `Basic ${tokens?.accessToken}`,
          
        },
        })
          .then(res => res.json())
          .then(data =>{
            
            setJobData(data.job_applications)
          })
          
        // .catch(e)
    } catch(e) {
      console.log(e)
    }
   
      
  }, []);
  console.log({jobData})
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
          jobData.map(({ applicantApplicantId, job_title, applicant_name, applicant_email,  cover_letter, cv, recruiterRecruiterId , jobJobId, job_data, status}) => (
            < AppliedJob

            applicantApplicantId= {applicantApplicantId}
            job_title= {job_title}
            applicant_name= {applicant_name}
            applicant_email= {applicant_email}
            cover_letter= {cover_letter}
            cv= {cv}
            job_data= {job_data}
            status = {status}
            jobJobId = {jobJobId}
            recruiterRecruiterId={recruiterRecruiterId}
            />
          ))
        }
    </div>

    </div>

    </>
  )
}


export default Applications