import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Projects from './components/Projects';
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import './index.css';

export default function App(){
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      
      <footer className="bg-deep-pink text-white text-center py-6">
        <p>© 2025 Felicity Mncube. All rights reserved.</p>
        <div className="flex justify-center gap-5 mt-6">
                <a
                  href="https://github.com/mellow874"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white bg-deep-pink text-2xl p-2.5 rounded-full transition-all duration-300 ease-in-out hover:bg-hover-pink hover:text-accent-pink hover:shadow-[0_0_10px_#ffb6c1]"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://linkedin.com/in.felicity-mncube-65b796322"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white bg-deep-pink text-2xl p-2.5 rounded-full transition-all duration-300 ease-in-out hover:bg-hover-pink hover:text-accent-pink hover:shadow-[0_0_10px_#ffb6c1]"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://instagram.com/mellow.874/"
                  target="_blank"
                  rel="noopener noreferrer"
                   className="text-white bg-deep-pink text-2xl p-2.5 rounded-full transition-all duration-300 ease-in-out hover:bg-hover-pink hover:text-accent-pink hover:shadow-[0_0_10px_#ffb6c1]"
                >
                  <FaInstagram />
                </a>
              </div>

      </footer>
    </div>
  );
}