import React, {useRef} from "react";
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_lazynmb',
      'template_9xee417',
      form.current,
      'z_MqbLygXovlbjnge'
    )
    .then(() => {
      alert('Message sent successfully!');
      form.reset();
    })
    ((error) => {
      alert('Failed to send message. Please try again.');
    });
  };

  return (
    <section
      id="contact"
      className="flex items-center justify-center min-h-[700px] bg-dark-pink py-10 px-4 text-white"
    >
      <div className="flex flex-wrap justify-between items-start w-full max-w-[1100px] gap-8">
        <div className="flex-1 min-w-[300px]">
          <h2 className="text-5xl mb-4 font-bold text-white">
            Let's Collaborate💌
          </h2>
          <p className="text-lg leading-relaxed max-w-[500px]">
            If you'd like to get in touch with me, or know more info, please reach out via email at{" "}
            <span className="underline cursor-pointer text-dark-pink-2 font-bold hover:text-light-pink">
              felicitymncube19gmail.com
            </span>{" "}
            or fill in the form below, I'll get back to you as soon as I can.
          </p>
        </div>

        <div className="flex-1 min-w-[320px] flex justify-center">
          <form ref={form}
            id="contact-form"
            onSubmit={sendEmail}
            className="bg-white/15 p-8 rounded-2xl shadow-custom w-full max-w-[400px] text-white"
          >
            <h3 className="text-2xl text-center mb-6">Send Me a Message ✨</h3>

            <label className="block font-bold mb-2" htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              required
              className="w-full p-3 border-none rounded-lg bg-deep-pink text-white text-base mb-5 transition-all duration-300 placeholder:text-light-pink focus:outline-none"
            />

            <label className="block font-bold mb-2" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
              className="w-full p-3 border-none rounded-lg bg-deep-pink text-white text-base mb-5 transition-all duration-300 placeholder:text-light-pink"
            />

            <label className="block font-bold mb-2" htmlFor="email">Subject</label>
            <input
              type="subject"
              name="subject"
              placeholder="Your subject"
              required
              className="w-full p-3 border-none rounded-lg bg-deep-pink text-white text-base mb-5 transition-all duration-300 placeholder:text-light-pink"
            />

            <label className="block font-bold mb-2" htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="3"
              placeholder="Write your message..."
              required
              className="w-full p-3 border-none rounded-lg bg-deep-pink text-white text-base mb-5 transition-all duration-300 placeholder:text-light-pink"
            ></textarea>

            <button
              type="submit"
              className="w-full p-3.5 text-base font-bold bg-white text-deep-pink rounded-full border-none cursor-pointer transition-all duration-300 shadow-custom hover:bg-pink-50 hover:shadow-white-glow"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}