// const Signin = () => {
//   return (
//     <div>
//       Signin page
//       <div>
//       <Link to='/recruiter/home'><button>Signin as recruiter</button></Link>
//       <Link to='/applicant/home'><button>Signin as applicant</button></Link>
//       </div>
//       <div>
//         Don't have an account? Create one here
//        <Link to='/recruiter/signup'> <button>Recruiter</button></Link>
//        <Link to='/applicant/signup'> <button>Applicant</button></Link>
//       </div>
//     </div>
//   )
// }




import React, { createContext, useState } from "react";
import '../App.css';
import { useNavigate } from "react-router-dom";
import Logo from '../assets/logo.png';
import WhiteLogo from '../assets/white_logo.png'
import RecruiterApplicant from '../assets/recruiter_applicant.png'
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
// import formHandler from "../services/formHandler.services";
// import { getDashboard, postData, settoken } from "../services/apiRequest.services";
import { setegid } from "process";
import {MdEmail} from "react-icons/md"
import {HiLockClosed} from "react-icons/hi"
import formHandler from "../services/formHandler.services";


const Signin = () => {
  const navigate = useNavigate();
  const [error, setError] = useState<string>("");
  const [dashboardData, setDashboardData] = useState("")

  // const { globalState, setGlobalState } = createContext(GlobalContext);

  const submitform = async (e: React.FormEvent<HTMLFormElement> | any) => {
    //prevent form page refresh
    e.preventDefault();
    setError("")

    const formelements = e.target.elements;
    const formvalues = {
      email: formHandler(formelements, "email"),
      password: formHandler(formelements, "password"),
    };

    
      // const request:any = await getDashboard();
      //   if (request.success) {
      //     // settoken({key:"user", data: request.data})
      //     console.log(request)
      //     setDashboardData(request.message)
      //     window.localStorage.setItem('dashboard', JSON.stringify(dashboardData));
      //   }
      //   setError(request.message)
    
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
          <h1>SIGN IN</h1>
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
