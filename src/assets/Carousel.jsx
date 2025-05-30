import React from 'react';


const ChurchHero = () => {
  return (
    <section className="church-hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">Welcome to Central Evangelistic Team Maseno</h1>
          <p className="hero-subtitle">Where Faith, Hope, and Love Come Together</p>
          <div className="hero-cta">
            <button className="cta-button primary">Join Us Every Saturday</button>
            <a href='https://www.facebook.com/MasenoCuCet/live_videos ' target='_BlANK'><button className="cta-button secondary">Watch Online</button></a>
          </div>
        </div>
        <div className="hero-image">
          <img 
            src="/church-hero.JPG" 
            alt="Grace Community Church building" 
            className="hero-img"
            loading="lazy"
          />
        </div>
      </div>
      
      <div className="hero-features">
        <div className="feature-card">
          <div className="feature-icon">⛪</div>
          <h3>Saturday Service</h3>
          <p>5:00 PM - 7:00 PM</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">📖</div>
          <h3>Monday Fellowship</h3>
          <p>6:00 PM - 7:00pm</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">👨‍👩‍👧‍👦</div>
          <h3>Family Ministry</h3>
          <p>Join a Ministry</p>
        </div>
      </div>
    </section>
  );
};

export default ChurchHero;