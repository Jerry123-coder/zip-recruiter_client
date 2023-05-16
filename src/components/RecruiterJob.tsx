import DeleteJob from "./RecruiterButtons/DeleteJob";
import EditJob from "./RecruiterButtons/EditJob";
import React, { useState } from "react";
import { FaBuilding } from "react-icons/fa";
import ButtonIcon from "../assets/recruiter_button_icon.png";
import { IJob } from "../interfaces";
import JobEditInterface from "./JobEditInterface";

const Job = ({
  props,
  deletejob,
}: {
  props: IJob;
  deletejob: (id: number) => void;
}) => {
  const {
    job_id,
    job_title,
    organization,
    job_location,
    job_type,
    job_description,
    pay,
    recruiterRecruiterId,
  } = props;

  const [apply, setApply] = useState(false);
  const [editJob, setEditJob] = useState(false);

  const [job, setJob] = useState<IJob[]>([]);

  const toggleApply = () => {
    setApply(!apply);
  };

  const jobData = {
    job_id: { job_id },
    job_title: { job_title },
    organization: { organization },
    job_location: { job_location },
    job_type: { job_type },
    job_description: { job_description },
    pay: { pay },
    recruiterRecruiterId: recruiterRecruiterId,
  };

  const deleteJob = async () => {
    try {
      fetch(`http://localhost:9000/recruiters/delete_job/${job_id}`, {
        // fetch ("http://localhost:9000/recruiters/delete_job",{
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.success) deletejob(job_id);
        });
      // .catch(e)
    } catch (e) {
      console.log(e);
    }
  };

  // const deleteJob = async (id: string) => {
  //     const data = await fetch('http://localhost:9000/recruiters/post_job/' + id, {
  //       method: 'DELETE',
  //       headers: { 'Content-Type': 'application/json' },
  //       // body: JSON.stringify({ title: 'mple' })
  //     })
  //       .then((res) => res.json())
  //       .then(data => setTodos(todos.filter((todo) => {
  //         return todo._id !== data.id;
  //       })))
  //       .catch((err) => console.log("Error " + err));
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
        <div className="description">{job_description}</div>
      </div>

      <div className="editButton" onClick={() => setEditJob(!editJob)}>
        <img src={ButtonIcon} alt="logo" className="ButtonIcon" />
        <div className="searchButtonText">edit</div>
      </div>

      <div className="deleteButton" onClick={() => deleteJob()}>
        <img src={ButtonIcon} alt="logo" className="ButtonIcon" />
        <div className="searchButtonText">delete</div>
      </div>

      {editJob ? (
        <JobEditInterface
          job_id={job_id}
          job_title={job_title}
          organization={organization}
          job_location={job_location}
          job_type={job_type}
          job_description={job_description}
          pay={pay}
          recruiterRecruiterId={recruiterRecruiterId}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default Job;
