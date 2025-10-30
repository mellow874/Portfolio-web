import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Hero() {
  return (
    //Hero section which is centered, custom background, plus padding 
    <section
      id="home"
      className="flex flex-col items-center justify-center text-center pt-36 pb-24 px-5 bg-dark-pink text-gray-800 min-h-[700px]"
    >
      <h1 className="text-4xl font-bold mb-2.5 text-deep-pink">
        Welcome to my digital garden,
      </h1>
      <h1 className="text-4xl font-bold mb-2.5 text-deep-pink">
        I'm{' '}
        {/*Use of typewriter effect for animated intro*/}
        <span className="text-deep-pink">
          <Typewriter
            words={['Felicity.', 'a Software Engineering Student.']} //array of words that keep rotating
            loop={true} //keeps looping htrough the words 
            cursor // blinking cursor
            cursorStyle="_" //cursor style
            typeSpeed={90} //typing speed 
            deleteSpeed={50} //deleting speed
            delaySpeed={1200} //delay speed before the next word
          />
        </span>
      </h1>
      {/*Short introduction paragraph*/}
      <p className="text-lg text-gray-700 mb-7 max-w-xl">
        planting and growing ideas through code. I build user friendly websites and every line of code is a seed for innovation.
      </p>

      <div className="flex gap-3.5 justify-center mb-6">
        {/*Download cv button with rounded corners plus custom hover effects and box-shadow*/}
        <a
          className="bg-white text-dark-pink px-4 py-2.5 rounded-full font-semibold no-underline transition-all duration-300 shadow-custom hover-bg-pink-glow"
          href="/Felicity Mncube resume new.pdf"
          download
        >
          Download CV
        </a>
        {/*View my work button with a link to the projects section, plus rounded corners, custom hover effects and box-shadow*/}
        <a
          className="bg-white text-dark-pink px-4 py-2.5 rounded-full font-semibold no-underline transition-all duration-300 shadow-custom hover-bg-pink-glow"
          href="#projects"
        >
          View My Work
        </a>
      </div>

    </section>
  );
}
