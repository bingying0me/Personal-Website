// src/components/Header.js
import React from 'react';
import { useState } from "react"
import '../style/Header.css';
import 'font-awesome/css/font-awesome.min.css';

function Header() {
  const [isNavExpanded, setIsNavExpanded] = useState(false)

  function openNavigation() {
    setIsNavExpanded(!isNavExpanded);
  }

  function closeNavigation() {
    setIsNavExpanded(false);
  }

  return (
    <header className="header">
      <div className="header-logo">
        <img src="/images/logo.png" alt="Logo" />
      </div>
      <ul className={
          isNavExpanded ? "navigation expanded" : "navigation"
        }>
        <li className="navigation-item" onClick={closeNavigation}><a href="/">HOME</a></li>
        <li className="navigation-item" onClick={closeNavigation}><a href="/#skills">SKILLS</a></li>
        <li className="navigation-item" onClick={closeNavigation}><a href="/#project">PROJECT</a></li>
        <li className="navigation-item" onClick={closeNavigation}><a href="/resume.pdf">RESUME</a></li>
      </ul>
      <div className="icon" onClick={openNavigation}>
        <i className={
          isNavExpanded ? "fa fa-times" : "fa fa-bars"
        }></i>
      </div>
    </header>
  );
}

export default Header;

