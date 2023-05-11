import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Logo from '../assets/logo.png'
import { gettoken } from '../services/apiRequests';
import formHandler from '../services/formHandler.services';

const JobPostInterface = () => {

    const [closed, setClosed] = useState(false);

    const toggleClosed = () => {
        setClosed(true)
    }

    const navigate = useNavigate();
  const [error, setError] = useState<string>("");
  const [dashboardData, setDashboardData] = useState("")

  const submitform = async (e: React.FormEvent<HTMLFormElement> | any) => {
    //prevent form page refresh
    e.preventDefault();
    setError("")

    const userDetails = gettoken('user')
    console.log(userDetails)

    const formelements = e.target.elements;
    const formvalues = {
      job_title: formHandler(formelements, "job_title"),
      job_location: formHandler(formelements, "job_location"),
      job_description: formHandler(formelements, "job_description"),
      pay: formHandler(formelements, "pay"),
      recruiterRecruiterId: userDetails.recruiter_id ,
    };



    fetch ("http://localhost:9000/recruiters/post_job",{
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(formvalues)
      })
      .then(res => res.json())
      .then(data =>{
        console.log(data)})
      .catch(e)

    //   navigate('/recruiter/home')
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
              <input type="text" name="job_title" required />
              <label> Job title </label>
            </div>

            <div className="jobPostInput-box">
              <span className="icon">
                {/* <MdEmail /> */}
              </span>
              <input type="text" name="job_location" required />
              <label> job location </label>
            </div>

            {/* <div className="jobPostInput-box">
              <span className="icon"> */}
                {/* <FaBuilding /> */}
              {/* </span>
              <input type="text" name="job_Type" required />
              <label> employment type </label>
            </div> */}

            <div className="jobPostInput-box">
              <span className="icon">
                {/* <HiLockClosed /> */}
              </span>
              <input type="text" name="pay" required />
              <label> pay</label>
            </div>

            <div className="jobDescription">
              <span className="icon">
                {/* <HiLockClosed /> */}
              </span>
              <input type="text" name="job_description" required />
              <label> description</label>
            </div>

            <span style={{color: "#080a7a"}}>{error}</span>

            <button type="submit" className="jobPostFormButton">
              post job
            </button>
          </form>

        </div>
        </div>
        ) 
    }
    
    </>
  )
}

export default JobPostInterface