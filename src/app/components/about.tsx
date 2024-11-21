import React from "react";

const AboutSection = () => {
  return (
    <div className="about-section">
      <div className="about-left">
       
        <h2>ABOUT ME</h2>
        <p>
          Hi, I'm <strong>Bisma Naeem</strong>, a passionate Frontend Developer
          dedicated to creating seamless and visually appealing user experiences.
        </p>
      </div>
      <div className="about-center">
        <img
          src="/images/img.png" 
          className="about-image"
        />
      </div>
      <div className="about-right">
        <h3>WHAT I DO</h3>
        <p>
          I specialize in building responsive and user-friendly websites using
          the latest technologies like Next.js, HTML, and CSS.
        </p>
      </div>
    </div>
  );
};

export default AboutSection;