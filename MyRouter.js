import React from "react";
import { BrowserRouter as Router, Routes, Route,Link } from "react-router-dom";
import About from  "./About"
import Home from "./home";
import Contact from "./Contact"
import Service from "./service"
import NotFount from "./NotFound";
import Profile from "./profile";

export default function AppRouter() {
  return (
    <Router>
      <div  >
        <Link to="/">Home</Link>
        <Link to="about">about</Link>
        <Link to="contact">contact</Link>
        <Link to="servi">service</Link>
        <Link to="profile/:">Login</Link>

      </div>

      <Routes>
     
        <Route path="/" element={<Home/>}></Route>
        <Route path="about" element={<About/>}></Route>
        <Route path="contact" element={<Contact/>}></Route>
        <Route path="servi" element={<Service/>}></Route>
        <Route path="profile/:id" element={<Profile/>}></Route>
        <Route path="*" element={<NotFount/>}></Route>
        



      </Routes>
    </Router>
  );
}
