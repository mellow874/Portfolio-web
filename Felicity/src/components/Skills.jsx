import React from "react";
import { FaHtml5, FaCss3Alt, FaJs} from "react-icons/fa";

export default function Skills() {
  return (
    <section
      id="skills"
      className="flex justify-center items-center bg-dark-pink text-gray-800 min-h-[700px] py-14 px-4"
    >
      <div className="max-w-[1100px] w-full text-center">
        <h2 className="text-5xl font-bold text-deep-pink mb-4">
          Technical & Soft Skills 💻
        </h2>
        <p className="text-lg mb-12 text-gray-800">
          Below are the skills I've gained through my Software Engineering journey.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white/85 rounded-2xl p-8 shadow-lg transition-all duration-300">
            <h3 className="text-2xl font-bold text-deep-pink mb-4">Languages</h3>
            <ul className="list-none p-0 flex justify-center items-center flex-col">
              <li className="text-base mb-2.5 text-gray-700 transition-colors duration-300 hover:text-deep-pink">
                <FaHtml5 />
              </li>
              <li className="text-base mb-2.5 text-gray-700 transition-colors duration-300 hover:text-deep-pink">
                <FaCss3Alt />
              </li>
              <li className="text-base mb-2.5 text-gray-700 transition-colors duration-300 hover:text-deep-pink">
                <FaJs />
              </li>
            </ul>
          </div>

          <div className="bg-white/85 rounded-2xl p-8 shadow-lg transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_12px_25px_rgba(178,43,111,0.25)]">
            <h3 className="text-2xl font-bold text-deep-pink mb-4">Frameworks & Tools</h3>
            <ul className="list-none p-0">
              <li className="text-base mb-2.5 text-gray-700 transition-colors duration-300 hover:text-deep-pink">
                Bootstrap
              </li>
              <li className="text-base mb-2.5 text-gray-700 transition-colors duration-300 hover:text-deep-pink">
                React (Basic)
              </li>
              <li className="text-base mb-2.5 text-gray-700 transition-colors duration-300 hover:text-deep-pink">
                Version Control (Git & GitHub)
              </li>
              <li className="text-base mb-2.5 text-gray-700 transition-colors duration-300 hover:text-deep-pink">
                VS Code
              </li>
              <li className="text-base mb-2.5 text-gray-700 transition-colors duration-300 hover:text-deep-pink">
                Netlify
              </li>
              <li className="text-base mb-2.5 text-gray-700 transition-colors duration-300 hover:text-deep-pink">
                API Integration
              </li>
            </ul>
          </div>

          <div className="bg-white/85 rounded-2xl p-8 shadow-lg transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_12px_25px_rgba(178,43,111,0.25)]">
            <h3 className="text-2xl font-bold text-deep-pink mb-4">Design & Debugging</h3>
            <ul className="list-none p-0">
              <li className="text-base mb-2.5 text-gray-700 transition-colors duration-300 hover:text-deep-pink">
                Responsive Web Design
              </li>
              <li className="text-base mb-2.5 text-gray-700 transition-colors duration-300 hover:text-deep-pink">
                User Interface Design
              </li>
              <li className="text-base mb-2.5 text-gray-700 transition-colors duration-300 hover:text-deep-pink">
                Debugging & Testing
              </li>
            </ul>
          </div>

          <div className="bg-white/85 rounded-2xl p-8 shadow-lg transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_12px_25px_rgba(178,43,111,0.25)]">
            <h3 className="text-2xl font-bold text-deep-pink mb-4">Soft Skills</h3>
            <ul className="list-none p-0">
              <li className="text-base mb-2.5 text-gray-700 transition-colors duration-300 hover:text-deep-pink">
                Problem-Solving
              </li>
              <li className="text-base mb-2.5 text-gray-700 transition-colors duration-300 hover:text-deep-pink">
                Attention to Detail
              </li>
              <li className="text-base mb-2.5 text-gray-700 transition-colors duration-300 hover:text-deep-pink">
                Planning
              </li>
              <li className="text-base mb-2.5 text-gray-700 transition-colors duration-300 hover:text-deep-pink">
                Communication
              </li>
              <li className="text-base mb-2.5 text-gray-700 transition-colors duration-300 hover:text-deep-pink">
                Research
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
