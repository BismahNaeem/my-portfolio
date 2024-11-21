import React from "react";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-text">
        <h1>
         I am <span>Bismah Naeem</span>
         <br/>
          Frontend developer 
        </h1>
        <p>
         Passionate about creating visually stunning user-friendly websites.
         constantly learning and improving to stay ahead in web development.
        </p>
        <button className="hero-btn">Hire me</button>
      </div>
      <div className="hero-image">
        <img
          src="/images/img.png"
          alt="Headphones"
          className="responsive-image"
        />
      </div>
    </div>
  );
};

export default HeroSection;