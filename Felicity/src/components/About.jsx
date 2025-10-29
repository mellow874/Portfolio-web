import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="flex items-center justify-center min-h-[700px] bg-soft-pink py-10 px-4"
    >
      <div className="max-w-3xl bg-white p-12 rounded-3xl shadow-custom">
        <h2 className="text-5xl text-center mb-8 text-dark-pink-2 font-bold">
          About Me 💫
        </h2>

        <p className="leading-relaxed text-lg mb-6 text-gray-700">
          My name is <span className="text-dark-pink-2 font-semibold">Felicity Mncube</span>, and I'm currently
          a student at Melsoft Academy pursuing a qualification in Software Engineering. I have a
          deep passion for technology and innovation, and through code I'm able to create meaningful
          experiences, solving real world problems, and making a positive impact to the world. I'm really looking 
          forward to being a Full-stack developer one day.
        </p>

        <p className="leading-relaxed text-lg mb-6 text-gray-700">
          I completed my matric in 2023, and the following year, I decided to
          explore the world of programming. I started by learning the basics of web development,
          and just building simple projects, and since then I've been growing from there.
        </p>
      </div>
    </section>
  );
}
