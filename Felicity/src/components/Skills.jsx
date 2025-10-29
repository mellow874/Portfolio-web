import React from "react";
import { FaReact, FaCss3Alt, FaHtml5, FaJs } from "react-icons/fa";
import { SiNetlify } from "react-icons/si";
import 'bootstrap-icons/font/bootstrap-icons.css';


export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <h2 className="skills-title">Technical & Soft Skills 💻</h2>
        <p className="skills-info">
          Below are the skills I've gained through my Software Engineering journey. 
        </p>
        <br/>

        <div className="skills-grid">
          {/* Languages */}
          <div className="skills-category">
            <h3 className="category-title">Languages</h3>
            <ul>
              <li><FaHtml5 /></li>
              <li><FaCss3Alt /></li>
              <li><FaJs /></li>
            </ul>
          </div>

          {/* Frameworks & Tools */}
          <div className="skills-category">
            <h3 className="category-title">Frameworks & Tools</h3>
            <ul>
              <li><FaReact /></li>
              <li><SiNetlify /></li>
              <li>Microsoft Excel</li>
              <li>API Integration</li>
              <li>Bootstrap</li>
            </ul>
          </div>

          {/* Design & Debugging */}
          <div className="skills-category">
            <h3 className="category-title">Design & Debugging</h3>
            <ul>
              <li>Responsive Web Design</li>
              <li>User Interface Design</li>
              <li>Debugging & Testing</li>
            </ul>
          </div>

          {/* Soft Skills */}
          <div className="skills-category">
            <h3 className="category-title">Soft Skills</h3>
            <ul>
              <li>Problem-Solving</li>
              <li>Attention to Detail</li>
              <li>Planning</li>
              <li>Communication</li>
              <li>Research</li>
              <li>Agile Methodologies</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}


