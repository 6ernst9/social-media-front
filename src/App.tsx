import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import ProfileOverviewWidget from "./widgets/profile-overview-widget/ProfileOverviewWidget";
import NotificationOverviewWidget from "./widgets/notif-overview-widget/NotificationOverviewWidget";
import SettingsOverviewWidget from "./widgets/settings-overview-widget/SettingsMainWidget";
import SearchWidget from "./widgets/search-widget/SearchWidget";
import PostCreateWidget from "./widgets/post-create-widget/PostCreateWidget";
import AuthLoginWidget from "./widgets/auth-login-widget/AuthLoginWidget";
import FeedMainWidget from "./widgets/feed-main-widget/FeedMainWidget";
import MessagingOverviewWidget from "./widgets/messaging-overview-widget/MessagingOverviewWidget";
import Sidebar from "./components/core/Sidebar/Sidebar";
import AuthRegistrationWidget from "./widgets/auth-registration-widget/AuthRegistrationWidget";

function App() {
  return (
      <Router>
        <div className="app">
          <Sidebar />

          <div className="main-content">
            <Routes>
              <Route index Component={FeedMainWidget} />
              <Route path="/home" Component={FeedMainWidget} />
              <Route path="/search" Component={SearchWidget} />
              <Route path="/messages" Component={MessagingOverviewWidget} />
              <Route path="/notifications" Component={NotificationOverviewWidget} />
              <Route path="/create" Component={PostCreateWidget} />

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
