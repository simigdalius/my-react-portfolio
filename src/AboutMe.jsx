import React from "react";
import "./cssFiles/style.css"; // Θα φτιάξουμε αυτό το αρχείο μετά
import "./cssFiles/AboutMe.css";
import SpotlightCard from './SpotlightCard';

function AboutMe() {
  const skills = ["React", "JavaScript", "CSS", "HTML", "UI Design"];
  const skills2 = ["Unity", "Godot", "blender"];
  const skills3 = ["esp32","platformio"];
  const skills4 = ["php", "sql"];

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
<section className="skills-section">
  <div className="container">
    <h2 className="section-title">My Skills</h2>
    
    <div className="skills-container-grid">
      {/* Group 1: π.χ. Frontend */}
      <SpotlightCard className="card-spotlight" spotlightColor="rgba(0, 229, 255, 0.2)">
        <div className="skill-card-content">
          <h3 className="skill-category-title">Frontend</h3>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <span key={index} className="skill-tag">{skill}</span>
            ))}
          </div>
        </div>
      </SpotlightCard>

      {/* Group 2: π.χ. Backend */}
      <SpotlightCard className="card-spotlight" spotlightColor="rgba(157, 0, 255, 0.2)">
        <div className="skill-card-content">
          <h3 className="skill-category-title">Backend</h3>
          <div className="skills-grid">
            {skills2.map((skill, index) => (
              <span key={index} className="skill-tag">{skill}</span>
            ))}
          </div>
        </div>
      </SpotlightCard>

      {/* Group 3: π.χ. Tools */}
      <SpotlightCard className="card-spotlight" spotlightColor="rgba(0, 255, 157, 0.2)">
        <div className="skill-card-content">
          <h3 className="skill-category-title">Tools & DevOps</h3>
          <div className="skills-grid">
            {skills3.map((skill, index) => (
              <span key={index} className="skill-tag">{skill}</span>
            ))}
          </div>
        </div>
      </SpotlightCard>

      {/* Group 4: π.χ. Design / Soft Skills */}
      <SpotlightCard className="card-spotlight" spotlightColor="rgba(255, 170, 0, 0.2)">
        <div className="skill-card-content">
          <h3 className="skill-category-title">Other Skills</h3>
          <div className="skills-grid">
            {skills4.map((skill, index) => (
              <span key={index} className="skill-tag">{skill}</span>
            ))}
          </div>
        </div>
      </SpotlightCard>
    </div>
  </div>
</section>


          
        </div>

      </div>
    </section>
  );
}

export default AboutMe;