import React, {useState} from 'react'
import ButtonIcon from '../assets/recruiter_button_icon.png'
import { FaBuilding } from 'react-icons/fa';
import { IApplicantJob, IAppliedJob, IJob } from '../interfaces';

const AppliedJob = ({ job_data, recruiterRecruiterId, status}: IApplicantJob) => {
    const [apply, setApply] = useState(false);
    const [job, setJob ] = useState<IAppliedJob[]>([])
  
  
    // const toggleApply = () => {
    //     setApply(!apply)
    // }
  
    return (
    <div>
        {   
            (status === 'accepted' ) ? (
                <div className="jobContainer">
                <div className="recruiterLogo">
                <FaBuilding />
                </div>
                <div className="jobData">
                <div className="jobTitle">{job_data.job_title}</div>
                <div className="organization">{job_data.organization}</div>
                <div className="workConditions">
                    <div className="locationType">{job_data.job_location}</div>
                    <div className="workType">{job_data.job_type}</div>
                </div>
                </div>
                <div className="jobDescription">
                <div className="salary">{job_data.pay}</div>
                <div className="description">
                    {job_data.job_description}
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
                <div className="jobTitle">{job_data.job_title}</div>
                <div className="organization">{job_data.organization}</div>
                <div className="workConditions">
                    <div className="rejectedLocationType">{job_data.job_location}</div>
                    <div className="rejectedWorkType">{job_data.job_type}</div>
                </div>
                </div>
                <div className="jobDescription">
                <div className="salary">{job_data.pay}</div>
                <div className="description">
                    {job_data.job_description}
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
                        <div className="jobTitle">{job_data.job_title}</div>
                        <div className="organization">{job_data.organization}</div>
                        <div className="workConditions">
                            <div className="locationType">{job_data.job_location}</div>
                            <div className="workType">{job_data.job_type}</div>
                        </div>
                        </div>
                        <div className="jobDescription">
                        <div className="salary">{job_data.pay}</div>
                        <div className="description">
                            {job_data.job_description}
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
