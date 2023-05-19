import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { FaUserAlt } from 'react-icons/fa'
import Logo from '../assets/logo.png'
import DropDownProfile from './DropDownProfile'
import { getId } from '../services/apiRequests'


const RecruiterNavBar = () => {

    const navigate = useNavigate();
    const [dropDownMenu, setDropDownMenu] = useState(false)

    const user= getId("user")
    const dropDown = () => {
        setDropDownMenu(!dropDownMenu)
    }
  return (
    <nav className='recruiterNavBar'>
    <img src={Logo} alt="logo" className="nav-logo" />
    <ul>
        <li className='nav-element' onClick={()=>navigate('/applicant/profile')}>
             {user.name}
        </li>       
        <div className="applicantProfile" onClick={dropDown}> <FaUserAlt/> 
            {
                dropDownMenu ? <DropDownProfile/> : ''
            }
            
        </div> 
    </ul>
    
</nav>
  )
}

export default RecruiterNavBar
