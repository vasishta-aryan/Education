import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Teacher from "./components/pages/Teacher";
import LandingPage from "./components/pages/LandingPage";
import LoginPage from "./components/pages/LoginPage";
import RegisterPage from "./components/pages/RegisterPage";
import ForgetPasswordPage from "./components/pages/ForgetPasswordPage";
import Student from "./components/pages/Student";
import TeacherLoginPage from "./components/pages/TeacherLoginPage";
import "./App.css";

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/forget-password" component={ForgetPasswordPage} />
          <Route path="/student" component={Student} />
          <Route path="/teacher" component={Teacher} />
          <Route path="/teacherLoginPage" component={TeacherLoginPage} />
        </Switch>
      </div>
    </Router>
  );
}
