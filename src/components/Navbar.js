// components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/project">Project</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li>
          <a href="https://drive.google.com/file/d/1MhxjqF4ZjHOR7jQsfFncSxCz0ZoCoGZA/view?usp=drive_link" target="_blank" rel="noopener noreferrer">Resume</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
