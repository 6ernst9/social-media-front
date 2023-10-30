import React from "react";
import {Link} from "react-router-dom";
import './Sidebar.css';
import Home1 from '../../assets/icons/house.svg';
import Search from '../../assets/icons/search.svg';
import Message from '../../assets/icons/chat.svg';
import Notification from '../../assets/icons/bell.svg';
import Plus from '../../assets/icons/plus.svg';
import User from '../../assets/icons/user.svg';
import Settings from '../../assets/icons/settings.svg';

const Sidebar: React.FC = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-options">
                <p className="sidebar-logo">yolo</p>
                <div className="sidebar-options">
                    <Link to="/home" className="sidebar-option">
                        <img src={Home1} className="sidebar-icon"/>
                        <p>Home</p>
                    </Link>
                    <Link to="/search" className="sidebar-option">
                        <img src={Search} className="sidebar-icon"/>
                        <p>Search</p></Link>
                    <Link to="/messages" className="sidebar-option">
                        <img src={Message} className="sidebar-icon"/>
                        <p>Messages</p>
                    </Link>
                    <Link to="/notifications" className="sidebar-option">
                        <img src={Notification} className="sidebar-icon"/>
                        <p>Notifications</p>
                    </Link>
                    <Link to="/create" className="sidebar-option">
                        <img src={Plus} className="sidebar-icon"/>
                        <p>Create</p>
                    </Link>
                </div>
            </div>

            <div className="sidebar-options">
                <Link to="/profile" className="sidebar-option">
                    <img src={User} className="sidebar-icon"/>
                    <p>Profile</p>
                </Link>
                <Link to="/settings" className="sidebar-option">
                    <img src={Settings} className="sidebar-icon"/>
                    <p>Settings</p>
                </Link>
            </div>
        </div>
    );
};

export default Sidebar;