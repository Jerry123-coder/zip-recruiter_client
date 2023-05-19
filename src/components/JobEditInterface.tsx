import e from 'express';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Logo from '../assets/logo.png'
import { IJob } from '../interfaces';
import { gettoken } from '../services/apiRequests';
import formHandler from '../services/formHandler.services';

const JobEditInterface = ({job_id, job_title, organization, job_location, job_type, job_description, pay, recruiterRecruiterId}: IJob) => {
    const [closed, setClosed] = useState(false);

    const toggleClosed = () => {
        setClosed(true)
    }

  const [error, setError] = useState<string>("");

  const [jobTitle, setJobTitle] = useState(job_title)
  const [jobOrganization, setJobOrganization] = useState(organization)
  const [jobLocation, setLocation] = useState(job_location)
  const [jobType, setJobType] = useState(job_type)
  const [jobPay, setJobPay] = useState(pay)
  const [jobDesription, setJobDescription] = useState(job_description)
  
  

  const submitform = async (e: React.FormEvent<HTMLFormElement> | any) => {
    //prevent from page refresh
    e.preventDefault();
    setError("")

    const userDetails = gettoken('user')
    const tokens = gettoken('tokens')
    console.log(userDetails)

   

    const formelements = e.target.elements;
    const formvalues = {
      job_id: job_id,
      job_title: jobTitle,
      organization: formHandler(formelements, "organization"),
      job_location: formHandler(formelements, "job_location"),
      job_type: formHandler(formelements, "job_type"),
      job_description: formHandler(formelements, "job_description"),
      pay: formHandler(formelements, "pay"),
      recruiterRecruiterId: userDetails.recruiter_id ,
    };



    fetch ("http://localhost:9000/recruiters/update_job",{
      method: "PUT",
      headers: {
        "Content-type": "application/json",
        Authorization: `Basic ${tokens?.accessToken}`,
      },
      body: JSON.stringify(formvalues)
      })
      .then(res => res.json())
      .then(data =>{
        console.log(data)})
      .catch(e)

    setClosed(true)
      const error = e;


    console.log({ formvalues })
  }
   

  return (
    <>
    {
        closed ? '' :(
                
            <div className='applyOverlay'>
        <div className="jobPost">
        <img src={Logo} alt="logo" className="jobPostForm-logo" />
            <div className="postFormCloseButton" onClick={toggleClosed}>X</div>

            <form onSubmit={(e) => submitform(e)} className='jobPostForm'>

          <div className="jobPostInput-box">
              <span className="icon">
                {/* <FaUserAlt /> */}
              </span>
              <input type="text" name="job_title" value={jobTitle} 
              onChange={(e)=> setJobTitle(e.target.value)}
              required /> 
              <label> Job title </label>
            </div>

            <div className="jobPostInput-box">
              <span className="icon">
                {/* <MdEmail /> */}
              </span>
              <input type="text" name="organization" value={jobOrganization}
              onChange={(e)=>setJobOrganization(e.target.value)}
              required />
              
              <label> organization </label>
            </div>

            <div className="jobPostInput-box">
              {/* <span className="icon">
                <MdEmail />
              </span> */}
              <input type="text" name="job_location" value={jobLocation} 
              onChange={(e)=>setLocation(e.target.value)}required />
              <label> job location </label>
            </div>

            <div className="jobPostInput-box">
              {/* <span className="icon"> 
                <FaBuilding />
                </span> */}
              <input type="text" name="job_type" value={jobType} 
              onChange={(e)=>setJobType(e.target.value)}
              required />
              <label> employment type </label>
            </div> 

            <div className="jobPostInput-box">
              {/* <span className="icon">
                <HiLockClosed />
              </span> */}
              <input type="text" name="pay" value={jobPay} 
              onChange={(e)=>setJobPay(e.target.value)}
              required />
              <label> pay</label>
            </div>

            <div className="jobDescription">
              <span className="icon">
                {/* <HiLockClosed /> */}
              </span>
              <input type="text" name="job_description" value={jobDesription} 
              onChange={(e)=>setJobDescription(e.target.value)}
              required />
              <label> description</label>
            </div>

            <span style={{color: "#080a7a"}}>{error}</span>

            <button type="submit" className="jobPostFormButton">
              update job
            </button>
          </form>

        </div>
        </div>
        ) 
    }
    
    </>
  )
}

export default JobEditInterface




