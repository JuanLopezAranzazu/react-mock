import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// pages
import Home from "./pages/Home/Home";
import Users from "./pages/Users/Users";
import Dashboard from "./pages/Dashboard/Dashboard";
// context provider
import UserContextProvider from "./data/UserContextProvider";

const App = () => {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </UserContextProvider>
  );
};

export default App;
