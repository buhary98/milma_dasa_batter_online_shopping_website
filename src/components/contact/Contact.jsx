import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import { TbPhone } from "react-icons/tb";
import { IoLocationOutline } from "react-icons/io5";
import { LuMail } from "react-icons/lu";
import SocialMedia from "../social_media/SocialMedia";
import "./Contact.css";

const Contact = () => {
  const [isMapLoaded, setIsMapLoaded] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formError, setFormError] = useState(null);
  const [formSuccess, setFormSuccess] = useState(null);

  useEffect(() => {
    // Set map loaded state to true after 4 seconds
    const timer = setTimeout(() => {
      setIsMapLoaded(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError(null);
    setFormSuccess(null);

    emailjs
      .sendForm(
        "service_87iwmac",
        "template_d66np3l",
        e.target,
        "OCjA3FLwp1URC4qCR"
      )
      .then(
        (result) => {
          console.log(result.text);
          setFormSuccess("Mission Accomplished!");
          setFormData({
            name: "",
            email: "",
            message: "",
          });

          setTimeout(() => {
            setFormSuccess(null);
          }, 4000);
        },
        (error) => {
          console.log(error.text);
          setFormError("Oops! Give it Another Shot.");
          setTimeout(() => {
            setFormError(null);
          }, 4000);
        }
      )
      .catch((error) => {
        console.error("EmailJS Error:", error);
        setFormError("Oops! Give it Another Shot.");
      });
  };

  return (
    <section id="contact">
      <h2 className="contact-heading">Get in touch</h2>
      <div className="map-container-md">
        {isMapLoaded ? (
          <div className="map-container">
            <iframe
              className="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2481.3337619174777!2d0.04750877612984388!3d51.54377860804573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a64c5506f93f%3A0xec2226b78bc406d4!2s346%20High%20St%20N%2C%20London%20E12%206PH%2C%20UK!5e0!3m2!1sen!2sin!4v1719987271116!5m2!1sen!2sin"
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
              title="Google Map"
            ></iframe>
          </div>
        ) : (
          <p className="contact-content">Drawing the Map...</p>
        )}
      </div>
      <div className="contact-row">
        <div className="contact-col-left">
          {isMapLoaded ? (
            <div className="map-container">
              <iframe
                className="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2481.3337619174777!2d0.04750877612984388!3d51.54377860804573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a64c5506f93f%3A0xec2226b78bc406d4!2s346%20High%20St%20N%2C%20London%20E12%206PH%2C%20UK!5e0!3m2!1sen!2sin!4v1719987271116!5m2!1sen!2sin"
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
                title="Google Map"
              ></iframe>
            </div>
          ) : (
            <p className="contact-content">Drawing the Map...</p>
          )}
        </div>
        <div className="contact-col-middle">
          <IoLocationOutline
            className="location-icon"
            aria-label="Location icon"
          />
          <p className="contact-content">
            346, High Street,
            <br />
            Manor Park, London,
            <br />
            E12 6PH, England &#10088;UK&#10089;
          </p>
          <TbPhone className="phone-icon" aria-label="Phone icon" />
          <p className="contact-content">+44-7469849031</p>
          <LuMail className="mail-icon" aria-label="Mail icon" />
          <p className="contact-content">infoatmilma@gmail.com</p>
        </div>
        <div className="contact-col-right">
          <form className="contact-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              aria-label="Name"
              autoComplete="new-name"
            />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              aria-label="Email"
              autoComplete="new-email"
            />
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
              aria-label="Message"
              autoComplete="new-message"
            ></textarea>
            {formError && <p className="form-error">{formError}</p>}
            {formSuccess && <p className="form-success">{formSuccess}</p>}
            <button type="submit" aria-label="Submit form">
              Submit
            </button>
          </form>
        </div>
      </div>
      <hr className="horizontal-line" />
      <div className="contact-bottom">
        <SocialMedia />
        <p className="copyright-text">
          © 2024 Milma Foods UK Ltd. All&nbsp;rights&nbsp;reserved.
        </p>
      </div>
    </section>
  );
};

export default Contact;
