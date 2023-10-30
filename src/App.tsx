import React from 'react';
import './App.css';
import Sidebar from "./components/Sidebar/Sidebar";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import FeedMainWidget from "./widgets/feed-main-widget/FeedMainWidget";
import MessagingOverviewWidget from "./widgets/messaging-chat-widget/MessagingOverviewWidget";
import ProfileOverviewWidget from "./widgets/profile-overview-widget/ProfileOverviewWidget";
import NotificationOverviewWidget from "./widgets/notif-overview-widget/NotificationOverviewWidget";
import SettingsOverviewWidget from "./widgets/settings-overview-widget/SettingsMainWidget";
import SearchWidget from "./widgets/search-widget/SearchWidget";
import PostCreateWidget from "./widgets/post-create-widget/PostCreateWidget";

function App() {
  return (
      <Router>
        <div className="app">
          <Sidebar />

          <div className="main-content">
            <Routes>
              <Route path="/home" Component={FeedMainWidget} />
              <Route path="/search" Component={SearchWidget} />
              <Route path="/messages" Component={MessagingOverviewWidget} />
              <Route path="/notifications" Component={NotificationOverviewWidget} />
              <Route path="/create" Component={PostCreateWidget} />

              <Route path="/profile" Component={ProfileOverviewWidget} />
              <Route path="/settings" Component={SettingsOverviewWidget} />
            </Routes>
          </div>
        </div>
      </Router>
  );
}

export default App;
