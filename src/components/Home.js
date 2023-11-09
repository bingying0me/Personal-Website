// src/components/Home.js
import React, { useState, useEffect } from 'react';

import '../style/Home.css';

import Skills from './Skills.js';
import Project from './Project.js';
import BackToTopButton from './BackToTopButton.js';

function Home() {
  const [isVisible, setIsVisible] = useState(false);
  
  // Scroll event listener to show/hide the button
  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="mainbody">
      <header className="home-header">
        <div className="home-header-title">
          <div>
            <div className="name">Cheuk Ying Iu (YING)</div>
            <div className="position">Web Developer - Toronto, Ontario</div>
            <div className="small-logo">
              <a href="http://github.com/bingying0me"><img src="/images/github.png" alt="github" /></a>
              <a href="http://linkedin.com/in/cheuk-ying-iu-57770224b"><img src="/images/LinkedIn.png" alt="LinkedIn" /></a>
              <a href="bingying0me@gmail.com"><img src="/images/email.png" alt="email" /></a>
            </div>
          </div>
          <img className="my-photo" src="/images/photo.png" alt="photo" />
        </div>
      </header>
      <div className="container">
        <p className="content">
          Has a Bachelor's Degree in Information and Communication Technology. I have accumulated two years of experience as a web developer at Gorilla Group Limited - The Gulu (Hong Kong), specializing in both front-end and back-end development with a high level of expertise.
        </p>
      </div>
      <section id="skills"><Skills /></section>
      <section id="project"><Project /></section>
      {isVisible && <BackToTopButton />}
    </div>
  );
}

export default Home;
