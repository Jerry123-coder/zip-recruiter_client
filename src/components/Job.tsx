import React, { useState } from "react";
import { FaBuilding } from "react-icons/fa";

import ButtonIcon from '../assets/recruiter_button_icon.png'
import { IJob } from "../interfaces";
import Button from "./Button";

const Job = ({job_id, job_title, organization, job_location, job_type, job_description, pay, recruiterId}: IJob) => {

  const [apply, setApply] = useState(false);
  const [job, setJob ] = useState<IJob[]>([])


  const toggleApply = () => {
      setApply(!apply)
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
      <Button />
      {/* <div className="applyButton">
      <img src={ButtonIcon} alt="logo" className="ButtonIcon" />
          <div className="searchButtonText">Apply</div>
      </div> */}
    </div>
  );
};

export default Job;
