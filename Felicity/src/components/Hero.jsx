import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="home-section">
      <div className="intro">
        <h1 className="greeting">Hi, I'm <span className="highlight">Felicity Mncube</span></h1>
        <h2 className="intro-text">
          a Software Development student crafting seamless digital experiences with creativity, precision, and purpose.
        </h2>

        <div className="buttons">
          <a href="/mellowCV.pdf" download className="btn neon">Download CV</a>
          <a href="#contact" className="btn outline">Contact Me</a>
        </div>
        <div className="socials">
            <a href="https://github.com/mellow874" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://www.instagram.com/mellow.874/" target="_blank" rel="noreferrer">Instagram</a>
            <a href="https://www.linkedin.com/in/felicity-mncube-65b796322/" target="_blank" rel="noreferrer">LinkedIn</a>  
        </div>
      </div>
    </section>
  );
};

export default Hero;
