import React from "react";
import Sidebar from "./component/Sidebar";
import "./styles/Profile.css";
import Dashboard from "./pages/Dashboard";
import Chart from "./pages/Chart";
import Chat from "./pages/Chat";
import Message from "./pages/Message";
import Apps from "./pages/Apps";
import Settings from "./pages/Settings";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function Profile() {
  return (
    <div className="profile-page">
      <Router>
        <Sidebar />
        <Switch>
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/chart" component={Chart} />
          <Route exact path="/chat" component={Chat} />
          <Route exact path="/message" component={Message} />
          <Route exact path="/apps" component={Apps} />
          <Route exact path="/settings" component={Settings} />
        </Switch>
      </Router>
      <h1>This is profile dude</h1>
    </div>
  );
}

export default Profile;
