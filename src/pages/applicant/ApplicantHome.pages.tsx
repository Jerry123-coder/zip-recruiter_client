import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import ButtonLogo from "../../assets/recruiter_button_icon.png";

import { FaSearch } from "react-icons/fa";
import { MdOutlineLocationOn } from "react-icons/md";
import Job from "../../components/Job";
import { IJob } from "../../interfaces";
import { getId, gettoken } from "../../services/apiRequests";
import Fileupload from "../../components/Fileupload";
import formHandler from "../../services/formHandler.services";

const ApplicantHome = () => {
  const [jobQuery, setJobQuery] = useState("");
  const [jobData, setJobData] = useState<IJob[]>([]);

  const search = ({ jobs }: any) => {
    return jobs.filter((job: any) =>
      job.job_title.toLowerCase().includes(jobQuery)
    );
  };

  const submitform = async (e: React.FormEvent<HTMLFormElement> | any) => {
    //prevent form page refresh
    e.preventDefault();
    // setError("");

    const userDetails = gettoken("user");
    const tokens = gettoken("tokens");
    console.log(userDetails);

    const formelements = e.target.elements;
    const formvalues = {
      job_title: formHandler(formelements, "jobSearch"),
      location: formHandler(formelements, "jobLocationSearch"),
    };

    const job = formvalues.job_title;
    const location = formvalues.location;

    fetch(
      `http://localhost:9000/applicants/search_jobs?job=${job}&location=${location}`,
      {
        method: "GET",
        headers: {
          "Content-type": "application/json",
          Authorization: `Basic ${tokens?.accessToken}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.success) setJobData(data?.jobs);
      });


    console.log({ jobQuery });
  };

  useEffect(() => {
    const userData = getId("user");
    const id = userData.recruiter_id;
    try {
      fetch(`http://localhost:9000/applicants/jobs`, {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setJobData(data.jobs);
        });
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <div className="pageContainer">
      <Navbar />
      <div className="searchSection">
        <h1>Search for a job</h1>
         <div><Fileupload /> 
         </div>

        <form onSubmit={(e) => submitform(e)}>
          <div className="searchInputs">
            <div className="jobSearch">
              <span className="icon">
                <FaSearch />
              </span>
              <input
                type="text"
                name="jobSearch"
                value={jobQuery}
                onChange={(e) => setJobQuery(e.target.value)}
              />
              <label> search </label>
            </div>
            <div className="jobLocationSearch">
              <span className="icon">
                <MdOutlineLocationOn />
              </span>
              <input type="text" name="jobLocationSearch" />
              <label> location </label>
            </div>
            <button type="submit" className="searchButton">
              <img src={ButtonLogo} alt="logo" className="ButtonIcon" />
              <div className="searchButtonText">Search</div>
            </button>
          </div>
        </form>
        <div className="jobType">
          <ul>
            <li>Partime</li>
            <li>Full time</li>
            <li>Freelance</li>
          </ul>
        </div>
      </div>
      <div className="jobs">
        {jobData?.map(
          ({
            job_id,
            job_title,
            organization,
            job_location,
            job_type,
            job_description,
            pay,
            recruiterRecruiterId,
          }) => (
            <Job
              job_id={job_id}
              job_title={job_title}
              organization={organization}
              job_location={job_location}
              job_type={job_type}
              job_description={job_description}
              pay={pay}
              recruiterRecruiterId={recruiterRecruiterId}
            />
          )
        )}
      </div>
    </div>
  );
};

export default ApplicantHome;
