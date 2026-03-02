import React from "react";
import "./style.css"; // Θα φτιάξουμε αυτό το αρχείο μετά
import "./AboutMe.css";
import SpotlightCard from './SpotlightCard';

function AboutMe() {
  const skills = ["React", "JavaScript", "CSS", "HTML", "GitHub", "UI Design"];

  return (
    <section className="about-container">
      <div className="about-content">
        
       

        {/* Δεξιά πλευρά: Κείμενο */}
        <div className="about-text">
          <h2>About Me</h2>
          <hr />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <h3>My Skills</h3>

          <SpotlightCard className="card-spotlight" spotlightColor="rgba(0, 229, 255, 0.2)">
  <div className="skills-grid">
            {skills.map((skill, index) => (
              <span key={index} className="skill-tag">{skill}</span>
            ))}
          </div>
</SpotlightCard >
<br></br>

<SpotlightCard className="card-spotlight" spotlightColor="rgba(0, 229, 255, 0.2)">
  <div className="skills-grid">
            {skills.map((skill, index) => (
              <span key={index} className="skill-tag">{skill}</span>
            ))}
          </div>
</SpotlightCard >
          
        </div>

      </div>
    </section>
  );
}

export default AboutMe;