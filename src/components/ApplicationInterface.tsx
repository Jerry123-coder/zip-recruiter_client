import React, { useState } from 'react'
import Logo from '../assets/logo.png'

const ApplicationInterface = () => {

    const [closed, setClosed] = useState(false);

    const toggleClosed = () => {
        setClosed(true)
    }
   
  return (
    <>
    {
        closed ? '' :(
            <div className='applyOverlay'>
        <div className="applicationForm">
        <img src={Logo} alt="logo" className="applicationForm-logo" />
            <div className="closeButton" onClick={toggleClosed}>X</div>
            <div className="applicantButtons">
            <div className="uploadcv">upload cv</div>
            <div className="uploadCoverLetter">upload cover letter</div>
            </div>
        <div className="applicationNote">Kindly upload both documents to proceed</div>
        </div>
        </div>
        ) 
    }
    
    </>
    
  )
}

export default ApplicationInterface
