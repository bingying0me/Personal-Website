// src/components/Project.js
import React from 'react';

const Project = () => {
  return (
    <div className="container">
      <h1 className="container-title">PROJECT</h1>
      <div className="content">
        <div className="content-list-padding project">
          <div className="flex-display">
            <div>
              <img className="project-image" src="/images/ShoPair2.png" alt="ShoPair2" />
            </div>
            <div className="project-image-margin">
              <img className="project-image" src="/images/ShoPair1.png" alt="ShoPair1" />
            </div>
          </div>
          <div className="project-content">
            <h3>Develop a Comprehensive Product Price APP with Admin Website</h3>
            <div>JAN 2019 - MAY 2020</div>
            <br />
            <div>
              <div>APP: React</div>
              <div>Website: HTML, CSS, JavaScript</div>
              <div>Server: Node.js</div>
              <div>Database: MongoDB</div>
            </div>
          </div>
          <div className="project-link">
            <a href="https://github.com/bingying0me/FYP-Web-Server-and-Mobile-App">
              <img className="project-logo" src="/images/github.png" alt="github" /> 
            </a>
          </div>
        </div>
        <div className="content-list-padding project">
          <div>
            <img className="project-image" src="/images/HKPA.png" alt="HKPA" />
          </div>
          <div className="project-content">
            <h3>Develop a website tailored specifically for HKPA</h3>
            <div>JAN 2018 - MAY 2018</div>
            <br />
            <div>
              Website: HTML, CSS and JavaScript
            </div>
          </div>
          <div className="project-link">
            <a href="https://github.com/bingying0me/Website-Tailored-Specifically-for-HKPA">
              <img className="project-logo" src="/images/github.png" alt="github" /> 
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
