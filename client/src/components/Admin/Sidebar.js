import React, { useState, useEffect } from "react";
import { FaTh, FaCommentAlt, FaThList } from "react-icons/fa";
import { Link, NavLink } from 'react-router-dom';
import { FaUsers, FaHandHoldingMedical } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle } from "react-icons/bs";
import { FaBookMedical } from "react-icons/fa";
import './Sidebar.css';
import { Getusersmessage } from '../Api';

const Sidebar = ({ children }) => {
  const [search, setSearch] = useState('');
  const [messageCount, setMessageCount] = useState(0);

  useEffect(() => {
    async function fetchMessageCount() {
      try {
        const data = await Getusersmessage();
        setMessageCount(data.count);
      } catch (error) {
        console.error('Error fetching user message count:', error);
      }
    }

    fetchMessageCount();
  }, []);

  const menuItem = [
    { path: "/dashboard", name: "Dashboard", icon: <FaTh /> },
    { path: "/doctorlist", name: "Doctorsdata", icon: <FaUserDoctor /> },
    { path: "/userslist", name: "Usersdata", icon: <FaUsers /> },
    { path: "/messages", name: "Usersmessage", icon: <FaCommentAlt /> },
    { path: "/adddoctor", name: "Add Doctors", icon: <FaHandHoldingMedical /> },
    { path: "/appointments", name: "Appointments", icon: <FaBookMedical /> },
  ];

  const filteredMenu = menuItem.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div>
      <header className="header">
        <div className="header-left">
          <div className="search_section">
            <input 
              type="text" 
              placeholder="Search..." 
              value={search} 
              onChange={(e) => setSearch(e.target.value)} 
              className="search_input" 
            />
          </div>
        </div>
        <div className="header-right">
          <div className="bell-icon-container">
            <Link to='/messages'> <BsFillBellFill className="icon" /></Link>
            {messageCount > 0 && <span className="badge">{messageCount}</span>}
          </div>
          <BsFillEnvelopeFill className="icon" />
          <Link to='/adminprofile'><BsPersonCircle className="icon" /></Link>
        </div>
      </header>
      <div className="app-container">
        <div className="sidebar">
          <div className="top_section">
            <h1 className="logo">Wecare</h1>
          </div>
          {filteredMenu.map((item, index) => (
            <NavLink to={item.path} key={index} className="link" activeclassname="active">
              <div className="icon">{item.icon}</div>
              <div className="link_text">{item.name}</div>
            </NavLink>
          ))}
        </div>
        <main className="content-container">{children}</main>
      </div>
    </div>
  );
};

export default Sidebar;
