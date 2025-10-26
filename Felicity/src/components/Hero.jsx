import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";


export default function Hero() {
  return (
    <section id="home" className="hero">
      <h1 className="hero-title">
        Welcome to my digital garden, 
        <h1 className="hero-title">I'm{' '}
        <span style={{ color: '#b22b6f' }}>

          {/* Typewriter Effect */}
          <Typewriter
            words={['Felicity.', 'a Software Engineering Student.']}
            loop={true}
            cursor
            cursorStyle="_"
            typeSpeed={90}
            deleteSpeed={50}
            delaySpeed={1200}
          />
        </span>
        </h1>
      </h1>

      <p className="intro-line">
        planting and growing ideas through code.I build user friendly websites and every line of code is a seed for innovation.
      </p>

      {/* Call-to-Action Buttons */}
      <div className="hero-btns">
        <a className="btn" href="/Felicity Mncube resume new.pdf" download>Download CV</a>
        <a className="btn" href="#projects">View My Work</a>
      </div>
      
      {/* Social Media Icons */}
      <div className="social-icons">
  <a href="https://github.com/mellow874" target="_blank" rel="noopener noreferrer">
    <FaGithub />
  </a>
  <a href="https://linkedin.com/in.felicity-mncube-65b796322" target="_blank" rel="noopener noreferrer">
    <FaLinkedin />
  </a>
  <a href="https://instagram.com/mellow.874/" target="_blank" rel="noopener noreferrer">
    <FaInstagram />
  </a>
</div>
    </section>
  );
}
