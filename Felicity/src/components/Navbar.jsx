import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Felicity</div>
      <ul className="nav-links">
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
      <button className="contact-btn">Get in Touch</button>
    </nav>
  );
};

export default Navbar;