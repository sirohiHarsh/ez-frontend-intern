import React from 'react';
// Import BOTH images
import heroMandala from '../assets/hero-mandala.png';
import heroLogo from '../assets/hero-logo.png'; 
import './hero.css'; // Make sure Hero.css is imported

function Hero() {
  return (
    <section className="hero-container">
      {/* Navbar (Stays the same) */}
      <div className="navbar">
        <div className="nav-logo"><img src="http://localhost:5173/src/assets/hero-logo.png" alt="V Flims"/></div>
        <div className="nav-menu-icon">=</div>
      </div>

      {/* Main Hero Content - Two columns */}
      <div className="hero-main-content-columns">
        
        {/* Left Column: This is now a container for stacking */}
        <div className="hero-left-column-stack">
          {/* Image 1: Background Mandala */}
          <img src={heroMandala} alt="Mandala Background" className="hero-mandala-bg" />
          
          {/* Image 2: Foreground "V Films" Logo */}
          <img src={heroLogo} alt="V Films Logo" className="hero-logo-fg" />
        </div>

        {/* Right Column: (Stays the same) */}
        <div className="hero-right-column">
          <h2 className="hero-heading-right">Varnan is where stories find their voice and form</h2>
          <div className="hero-tags-right">Films . Brands . Art</div>
          <p className="hero-body-right">
            Since 2009, I’ve been telling stories - stories of people, their journeys, and the places that shape them.
            Some begin in polished boardrooms, others in humble village squares. But every story starts the same way - by capturing a vision. It is my passion to capture what truly matters.
            V does it, just tell stories - V honors them.
          </p>
        </div>
      </div>
    </section>
  );
}
export default Hero;