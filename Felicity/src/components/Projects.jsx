import React from "react";
import burger from "../assets/Burger-King.jpeg";
import clock from "../assets/Clock.jpeg";
import diamond from "../assets/diamond-tech.jpeg";
import ferris from "../assets/Ferris-wheel.jpeg";
import survey from "../assets/Survey-form.jpeg";
import weather from "../assets/Weather-app.jpeg";

export default function Projects() {
  const projects = [
    {
      title: "Clock",
      description:
        "A fully functional digital clock displaying current time with AM/PM format, with the light and dark mode option.",
      image: clock,
      tech: ["Html", "CSS", "JavaScript"],
      liveLink: "https://comfy-manatee-a782bc.netlify.app/",
      codeLink: "https://github.com/mellow874/Clock",
    },
    {
      title: "Burger King Website",
      description:
        "A fully mobile responsive Burger King website which was redesigned and made more appealing and user-friendly",
      image: burger,
      tech: ["Html", "CSS"],
      liveLink: "https://chipper-gumption-ce400b.netlify.app/",
      codeLink: "https://github.com/mellow874/Burger-King",
    },
    {
      title: "Weather App",
      description:
        "A real-time weather application that provides information for any location using a public weather API.",
      image: weather,
      tech: ["HTML", "CSS", "JavaScript", "API"],
      liveLink: "https://celadon-selkie-c1746a.netlify.app/",
      codeLink: "https://github.com/mellow874/final-weather-app",
    },
    {
      title: "Survey Form",
      description:
        "Built a survey form designed to collect user feedback with various input types and validation.",
      image: survey,
      tech: ["Html", "CSS"],
      liveLink: "https://majestic-lebkuchen-8f68c1.netlify.app/",
      codeLink: "https://github.com/mellow874/Survey-Form-",
    },
    {
      title: "Homepage",
      description:
        "A modern and visually appealing homepage layout for a tech company, showcasing services and portfolio.",
      image: diamond,
      tech: ["Html", "Bootstrap", "CSS"],
      liveLink: "https://gilded-praline-0ad7e4.netlify.app/",
      codeLink: "https://github.com/mellow874/Diamond-Tech",
    },
    {
      title: "Ferris Wheel",
      description:
        "A simple Ferris Wheel webpage layout using HTML and CSS to demonstrate design skills.",
      image: ferris,
      tech: ["HTML", "CSS"],
      liveLink: "https://mellow874.github.io/Ferris-Wheel/",
      codeLink: "https://github.com/mellow874/Ferris-Wheel",
    },
  ];

  return (
    <section id="projects" className="bg-soft-pink py-14 px-8 text-center">
      <h2 className="text-4xl text-dark-pink-2 mb-8 font-bold">My Projects 🚀</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center max-w-[1200px] mx-auto">
        {projects.map((project, index) => (
          <div
            className="bg-card-pink text-deep-pink text-l font-bold rounded-2xl overflow-hidden w-full max-w-[350px] pb-6 transition-all duration-300 hover:-translate-y-2"
            key={index}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-[200px] object-cover text-white"
            />
            <h3 className="text-xl mt-4">{project.title}</h3>
            <p className="text-sm px-4 my-2 text-light-pink">
              {project.description}
            </p>
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="bg-light-pink text-tech-pink px-3 py-1.5 rounded-full text-xs font-bold"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex justify-center gap-3">
              <a
                href={project.liveLink}
                className="bg-white text-tech-pink font-semibold px-5 py-2.5 rounded-full no-underline transition-all duration-300 hover-bg-pink-glow"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
              <a
                href={project.codeLink}
                className="bg-white text-tech-pink font-semibold px-5 py-2.5 rounded-full no-underline transition-all duration-300 hover-bg-pink-glow"
                target="_blank"
                rel="noopener noreferrer"
              >
                Source Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
