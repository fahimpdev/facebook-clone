import React from "react";
import "./App.css";
import Feed from "./Component/Feed/Feed";
import Header from "./Component/Header/Header";
import RightSidebar from "./Component/RightSidebar/RightSidebar";
import Sidebar from "./Component/Sidebar/Sidebar";
import Login from "./Component/Login/Login";
import { StateProvider } from "./StateProvider";
import reducer, { initialState } from "./reducer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <MainApp />
    </StateProvider>
  );
}

function MainApp() {
  const user = {
    name: "Default User",
    email: "user@example.com",
  };

  return (
    <Router>
      <Routes>
        {!user ? (
          <Route path="/*" element={<Login />} />
        ) : (
          <Route
            path="/"
            element={
              <div>
                <Header />
                <div className="app_body">
                  <Sidebar />
                  <Feed />
                  <RightSidebar />
                </div>
              </div>
            }
          />
        )}
      </Routes>
    </Router>
  );
}

export default App;
