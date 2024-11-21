import React from 'react';


const SkillSection = () => {
  return (
    <div className="skill-section">
      <h1>My Skills</h1>
      <p>Here are some of my skills with their proficiency percentage</p>

      {/* Skill: HTML */}
      <div className="skill-card">
        <div className="skill-bar-container">
          <div className="skill-bar" style={{ width: '90%' }}></div>
          <h3>HTML</h3>
          <p>90%</p>
        </div>
        <div className="skill-content">
          <img src="/images/html.png" alt="HTML" />
          
        </div>
      </div>

      {/* Skill: CSS */}
      <div className="skill-card">
        <div className="skill-bar-container">
          <div className="skill-bar" style={{ width: '70%' }}>
          </div>
          <h3>CSS</h3>
          <p>70%</p>
          
        </div>
        <div className="skill-content">
          <img src="/images/css.png" alt="CSS" />
          
        </div>
      </div>

      {/* Skill: JavaScript */}
      <div className="skill-card">
        <div className="skill-bar-container">
          <div className="skill-bar" style={{ width: '60%' }}>
          </div>
          <h3>Javascript</h3>
          <p>50%</p>
          
        </div>
        <div className="skill-content">
          <img src="/images/js.png" alt="JavaScript" />
         
        </div>
      </div>
    </div>
  );
}

export default SkillSection;