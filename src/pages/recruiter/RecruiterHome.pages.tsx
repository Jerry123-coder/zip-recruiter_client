import React, { useEffect, useState } from 'react'
import ItemCard from '../../components/ItemCard'
import Navbar from '../../components/Navbar'
import RecruiterNavBar from '../../components/RecruiterNavBar'
import SideNav from '../../components/SideNav'
import { MdWork, MdHistory } from 'react-icons/md'
import { FaUsers } from 'react-icons/fa'
import Job from '../../components/Job'
import JobPostInterface from '../../components/JobPostInterface'
import { IJob } from '../../interfaces'
import { getId } from '../../services/apiRequests'
import RecruiterJob from '../../components/RecruiterJob'

const RecruiterHome = () => {

  const [jobData, setJobData] = useState<IJob[]>([]);

  

  useEffect(() => {
    const userData = getId('user')
    const id = userData.recruiter_id
    try {
      fetch (`http://localhost:9000/recruiters/recruiter's_jobs/${id}`,{
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
        })
          .then(res => res.json())
          .then(data =>{
            // console.log({jobdata: data})
            setJobData(data.job_posts)
          })
          // console.log({jobData})
        // .catch(e)
    } catch(e) {
      console.log(e)
    }
   
      
  }, []);
  const [postJob, setPostJob] = useState(false);


  


  return (
    <>
    <div className='sidebarSection'>
        <SideNav />
      </div>
      <div className="mainSection">
        <RecruiterNavBar />
        <div className="pageCardsCaption">
          Quick access
        </div>
        <div className ='pageCards'>
          <div className="postNewJob" onClick={() => {setPostJob(!postJob)}}>
            <div className="cardIcon">
            <MdWork />
            </div>
            <div className="postNewJob-text" >New Job Post</div>
            
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
          
          {/* <ItemCard itemIsUser={true}/> */}
        </div>
      <div className='jobsSection'>
        {
          jobData.map(({job_id, job_title, organization, job_location, job_type, job_description, pay, recruiterId}) => (
            < RecruiterJob
            job_id={job_id}
            job_title={job_title}
            organization={organization}
            job_location={job_location}
            job_type={job_type}
            job_description={job_description}
            pay={pay}
            recruiterId={recruiterId}
            />
          ))
        }
        
      </div>

        {
          postJob ? <JobPostInterface /> : ''
        }
        
      </div>
      
    
    </>
  )
}

export default RecruiterHome