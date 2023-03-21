import { AttachMoney, FeedbackOutlined,  FileCopyOutlined, LineStyle, MailOutlineOutlined,  MessageOutlined, Person, Poll, ReportOffOutlined, Storefront, Timeline, TrendingUp } from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import './Sidebar.css'

const Sidebar = () => {
  return (
    <div className='Sidebar'>
      <div className="sidebar-wrapper">
        <div className="sidebarMenu">
          <div className="sidebarTitle">𝔻𝕒𝕤𝕙𝕓𝕠𝕒𝕣𝕕</div>
          <ul className='sidebarList' >
          <Link to="/" className='sidebarList-Item link '>
            <li className='sidebarList-Item ' >
              <LineStyle className='sidebarIcon' />
              Home
            </li>
            </Link>
            <li className='sidebarList-Item' >
              <Timeline  className='sidebarIcon'/>
              Analytics
            </li>
            <li className='sidebarList-Item' >
              <TrendingUp  className='sidebarIcon'/>
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <div className="sidebarTitle">ℚ𝕦𝕚𝕔𝕜 𝕄𝕖𝕟𝕦</div>
          <ul className='sidebarList' >
           
           <Link to={"/users"} className='sidebarList-Item link'>
            <li className='sidebarList-Item' >
              <Person  className='sidebarIcon'/>
              Users 
              </li>
           </Link>
         
           <Link to={"/products"} className='sidebarList-Item link'>
            <li className='sidebarList-Item' > 
              <Storefront  className='sidebarIcon'/>
              Products
            </li>
            </Link>
            
            <li className='sidebarList-Item' >
              <AttachMoney  className='sidebarIcon'/>
              Transactions
            </li>
            <li className='sidebarList-Item' >
              <Poll  className='sidebarIcon'/>
              Reports
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <div className="sidebarTitle">ℕ𝕠𝕥𝕚𝕗𝕚𝕔𝕒𝕥𝕚𝕠𝕟𝕤</div>
          <ul className='sidebarList' >
            <li className='sidebarList-Item' >
              <MailOutlineOutlined  className='sidebarIcon'/>
              Mail
            </li>
            <li className='sidebarList-Item' >
              <FeedbackOutlined  className='sidebarIcon'/>
              Feedback
            </li>
            <li className='sidebarList-Item' >
              <MessageOutlined  className='sidebarIcon'/>
              Message
            </li>
            
          </ul>
        </div>
        <div className="sidebarMenu">
          <div className="sidebarTitle">𝕊𝕥𝕒𝕗𝕗</div>
          <ul className='sidebarList' >
            <li className='sidebarList-Item' >
              <FileCopyOutlined  className='sidebarIcon'/>
              Manage
            </li>
            <li className='sidebarList-Item' >
              <Timeline  className='sidebarIcon'/>
              Analytics
            </li>
            <li className='sidebarList-Item' >
              <ReportOffOutlined  className='sidebarIcon'/>
              Report
            </li>
           
          </ul>
        </div>
      </div>
      
    </div>
  )
}

export default Sidebar
