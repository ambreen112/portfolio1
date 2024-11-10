import Navbar from "../components/Navbar";
import React from "react";

export default function Skills() {
    return (
      <>
        <Navbar />
        
        <h1 className="skills-title">My Skills</h1>
  
        <div className="skills-container">
          {/* Skill Item: HTML */}
          <div className="skill-html">
            <div className="skill-header">
              <span className="skill-title">HTML</span>
              <span className="skill-percentage">80%</span>
            </div>
            {/* Skill Progress Bar */}
            <div className="skill-progress-bar">
              <div className="progress"></div>
            </div>
          </div>
  
          {/* Skill Item: CSS */}
          <div className="skill-css">
            <div className="skill-header">
              <span className="skill-title">CSS</span>
              <span className="skill-percentage">60%</span>
            </div>
            {/* Skill Progress Bar */}
            <div className="skill-progress-bar">
              <div className="progress"></div>
            </div>
          </div>
  
          {/* Skill Item: JavaScript */}
          <div className="skill-javascript">
            <div className=" skill-header">
              <span className="skill-title">JavaScript</span>
              <span className="skill-percentage">40%</span>
            </div>
            {/* Skill Progress Bar */}
            <div className="skill-progress-bar">
              <div className="progress"></div>
            </div>
            <div className="skill-tailwind">
            <div className="skill-header">
              <span className="skill-title">Tailwind css </span>
              <span className="skill-percentage">70%</span>
            </div>
            {/* Skill Progress Bar */}
            <div className="skill-progress-bar">
              <div className="progress"></div>
            </div>
          </div>
        </div>
      </div>
     
      </>
    );
  }
  