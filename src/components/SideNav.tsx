import React from 'react'
import { MdDashboard } from 'react-icons/md'
import { RiBarChart2Fill } from 'react-icons/ri'
import { FaUsers, FaShippingFast } from 'react-icons/fa'
import WhiteLogo from '../assets/white_logo.png'
// import { Link } from 'react-router-dom'
// import { getDashboard, getUsers } from '../services/apiRequest.services'
import { isTypeElement } from 'typescript'
import { useNavigate } from 'react-router-dom'
import Logout from './Logout'
// import Logout from './Logout'

const SideNav = (props: any) => {
    const navigate = useNavigate()
  const menuItems = [
    {
      name: "home",
      path: "/recruiter/home",
      icon: < MdDashboard />,

    //   action: getDashboard
    },
    {
      name: "applicants",
      path: "/recruiter/applicants",
      icon: < FaUsers />,
    //   action: getUsers
    },
    {
      name: "profile",
      path: "/recruiter/profile",
      icon: < FaShippingFast />,
    //   action: getUsers
    },
  ]
  return (
    <div >
      <div className="sidebar">
        <div className="sidebar-header">
        <img src={WhiteLogo} alt="logo" className="sidebar-whiteLogo" />
        </div>
        {/* <div className="sidebar-toggle">x</div> */}
        <div className="menu-items" >
          {
            menuItems.map((item) => (
              
              <div className="menu-item" 
                onClick={() => navigate(`${item.path}`) }
              >
                 <div className="menuIcon" >{item.icon}</div>
                 <div className="itemName" >{item.name}</div>
              </div>
              ))
          }
          
        </div >
        <Logout />
      </div>
      <div className="main">
        {props.children}
      </div>
      
    </div>
  )
}

export default SideNav