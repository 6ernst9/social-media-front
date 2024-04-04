import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import ProfileOverviewWidget from "./widgets/profile-overview-widget/ProfileOverviewWidget";
import SettingsOverviewWidget from "./widgets/settings-overview-widget/SettingsMainWidget";
import AuthLoginWidget from "./widgets/auth-login-widget/AuthLoginWidget";
import MessagingOverviewWidget from "./widgets/messaging-overview-widget/MessagingOverviewWidget";
import Sidebar from "./components/core/Sidebar/Sidebar";
import AuthRegistrationWidget from "./widgets/auth-registration-widget/AuthRegistrationWidget";
import {useSelector} from "react-redux";
import {layoutSelect} from "./redux/core/layout/selectors";

function App() {
  const shouldShowSidebar = useSelector(layoutSelect.showSidebar);

  return (
      <Router>
        <div className="app">
          {shouldShowSidebar && <Sidebar/>}

          <div className="main-content">
            <Routes>
              <Route index Component={MessagingOverviewWidget} />
              <Route path="/home" Component={MessagingOverviewWidget} />

              <Route path="/profile" Component={ProfileOverviewWidget} />
              <Route path="/settings" Component={SettingsOverviewWidget} />

              <Route path="/login" Component={AuthLoginWidget} />
              <Route path="/register" Component={AuthRegistrationWidget} />
            </Routes>
          </div>
        </div>
      </Router>
  );
}

export default App;
