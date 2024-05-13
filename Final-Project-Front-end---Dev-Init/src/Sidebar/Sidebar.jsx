import React, { useState } from "react";
import "./Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faBell, faAdd, faTimes , faBars, faCalendar, faCalendarCheck, faArrowAltCircleRight} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { faCalendarDay } from "@fortawesome/free-solid-svg-icons/faCalendarDay";
import { useSession, useSupabaseClient, useSessionContext } from '@supabase/auth-helpers-react';
function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const session = useSession(); 
  const supabase = useSupabaseClient();
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        <FontAwesomeIcon icon={faBars} style={{padding:"0.5rem", color:"white"}}/>
       
      </button>

      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <button className="sidebar-close" onClick={toggleSidebar}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <div className="logo">
          <h1 style={{ color: "red" }}>PK Todolist</h1>
        </div>
        <div className="menu">
          <div className="menu-item"> 
          <FontAwesomeIcon icon={faHome} />
            <Link to="/">
             
              <span>HOME</span>
            </Link>
          </div>
          <div className="menu-item">
            <FontAwesomeIcon icon={faBell} />
            <Link to="/Noti"> <span>Noti</span></Link>
          </div>
          <div className="menu-item"> 
          <FontAwesomeIcon icon={faCalendarDay} />
            <Link to="/Calendar">
             <span>Calendar</span>
            </Link>
          </div>
        </div>
        <div className="profile">
          <div className="profile-icon"></div>
          <p>User</p>
          <i className="icon dropdown-icon"></i>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
