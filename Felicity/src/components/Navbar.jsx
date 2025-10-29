import React from 'react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-deep-pink text-white z-50 shadow-custom">
      <div className="flex items-center justify-between px-10 py-3.5">
        <div className="text-xl font-semibold">Felicity</div>

        <div className="flex items-center justify-center gap-6">
          <a 
            href="#home"
            className="no-underline text-white font-semibold transition-all duration-300 hover:bg-pink-100 hover:text-deep-pink hover:px-3 hover:py-1.5 hover:rounded-lg"
          >
            Home
          </a>
          <a
            href="#about"
            className="no-underline text-white font-semibold transition-all duration-300 hover:bg-pink-100 hover:text-deep-pink hover:px-3 hover:py-1.5 hover:rounded-lg"
            
          >
            About
          </a>
          <a
            href="#skills"
            className="no-underline text-white font-semibold transition-all duration-300 hover:bg-pink-100 hover:text-deep-pink hover:px-3 hover:py-1.5 hover:rounded-lg"
           
          >
            Skills
          </a>
          <a
            href="#projects"
            className="no-underline text-white font-semibold transition-all duration-300 hover:bg-pink-100 hover:text-deep-pink hover:px-3 hover:py-1.5 hover:rounded-lg"
            
          >
            Projects
          </a>
          <a
            href="#contact"
            className="no-underline text-white font-semibold transition-all duration-300 hover:bg-pink-100 hover:text-deep-pink hover:px-3 hover:py-1.5 hover:rounded-lg"
      
          >
            Contact
          </a>
        </div>

        <a 
          href="#contact" 
          className="bg-white text-dark-pink px-4 py-2.5 rounded-full font-semibold no-underline transition-all duration-300 shadow-custom hover-bg-pink-glow"

 > Get in touch </a>
      </div>
    </nav>
  );
}