import React from 'react'
import './header.css'
import NetflixLogo from '../../assets/Images/Netflix_2015_logo.svg'
import SearchIcon from '@mui/icons-material/Search';
import  NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Person2Icon from '@mui/icons-material/Person2';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


function Header() {
  return (
    <div className='header_outer_container'>
        <div className='header_container'>
            <div className='header_left'>
                <ul>    
                    <li><img src={NetflixLogo}  alt='Netflix Logo' width="100"/> </li>
                    <li>Home</li>
                    <li>TvShows</li>
                    <li>Latest</li>
                    <li>MyList</li>
                    <li>Browse by Language</li>
                </ul>
            </div>
            <div className='header_right'>
                <ul>
                    <li><SearchIcon/></li>
                    <li><NotificationsNoneIcon /></li> 
                    <li><Person2Icon/></li>
                    <li><ArrowDropDownIcon/></li>
                    {/* <li>Notifications</li> */}
                    {/* <li>Profile</li> */}
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Header
