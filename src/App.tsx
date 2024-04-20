import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import AuthLoginWidget from "./widgets/auth-login-widget/AuthLoginWidget";
import MessagingOverviewWidget from "./widgets/messaging-overview-widget/MessagingOverviewWidget";
import AuthRegistrationWidget from "./widgets/auth-registration-widget/AuthRegistrationWidget";

function App() {
  return (
      <Router>
        <div className="app">
          <div className="main-content">
            <Routes>
              <Route index Component={MessagingOverviewWidget} />
              <Route path="/home" Component={MessagingOverviewWidget} />

              <Route path="/login" Component={AuthLoginWidget} />
              <Route path="/register" Component={AuthRegistrationWidget} />
            </Routes>
          </div>
        </div>
      </Router>
  );
}

export default App;
