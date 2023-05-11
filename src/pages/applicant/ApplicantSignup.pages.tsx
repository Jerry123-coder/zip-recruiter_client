import React, { createContext, useState } from "react";
import '../../App.css';
import { useNavigate } from "react-router-dom";
import {MdEmail} from "react-icons/md"
import {HiLockClosed} from "react-icons/hi"
import { FaUserAlt } from "react-icons/fa"
import { ImFolderUpload } from "react-icons/im"

import Logo from '../../assets/logo.png';
import WhiteLogo from '../../assets/white_logo.png'
import Applicant from '../../assets/applicant.png'

import formHandler from "../../services/formHandler.services";



const ApplicantSignup = () => {

  const navigate = useNavigate();
  const [error, setError] = useState<string>("");
  const [dashboardData, setDashboardData] = useState("")

  const submitform = async (e: React.FormEvent<HTMLFormElement> | any) => {
    //prevent form page refresh
    e.preventDefault();
    setError("")

    const formelements = e.target.elements;
      
    const formvalues = {
      name: formHandler(formelements, "name"),
      email: formHandler(formelements, "email"),
      password: formHandler(formelements, "password"),
      confirmPassword: formHandler(formelements, "confirmPassword"),
      cv: formHandler(formelements, "cv"),
      cover_letter: formHandler(formelements, "cover_letter"),

    }

    fetch ("http://localhost:9000/applicants/signup",{
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

      navigate('/')
      const error = e;


    console.log({ formvalues })
  }
  


  return (
    <div className="signIn-page">
    <div className="imageSection">
      
    {/* <h1 className='signinMessage'>
      WELCOME!
    </h1>
    <p></p> */}
    <img src={WhiteLogo} alt="logo" className="white-logo" />
    <img src={Applicant} alt="logo" className="recruiter" />
    </div>

    <div className='formSection'>
    <img src={Logo} alt="logo" className="login-logo" />
        <div className="formContainer">
          <form onSubmit={(e) => submitform(e)} className='recruiterForm'>
          <h1 className="applicantFormTitle">SIGN UP AS AN APPLICANT</h1>

          <div className="input-box">
              <span className="icon">
                <FaUserAlt />
              </span>
              <input type="text" name="name" required />
              <label> Name </label>
            </div>

            <div className="input-box">
              <span className="icon">
                <MdEmail />
              </span>
              <input type="email" name="email" required />
              <label> Email </label>
            </div>

            <div className="input-box">
              <span className="icon">
                <HiLockClosed />
              </span>
              <input type="password" name="password" required />
              <label> Password</label>
            </div>

            <div className="input-box">
              <span className="icon">
                <HiLockClosed />
              </span>
              <input type="password" name="confirmPassword" required />
              <label> Confirm password</label>
            </div>

            <div className="input-box">
              <span className="icon">
                <ImFolderUpload />
              </span>
              <input type="text" name="cv" required />
              <label> Upload resume</label>
            </div>

            <div className="input-box">
              <span className="icon">
                <ImFolderUpload />
              </span>
              <input type="text" name="cover_letter" required />
              <label> Upload cover letter</label>
            </div>

            <span style={{color: "#080a7a"}}>{error}</span>

            <button type="submit" className="FormButton">
              sign up
            </button>
          </form>
        </div>
      </div>
      </div>
    
  )
}

export default ApplicantSignup