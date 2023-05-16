import React, {useState} from 'react'
import ButtonIcon from '../assets/recruiter_button_icon.png'
import { FaBuilding } from 'react-icons/fa';
import { IAppliedJob, IJob } from '../interfaces';

const AppliedJob = ({job_id, job_title, organization, job_location, job_type, job_description, pay, recruiterId, status}: IAppliedJob) => {
    const [apply, setApply] = useState(false);
    const [job, setJob ] = useState<IAppliedJob[]>([])
  
  
    const toggleApply = () => {
        setApply(!apply)
    }
  
    return (
    <div>
        {   
            (status === 'accepted' ) ? (
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

                <div className="acceptedButton">
                <img src={ButtonIcon} alt="logo" className="ButtonIcon" />
                    <div className="searchButtonText">{status}</div>
                </div>
                </div>
            ) : ( 

                (
                    (status==="rejected") ? (
                        <div className="rejectedJobContainer">
                <div className="rejectedRecruiterLogo">
                <FaBuilding />
                </div>
                <div className="jobData">
                <div className="jobTitle">{job_title}</div>
                <div className="organization">{organization}</div>
                <div className="workConditions">
                    <div className="rejectedLocationType">{job_location}</div>
                    <div className="rejectedWorkType">{job_type}</div>
                </div>
                </div>
                <div className="jobDescription">
                <div className="salary">{pay}</div>
                <div className="description">
                    {job_description}
                </div>
                </div>

                <div className="rejectedButton">
                <img src={ButtonIcon} alt="logo" className="ButtonIcon" />
                    <div className="searchButtonText">{status}</div>
                </div>
                </div>
                    ) : (
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
        
                        <div className="pendingButton">
                        <img src={ButtonIcon} alt="logo" className="ButtonIcon" />
                            <div className="searchButtonText">{status}</div>
                        </div>
                        </div>
                    )
                )
                
            )
            
        }
        
      </div>
    );
  };
  

export default AppliedJob
