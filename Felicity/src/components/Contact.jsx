import React from "react";

export default function Contact () {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        {/* Message */}
        <div className="contact-info">
          <h2 className="title">Let’s Collaborate💌</h2>
          <p className="contact-message">
            If you’d like to get in touch with me, or know more info, please reach out via email at{" "}
            <span className="highlight email">felicitymncube19gmail.com</span> or fill in the
            form below, I’ll get back to you as soon as I can. 
          </p>
        </div>

        {/* Contact Form */}
        <div className="contact-form-box">
          <form className="contact-form">
            <h3 className="form-header">Send Me a Message ✨</h3>

            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" placeholder="Enter your name" required />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" required />

            <label htmlFor="message">Message</label>
            <textarea id="message"rows="3"placeholder="Write your message..."required></textarea>

            <button type="submit" className="submit-btn">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
};


