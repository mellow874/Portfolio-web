import React from 'react';

export default function Navbar(){
  return (
    <nav className="navbar">
      <div className="signature">Felicity</div>
      <div className="navigation-links">
        <a className="nav-link" href="#home">Home</a>
        <a className="nav-link" href="#about">About</a>
        <a className="nav-link" href="#skills">Skills</a>
        <a className="nav-link" href="#projects">Projects</a>
        <a className="nav-link" href="#contact">Contact</a>
      </div>
      <a className="info-btn" href="#contact">Get in touch</a>
    </nav>
  );
}
