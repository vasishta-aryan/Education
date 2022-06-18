import React from "react";
import { Link } from "react-router-dom";

import "../../App.css";

export default function ForgetPasswordPage() {
  return (
    <div className="ForgotPage">
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
        <h2>Reset your password</h2>
        <h5>Enter your email address and we will send you a new password</h5>
        <form action="/login">
          <p>
            <label id="reset_pass_lbl">Email address</label>
            <br />
            <input type="email" name="email" required />
          </p>
          <p>
            <button id="sub_btn" type="submit">
              Send password reset email
            </button>
          </p>
        </form>
        <footer>
          <p>
            First time? <Link to="/register">Create an account</Link>.
          </p>
          <p>
            <Link to="/">Back to Homepage</Link>.
          </p>
        </footer>
      </div>
    </div>
  );
}
