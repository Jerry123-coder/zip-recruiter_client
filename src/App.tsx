import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import ApplicantHome from './pages/applicant/ApplicantHome.pages';
import ApplicantProfile from './pages/applicant/ApplicantProfile.pages';
import ApplicantSignup from './pages/applicant/ApplicantSignup.pages';
import Applications from './pages/applicant/Applications.pages';
import Applicants from './pages/recruiter/Applicants.pages';
import RecruiterHome from './pages/recruiter/RecruiterHome.pages';
import RecruiterProfile from './pages/recruiter/RecruiterProfile.pages';
import RecruiterSignUp from './pages/recruiter/RecruiterSignUp.pages';
import Signin from './pages/SignIn.pages';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<Signin />}></Route>
      <Route path='/applicant/signup' element={<ApplicantSignup />}></Route>
      <Route path='/recruiter/signup' element={<RecruiterSignUp />}></Route>
      <Route path='/recruiter/home' element={<RecruiterHome />}></Route>
      <Route path='/recruiter/applicants' element={<Applicants />}></Route>
      <Route path='/recruiter/profile' element={<RecruiterProfile />}></Route>
      <Route path='/applicant/home' element={<ApplicantHome />}></Route>
      <Route path='/applicant/applications' element={<Applications />}></Route>
      <Route path='/applicant/profile' element={<ApplicantProfile />}></Route>
    </Routes>
    </div>
  );
}

export default App;
