import React from "react";


export default function Projects() {
  const projects = [
    {
      title: "Clock",
      description:
        "A fully functional digital clock displaying current time with AM/PM format, with the light and dark mode option.",
      image: "src/assets/clock.jpeg", 
      tech: ["Html", "CSS", "JavaScript"],
      liveLink: "https://comfy-manatee-a782bc.netlify.app/",
      codeLink: "https://github.com/mellow874/Clock",
    },
    {
      title: "Burger King Website",
      description:
        "A fully mobile responsive Burger King website which was redesigned and made more appealing and user-friendly",
      image: "src/assets/burger-king.jpeg",
      tech: ["Html", "CSS"],
      liveLink: "https://chipper-gumption-ce400b.netlify.app/",
      codeLink: "https://github.com/mellow874/Burger-King",
    },
    {
      title: "Weather App",
      description:
        "A real-time weather application that provides information for any location using a public weather API.",
      image: "src/assets/weather-app.jpeg",
      tech: ["HTML", "CSS", "JavaScript", "API"],
      liveLink: "https://celadon-selkie-c1746a.netlify.app/",
      codeLink: "https://github.com/mellow874/final-weather-app",
    },
    {
      title: "Survey Form",
      description:
        "Built a survey form designed to collect user feedback with various input types and validation.",
      image: "src/assets/survey-form.jpeg",
      tech: ["Html", "CSS"],
      liveLink: "https://majestic-lebkuchen-8f68c1.netlify.app/",
      codeLink: "https://github.com/mellow874/Survey-Form-",
    },
    {
      title: "Homepage",
      description:
        "A modern and visually appealing homepage layout for a tech company, showcasing services and portfolio.",
      image: "src/assets/diamond-tech.jpeg",
      tech: ["Html", "Bootstrap", "CSS"],
      liveLink: "https://gilded-praline-0ad7e4.netlify.app/",
      codeLink: "https://github.com/mellow874/Diamond-Tech",
    },
    {
      title: "Ferris Wheel",
      description:
        "A simple Ferris Wheel webpage layout using HTML and CSS to demonstrate design skills.",
      image: "src/assets/ferris-wheel.jpeg",
      tech: ["HTML", "CSS"],
      liveLink: "https://mellow874.github.io/Ferris-Wheel/",
      codeLink: "https://github.com/mellow874/Ferris-Wheel",
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-title">My Projects 🚀</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <h3 className="project-name">{project.title}</h3>
            <p className="project-desc">{project.description}</p>
            <div className="tech-stack">
              {project.tech.map((tech, i) => (
                <span key={i} className="tech-item">
                  {tech}
                </span>
              ))}
            </div>
            <div className="project-buttons">
              <a
                href={project.liveLink}
                className="neon-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
              <a
                href={project.codeLink}
                className="neon-btn"
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
};


