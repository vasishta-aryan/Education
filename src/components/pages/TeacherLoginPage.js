import React from "react";
import { Link } from "react-router-dom";

import "../../App.css";

export default function TeacherLoginPage() {
  return (
    <div className="StudentLoginPage">
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
      <div className="Maincontainer">
        <h2>Teacher Login</h2>
        <form className="teacher_login" action="/teacher">
          <p>
            <label>Username or email address</label>
            <br />
            <input type="text" name="first_name" required />
          </p>
          <p>
            <label>Password</label>
            <Link to="/forget-password">
              <label className="right-label">Forget password?</label>
            </Link>
            <br />
            <input type="password" name="password" required />
          </p>
          <p>
            <button id="sub_btn" type="submit">
              Login
            </button>
          </p>
        </form>
        <footer>
          <p className="fist">
            First time? <Link to="/register">Create an account</Link>.
          </p>
          <p className="second">
            <Link to="/">Back to Homepage</Link>.
          </p>
        </footer>
      </div>
    </div>
  );
}
