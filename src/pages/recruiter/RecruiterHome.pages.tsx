import React, { useEffect, useState } from "react";
import RecruiterNavBar from "../../components/RecruiterNavBar";
import SideNav from "../../components/SideNav";
import { MdWork, MdHistory } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import JobPostInterface from "../../components/JobPostInterface";
import { IJob } from "../../interfaces";
import { getId } from "../../services/apiRequests";
import RecruiterJob from "../../components/RecruiterJob";

const RecruiterHome = () => {
  const [jobData, setJobData] = useState<IJob[]>([]);

  useEffect(() => {
    const userData = getId("user");
    const id = userData.recruiter_id;
    try {
      fetch(`http://localhost:9000/recruiters/recruiter's_jobs/${id}`, {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log({jobdata: data})
          setJobData(data.job_posts);
        });
      // console.log({jobData})
      // .catch(e)
    } catch (e) {
      console.log(e);
    }
  }, []);
  const [postJob, setPostJob] = useState(false);

  const deletejob = (id: number) => {
    setJobData((e) => e.filter((job) => job.job_id !== id));
  };

  const addjob = (job: IJob) => {
    setJobData((e) => [...e, job]);
  };

  return (
    <>
      <div className="sidebarSection">
        <SideNav />
      </div>
      <div className="mainSection">
        <RecruiterNavBar />
        <div className="pageCardsCaption">Quick access</div>
        <div className="pageCards">
          <div
            className="postNewJob"
            onClick={() => {
              setPostJob(!postJob);
            }}
          >
            <div className="cardIcon">
              <MdWork />
            </div>
            <div className="postNewJob-text">New Job Post</div>
          </div>

          <div className="postsCount">
            <div className="cardIcon">
              <MdHistory />
            </div>
            <div className="postNewJob-text"> 13 jobs posted</div>
          </div>

          <div className="applicantsCount">
            <div className="cardIcon">
              <FaUsers />
            </div>
            <div className="postNewJob-text">45 applications received</div>
          </div>
        </div>
        <div className="jobsSection">
          {jobData.map((data, index) => (
            <RecruiterJob key={index} props={data} deletejob={deletejob} />
          ))}
        </div>

        {postJob ? <JobPostInterface addjob={addjob} /> : ""}
      </div>
    </>
  );
};

export default RecruiterHome;
