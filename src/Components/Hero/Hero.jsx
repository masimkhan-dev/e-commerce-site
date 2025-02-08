import React from 'react';
import './Hero.css';
import handIcon from '../Assets/hand_icon.png';
import arrowIcon from '../Assets/arrow.png';
import heroImage from '../Assets/hero_image.png';

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <div className="hero-left">
          <div className="hero-subtitle">
            New Arrivals
            <img src={handIcon} alt="Hand Icon" className="hero-hand-icon" />
          </div>
          <h1 className="hero-title">
            Collection<br />
            For Everyone
          </h1>
          <button className="hero-cta">
            Latest Collection
            <img src={arrowIcon} alt="Arrow" className="hero-cta-icon" />
          </button>
        </div>
        <div className="hero-right">
          <img 
            src={heroImage} 
            alt="Hero Collection" 
            className="hero-image" 
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;