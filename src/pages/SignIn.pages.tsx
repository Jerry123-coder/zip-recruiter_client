import React, { createContext, useState } from "react";
import '../App.css';
import { useNavigate } from "react-router-dom";
import Logo from '../assets/logo.png';
import WhiteLogo from '../assets/white_logo.png'
import RecruiterApplicant from '../assets/recruiter_applicant.png'
import {MdEmail, MdWork} from "react-icons/md";
import { FaUserTie } from 'react-icons/fa';
import {HiLockClosed} from "react-icons/hi";
import formHandler from "../services/formHandler.services";
import { postData, settoken } from "../services/apiRequests";


const Signin = () => {
  const navigate = useNavigate();
  const [error, setError] = useState<string>("");
  const [recruiterToggle, setRecruiterToggle] = useState(true);

 

  const submitform = async (e: React.FormEvent<HTMLFormElement> | any) => {
    //prevent form page refresh
    e.preventDefault();
    setError("")

    const formelements = e.target.elements;
    const formvalues = {
      email: formHandler(formelements, "email"),
      password: formHandler(formelements, "password"),
    };

    var signinOption
   { recruiterToggle ? signinOption = "recruiter" :  signinOption = "applicant"}


   if ( signinOption === 'recruiter' ) {
    const request = await postData({ url: "recruiters/signin", body: formvalues });
    if (request.success) {
      const { accessToken, refreshToken, data } = request;
      settoken({ key: "user", data });
      settoken({ key: "tokens", data: { accessToken, refreshToken } });
      return navigate("/recruiter/home");
    }
    setError(request.message);
  } else {
    const request = await postData({ url: "applicants/signin", body: formvalues });
    if (request.success) {
      const { accessToken, refreshToken, data } = request;
      settoken({ key: "user", data });
      settoken({ key: "tokens", data: { accessToken, refreshToken } });
      console.log(request.success)
      return navigate("/applicant/home");
    }
    setError(request.message);
  }
   

  } 

  return (
    <div className="signIn-page">
    <div className="imageSection">
      
    {/* <h1 className='signinMessage'>
      WELCOME!
    </h1>
    <p></p> */}
    <img src={WhiteLogo} alt="logo" className="white-logo" />
    <img src={RecruiterApplicant} alt="logo" className="recruiterApplicant" />
    </div>

    <div className='formSection'>
    <img src={Logo} alt="logo" className="login-logo" />
        <div className="formContainer">
          <form onSubmit={(e) => submitform(e)}>
            <div className="signinOptions">
                <h1>SIGN IN</h1>
                <div className="signinTypeButtons" onClick={() => setRecruiterToggle(!recruiterToggle)}>
                  {
                    recruiterToggle ? (
                      <>
                      <div className="signinOption-Active" > as recruiter <MdWork /> </div>
                      <div className="signinOption-InActive" >as applicant <FaUserTie /></div>
                      </>
                     ) : (
                      <>
                      <div className="signinOption-InActive" > as recruiter <MdWork /> </div>
                      <div className="signinOption-Active" >as applicant <FaUserTie /></div>
                      </>
                     )
                  }
                  
                </div>

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

            <span style={{color: "red"}}>{error}</span>
            
              
            <button type="submit" className="FormButton">
              sign in
            </button>            
          </form>
          <div className="form-border"></div>
          <h4>
            New to ZipRecruiter? Choose an account type and let's get you started.
          </h4>
          <div className="signupButtons">
            <button onClick={() => {navigate('/recruiter/signup')}} className="signupButton">
              recruiter
            </button>
          
            <button onClick={() => navigate('/applicant/signup')} className="signupButton">
              applicant
            </button>
         
          </div>
        </div>
      </div>
      </div>
  );
};


export default Signin;
