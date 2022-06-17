import React from "react";
import { Link } from "react-router-dom";

import "../../App.css";

export default function Teacher() {
  return (
    <div className="LandingPage">
      <nav className="navbar">
        <ul>
          <li className="list">
            <a className="Home_list" href="/">
              HOME
            </a>
          </li>
          <li className="logout-but">
            <a className="Teacher_list" href="/">
              LOGOUT
            </a>
          </li>
        </ul>
      </nav>
      <div className="Maincontainer">
        <h1 className="teacher_title">Teacher Portal</h1>
      </div>
    </div>
  );
}
