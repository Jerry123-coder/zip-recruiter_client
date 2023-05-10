import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Logo from '../assets/logo.png'
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

    const formelements = e.target.elements;
    const formvalues = {
      email: formHandler(formelements, "email"),
      password: formHandler(formelements, "password"),
    };
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
              <input type="text" name="name" required />
              <label> Job title </label>
            </div>

            <div className="jobPostInput-box">
              <span className="icon">
                {/* <MdEmail /> */}
              </span>
              <input type="email" name="location" required />
              <label> job location </label>
            </div>

            <div className="jobPostInput-box">
              <span className="icon">
                {/* <FaBuilding /> */}
              </span>
              <input type="text" name="employmentType" required />
              <label> employment type </label>
            </div>

            <div className="jobPostInput-box">
              <span className="icon">
                {/* <HiLockClosed /> */}
              </span>
              <input type="password" name="pay" required />
              <label> pay</label>
            </div>

            <div className="jobDescription">
              <span className="icon">
                {/* <HiLockClosed /> */}
              </span>
              <input type="text" name="jobDescription" required />
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
