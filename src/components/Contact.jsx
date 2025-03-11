import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import Navbar from "./Navbar";
import contactImage from "../assets/contact image.jpg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_i8g204r",
        "template_yk8fyxz",
        formData,
        "FkhGKTd2x4TADg_5w"
      )
      .then((response) => {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => console.error("Email send error:", error));
  };

  return (
    <>

      <div className="bg-dark p-3" id="contact">


      <div className="contact-container mt-3 bg-light p-2 rounded-3 bg-dark text-light">
        <div>
          <img src={contactImage} alt="" />
        </div>

        <div>
          <h2 className=" text-center">Reach Out!</h2>
          <p className="" style={{fontSize:"10px"}}>
            Have a question or want to work together? Fill out the form with
            your name, email, and message, and I’ll get back to you as soon as
            possible. Looking forward to hearing from you!
          </p>
          <form onSubmit={handleSubmit}>
            <div className="mb-1 w-100">
              <label className="form-label">Name</label>
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-1">
              <label className="form-label">Email</label>
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-1">
              <label className="form-label">Message</label>
              <textarea
                name="message"
                className="form-control"
                placeholder="Your Message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-light w-100">
              Send Message
            </button>
          </form>
        </div>
      </div>

      </div>
    </>
  );
};

export default Contact;
