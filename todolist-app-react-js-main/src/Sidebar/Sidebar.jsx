import React, { useState } from "react";
import "./Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faBell, faAdd, faTimes , faBars, faCalendar, faCalendarCheck, faArrowAltCircleRight} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { faCalendarDay } from "@fortawesome/free-solid-svg-icons/faCalendarDay";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        <FontAwesomeIcon icon={faArrowAltCircleRight} style={{padding:"0.5rem", color:"black"}}/>
        <h5 style={{fontSize:"13px"}}>Slide a Navbar!</h5>
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
            <Link to="/">
              <FontAwesomeIcon icon={faHome} />
              <span>HOME</span>
            </Link>
          </div>
          <div className="menu-item">
            <FontAwesomeIcon icon={faBell} />
            <Link to="/Noti">Notification</Link>
          </div>
          <div className="menu-item">
            <Link to="/Calendar">
              <FontAwesomeIcon icon={faCalendarDay} />
              <span>Calendar</span>
            </Link>
          </div>
        </div>
        <div className="profile">
          <div className="profile-icon"></div>
          <p> user</p>
          <i className="icon dropdown-icon"></i>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
