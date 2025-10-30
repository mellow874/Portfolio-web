import React from 'react';

export default function Navbar() {
  return (
    //Fixed navbar with full widt, shadow and deep pink background
    <nav className="fixed top-0 left-0 w-full bg-deep-pink text-white z-50 shadow-custom">
      {/* Centeres all items */}
      <div className="flex flex-wrap items-center justify-between px-6 py-4 gap-y-4">
        
        {/* Spacinf between the logo and the navlinks */}
        <div className="flex-shrink-0 text-xl font-semibold pr-4">Felicity</div>

        {/* Navlinks stay horizontal, centered, wrap if needed, no scroll */}
        <div className="flex flex-wrap justify-center gap-x-4 md:gap-x-6 flex-grow">
          {/* Each navlink leads to a deifferent section, and they have got hover effects, rounded corners too */}
          <a 
            href="#home"
            className="text-white font-semibold no-underline transition-all duration-300 hover:bg-pink-100 hover:text-deep-pink px-3 py-1.5 rounded-lg"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-white font-semibold no-underline transition-all duration-300 hover:bg-pink-100 hover:text-deep-pink px-3 py-1.5 rounded-lg"
          >
            About
          </a>
          <a
            href="#skills"
            className="text-white font-semibold no-underline transition-all duration-300 hover:bg-pink-100 hover:text-deep-pink px-3 py-1.5 rounded-lg"
          >
            Skills
          </a>
          <a
            href="#projects"
            className="text-white font-semibold no-underline transition-all duration-300 hover:bg-pink-100 hover:text-deep-pink px-3 py-1.5 rounded-lg"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-white font-semibold no-underline transition-all duration-300 hover:bg-pink-100 hover:text-deep-pink px-3 py-1.5 rounded-lg"
          >
            Contact
          </a>
        </div>

        {/* CTA Button: always visible, wraps below if needed */}
        <div className="flex-shrink-0">
          <a 
            href="#contact" 
            className="bg-white text-dark-pink px-4 py-2.5 rounded-full font-semibold no-underline transition-all duration-300 shadow-custom hover-bg-pink-glow"
          >
            Get in touch
          </a>
        </div>
      </div>
    </nav>
  );
}