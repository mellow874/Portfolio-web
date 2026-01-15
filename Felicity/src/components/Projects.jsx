import React from "react";
//imported the images
import burger from "../assets/Burger-King.jpeg";
import clock from "../assets/Clock.jpeg";
import chart from "../assets/chart.jpeg";
import notes from "../assets/Private-notes-app.jpeg";
import reservation from "../assets/reservation.jpeg";
import weather from "../assets/Weather-app.jpeg";

export default function Projects() {
  //Array of project objects, (title, description, image, technology, livelink, and codelink)
  const projects = [
    {
      title: "Booking-Reservation-System",
      description:
        "A modern and visually appealing booking reservation system for hotels, allowing users to make reservations online, and also check availabilty.",
      image: reservation,
      tech: ["ReactJS", "Tailwindcss", "Nodejs", "Express", "Supabase"],
      liveLink: "https://booking-reservation-system.vercel.app/",
      codeLink: "https://github.com/mellow874/Booking-Reservation-System.git",
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
      title: "Private-Notes-App",
      description:
        "Built a private notes app whereby users create an account, login successfully and create, edit, and delete notes securely.",
      image: notes,
      tech: ["ReactJS", "Tailwindcss", "Nodejs", "Express", "Supabase"],
      liveLink: "https://private-notes-flax.vercel.app/",
      codeLink: "https://github.com/mellow874/Private-Notes.git",
    },
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
      title: "CryptX Dashboard",
      description:
        "Provides a centralized dashboard for monitoring cryptocurrency trends and transactions.",
      image: chart,
      tech: ["ReactJS", "Tailwindcss"],
      liveLink: "https://chart-jp1t.vercel.app/",
      codeLink: "https://github.com/mellow874/Chart.git",
    },
  ];

  return (
    <section id="projects" className="bg-soft-pink py-14 px-8 text-center">
      <h2 className="text-4xl text-dark-pink-2 mb-8 font-bold">My Projects 🚀</h2>
      {/*Grid layout for the project cards, and mobile responsiveness*/}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center max-w-[1200px] mx-auto">
        {projects.map((project, index) => (
          <div
            className="bg-card-pink text-deep-pink text-l font-bold rounded-2xl overflow-hidden w-full max-w-[350px] pb-6 transition-all duration-300 hover:-translate-y-2"
            key={index}
          >
            {/*Project image*/}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-[200px] object-cover text-white"
            />
            {/*Project title*/}
            <h3 className="text-xl mt-4">{project.title}</h3>
            {/*Project description*/}
            <p className="text-sm px-4 my-2 text-light-pink">
              {project.description}
            </p>
            {/*Languages/tech used*/}
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="bg-light-pink text-tech-pink px-3 py-1.5 rounded-full text-xs font-bold"
                >
                  {tech}
                </span>
              ))}
              {/*Link to live demo*/}
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
              {/*Link to source code*/}
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
