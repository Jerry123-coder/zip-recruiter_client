import React, { useState } from 'react'
import ItemCard from '../../components/ItemCard'
import Navbar from '../../components/Navbar'
import RecruiterNavBar from '../../components/RecruiterNavBar'
import SideNav from '../../components/SideNav'
import { MdWork, MdHistory } from 'react-icons/md'
import { FaUsers } from 'react-icons/fa'
import Job from '../../components/Job'
import JobPostInterface from '../../components/JobPostInterface'

const RecruiterHome = () => {

  const [closed, setClosed] = useState(false);

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
          <div className="postNewJob">
            <div className="cardIcon">
            <MdWork />
            </div>
            <div className="postNewJob-text" onClick={() => {setClosed(false)}}>New Job Post</div>
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
        <Job />
        <Job />
        <Job />
        <Job />
        <Job />
        RecruiterHome</div>

        <JobPostInterface />
      </div>
      
    
    </>
  )
}

export default RecruiterHome