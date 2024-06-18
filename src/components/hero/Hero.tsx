import React from 'react';
import hero from '../../assets/trading.jpeg';
import { Link } from 'react-router-dom';

interface Props {}

const Hero = (props: Props) => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-container">
        <div className="hero-text-container">
          <h1 className="hero-title">
            Financial data with no news.
          </h1>
          <p className="hero-subtitle">
            Search relevant financial documents without fear mongering and fake news.
          </p>
          <div className="hero-button-container">
            <Link to="/search" className="hero-button">
              Get Started
            </Link>
          </div>
        </div>
        <div className="hero-image-container">
          <img src={hero} alt="Trading" className="hero-image"/>
        </div>
      </div>
    </section>
  );
};

export default Hero;
