import React, { useState } from "react";
import { FaBuilding } from "react-icons/fa";

import ButtonIcon from '../assets/recruiter_button_icon.png'
import { IJob } from "../interfaces";
import { gettoken } from "../services/apiRequests";
import Button from "./Button";

const Job = ({job_id, job_title, organization, job_location, job_type, job_description, pay, recruiterRecruiterId}: IJob) => {

  const [applied, setApplied] = useState(false);
  const [job, setJob ] = useState<IJob[]>([])


  const toggleApplied = () => {
      setApplied(!applied)
  }

  const sendApplication = () => {
     //prevent form page refresh
    //  preventDefault();
    //  setError("")
    const userDetails = gettoken("user");
 
     const applicationData = {
      applicant_name: userDetails.name,
      applicant_email:userDetails.email,
      job_title: job_title,
      cv: "cv",
      cover_letter: "cl",
      status: "pending",
      applicantApplicantId: userDetails.applicant_id,
      jobJobId: job_id,
      recruiterRecruiterId: recruiterRecruiterId,
     };
 
     
     fetch ("http://localhost:9000/applicants/application",{
       method: "POST",
       headers: {
         "Content-type": "application/json",
       },
       body: JSON.stringify(applicationData)
       })
       .then(res => res.json()
       )
       .then(data =>{
         console.log(data)})
        //  if(res.success) setApplied(true)

        toggleApplied()
        }
         

  return (
    <div className="jobContainer">
      <div className="recruiterLogo">
        <FaBuilding />
      </div>
      <div className="jobData">
        <div className="jobTitle">{job_title}</div>
        <div className="organization">{organization}</div>
        <div className="workConditions">
          <div className="locationType">{job_location}</div>
          <div className="workType">{job_type}</div>
        </div>
      </div>
      <div className="jobDescription">
        <div className="salary">{pay}</div>
        <div className="description">
          {job_description}
        </div>
      </div>
      {
        (applied) ? (
          <div className="appliedButton">
          <img src={ButtonIcon} alt="logo" className="ButtonIcon" />
              <div className="searchButtonText" onClick={sendApplication} >Applied</div>
          </div>
        ) : (
          <div className="applyButton">
          <img src={ButtonIcon} alt="logo" className="ButtonIcon" />
              <div className="searchButtonText" onClick={sendApplication} >Apply</div>
          </div>
        )
      }
      
    </div>
  );
};

export default Job;
