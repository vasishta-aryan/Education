import React from "react";
import { Link } from "react-router-dom";

import "../../App.css";

export default function LandingPage() {
  return (
    <div className="LandingPage">
      <nav className="navbar">
        <ul>
          <li className="list">
            <a className="Home_list" href="/">
              HOME
            </a>
          </li>
          <li>
            <a className="Student_list" href="/login">
              STUDENT
            </a>
          </li>
          <li>
            <a className="Teacher_list" href="/TeacherLoginPage">
              TEACHER
            </a>
          </li>
        </ul>
      </nav>
      <header style={HeaderStyle}>
        <h1 className="main-title text-center">It's Quiz Time!</h1>
      </header>
    </div>
  );
}

const HeaderStyle = {
  width: "100%",
  height: "100vh",

  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};
