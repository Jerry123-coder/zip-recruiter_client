import { normalize } from 'path'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    // const [isActive,setIsActive] = useState(false)
    // const navLinkStyles = ({ isActive }) => {
    //     return {
    //         fontWeight: isActive ? 'bold': normal
    //     }
    // }
  return (
    <nav>
        <ul>
            <li >
                <NavLink to='/applicant/home' >Home</NavLink>
            </li>
            <li className='nav-element'>
                <NavLink to='/applicant/applications' > Applications </NavLink>
            </li>
            <li className='nav-element'>
                <NavLink to='/applicant/profile'> User Profile </NavLink>
            </li>        
        </ul>
    </nav>
  )
}

export default Navbar
