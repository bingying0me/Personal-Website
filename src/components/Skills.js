// src/components/Skills.js
import React from 'react';

const Skills = () => {
  return (
    <div className="container">
      <h1 className="container-title">SKILLS</h1>
      <div className="content skill">
        <div className="skill-table">
          <h3>Front-end Side</h3>
          <img className="skill-logo" src="/images/html.png" alt="html" /><div>HTML5</div>
          <img className="skill-logo" src="/images/css.png" alt="css" /><div>CSS3</div>
          <img className="skill-logo" src="/images/JavaScript.png" alt="JavaScript" /><div>JavaScript</div>
          <img className="skill-logo" src="/images/React.png" alt="React" /><div>React</div>
        </div>
        <div className="skill-table">
          <h3>Server-side Languages</h3>
          <img className="skill-logo" src="/images/JAVA.png" alt="JAVA" /><div>JAVA</div>
          <img className="skill-logo" src="/images/PHP.png" alt="PHP" /><div>PHP</div>
          <img className="skill-logo" src="/images/Node.png" alt="Node" /><div>Node.js</div>
        </div>
        <div className="skill-table">
          <h3>Database Management Systems</h3>
          <img className="skill-logo" src="/images/MySQL.png" alt="MySQL" /><div>MySQL</div>
          <img className="skill-logo" src="/images/MongoDB.png" alt="MongoDB" /><div>MongoDB</div>
          <img className="skill-logo" src="/images/RESTfulAPI.png" alt="RESTfulAPI" /><div>RESTful API</div>
        </div>
        <div className="skill-table">
          <h3>Version Control Systems</h3>
          <img className="skill-logo" src="/images/Git.png" alt="Git" /><div>Git</div>
          <img className="skill-logo" src="/images/VSCode.png" alt="VSCode" /><div>VS Code</div>
          <img className="skill-logo" src="/images/Postman.png" alt="Postman" /><div>Postman</div>
          <img className="skill-logo" src="/images/SpringFramework.png" alt="SpringFramework" /><div>Spring Framework</div>
        </div>
      </div>
      
    </div>
  );
};

export default Skills;
