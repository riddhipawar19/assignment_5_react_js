import React from 'react'
import './Navbar.css'
import logo from '../images/logo.jpg'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import InsertCommentRoundedIcon from '@mui/icons-material/InsertCommentRounded';
import NotificationsActiveRoundedIcon from '@mui/icons-material/NotificationsActiveRounded';

function Navbar() {
    return (
        <div className="navbar">

            <div className="navbar__left">
                <img src={logo}></img>
                <div className="navbar__search">
                   <SearchIcon className="icons"/>
                  <input placeholder='Search'></input>
                </div>
            </div>

            <div className="navbar__right">
                <div className="right__item">
                  <HomeIcon className="icons"/>
                  <p>Home</p>
                </div>

                <div className="right__item">
                  <PeopleIcon className="icons middle_icons"/>
                  <p>Network</p>
                </div>

                <div className="right__item">
                  <BusinessCenterIcon className="icons"/>
                  <p>Jobs</p>
                </div>

                <div className="right__item">
                  <InsertCommentRoundedIcon className="icons middle_icons"/>
                  <p>Messaging</p>
                </div>

                <div className="right__item">
                  <NotificationsActiveRoundedIcon className="icons middle_icons"/>
                  <p>Notifications</p>
                </div>

            </div>

        </div>
    )
}

export default Navbar
