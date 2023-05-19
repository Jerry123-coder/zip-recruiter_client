import React from 'react'
import { MdDashboard } from 'react-icons/md'
import { RiBarChart2Fill } from 'react-icons/ri'
import { FaUsers, FaShippingFast } from 'react-icons/fa'
import WhiteLogo from '../assets/white_logo.png'
import { isTypeElement } from 'typescript'
import { useNavigate } from 'react-router-dom'
import Logout from './Logout'


const SideNav = (props: any) => {
    const navigate = useNavigate()
  const menuItems = [
    {
      name: "home",
      path: "/recruiter/home",
      icon: < MdDashboard />,
    },
    {
      name: "applicants",
      path: "/recruiter/applicants",
      icon: < FaUsers />,
    },
    {
      name: "profile",
      path: "/recruiter/profile",
      icon: < FaShippingFast />,
    },
  ]
  return (
    <div >
      <div className="sidebar">
        <div className="sidebar-header">
        <img src={WhiteLogo} alt="logo" className="sidebar-whiteLogo" />
        </div>
        <div className="menu-items" >
          {
            menuItems.map((item, key) => (
              
              <div className="menu-item" 
              key={key}
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