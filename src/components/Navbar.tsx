import { normalize } from 'path'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { FaUserAlt } from 'react-icons/fa'
import Logo from '../assets/logo.png'
import DropDownProfile from './DropDownProfile'


const Navbar = () => {
    // const [isActive,setIsActive] = useState(false)
    // const navLinkStyles = ({ isActive }) => {
    //     return {
    //         fontWeight: isActive ? 'bold': normal
    //     }
    // }

    const navigate = useNavigate();
    const [dropDownMenu, setDropDownMenu] = useState(false)
    const dropDown = () => {
        setDropDownMenu(!dropDownMenu)
    }


  return (
    <nav>
        <img src={Logo} alt="logo" className="nav-logo" />
        <ul>
            <li onClick={()=>navigate('/applicant/home')}>
                Home
            </li>
            <li className='nav-element' onClick={()=>navigate('/applicant/applications')}>
                 Applications 
            </li>
            <li className='nav-element' onClick={()=>navigate('/applicant/profile')}>
                 Jeremiah
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

export default Navbar
