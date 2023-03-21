import { CalendarViewDayOutlined, LocationCityOutlined, MailOutlineOutlined, PermContactCalendar, PhoneAndroid, Publish } from '@material-ui/icons';
import React from 'react'
import {Link} from 'react-router-dom'
import './User.css';

const User = () => {
  return (
    <div className='User'>
      <div className="userTitleContainer">
        <h1 className='userTitle'>𝐄𝐝𝐢𝐭 𝐔𝐬𝐞𝐫</h1>
        <Link to={"/newUser"} >
        <button className='userAddButton'>𝐂𝐫𝐞𝐚𝐭𝐞</button>
        </Link>
        
      </div>
      <div className="userContainer">
        <div className="userShow">
            <div className="user-info">
                <img src="https://th.bing.com/th?id=ODL.c4d0704b53e9e31c354fc468a97f379c&w=275&h=180&c=12&rs=1&qlt=99&pcl=faf9f7&o=6&dpr=1.5&pid=13.1" alt="" />
                <div className="user-name-proffession">
                    <span className='userName'>Emilia Clark</span>
                    <span className='profession'>Movie Actoress</span>
                </div>
            </div>
            <div className="account-details">
                <div className="acn-title">Account Details</div>
                <span className='acn'>
                <PermContactCalendar/>
                    Emm921clark</span>
                <span className='DOB'>
                    <CalendarViewDayOutlined />
                    10/12/1999</span>
            </div>
            <div className="account-details">
                <div className="acn-title">Contact Details</div>
                <span className='acn'>
                <PhoneAndroid/>
                    +1 923 212 342</span>
                <span className='DOB'>
                    <LocationCityOutlined />
                    New York|USA</span>
                <span className='DOB'>
                    <MailOutlineOutlined />
                    emilia921@gmail.com</span>
            </div>
        </div>
        <div className="userUpdate">
            <div className="edit-title">Edit</div>
            <form className='userUpdateForm'>

                <div className="userUpdateLeft">
                    
                    <div className="userUpdateItem">
                        <label>Username</label>
                        <input type="text" 
                        placeholder='Emm921clark' className='userUpdateInput' />
                    </div>
                    <div className="userUpdateItem">
                        <label>Full Name</label>
                        <input type="text" 
                        placeholder='Emmilia Clark' className='userUpdateInput' />
                    </div>
                    <div className="userUpdateItem">
                        <label>Username</label>
                        <input type="email" 
                        placeholder='emilia921@gmail.com' className='userUpdateInput' />
                    </div>
                    <div className="userUpdateItem">
                        <label>Phone</label>
                        <input type="text" 
                        placeholder='+1 923 212 342' className='userUpdateInput' />
                    </div>
                    <div className="userUpdateItem">
                        <label>Address</label>
                        <input type="text" 
                        placeholder='New York|USA' className='userUpdateInput' />
                    </div>
                </div>
                <div className="userUpdateRight">
                    <div className="userUpdateUpload">
                        <div className="updateImage">
                            <img src="https://th.bing.com/th?id=ODL.c4d0704b53e9e31c354fc468a97f379c&w=275&h=180&c=12&rs=1&qlt=99&pcl=faf9f7&o=6&dpr=1.5&pid=13.1" alt="" />
                           
                            <label htmlFor="file">
                  <Publish className="userUpdateIcon" />
                </label>
                            <input type="file" id='file' style={{display:"none"}} />
                        </div>
                        <button className="updateProfile">Update</button>
                        
                    </div>
                </div>
            </form>
        </div>
      </div>
    </div>
  )
}

export default User
