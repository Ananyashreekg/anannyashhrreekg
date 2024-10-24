import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div>
      <h2>Contact Me</h2>
      <h2>Feel free to drop me a message through the form or connect with me on social platforms.!</h2>

      <div>
        <h3>Contact</h3>
        <ul className="contact-details">
          <li>
            <strong color="white">Phone:</strong> <a href="tel:+917795941236">+91 7795941236</a>
          </li>
          <li>
            <strong color="white">Email:</strong> <a href="mailto:ananyashreekg933@gmail.com">ananyashreekg933@gmail.com</a>
          </li>
        </ul>

        <h3>Social Links</h3>
        <ul className="social-links">
          <li>
            <a href="https://www.linkedin.com/in/ananyashree-k-g-72830a241/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i><u>LinkedIn</u>
            </a>
          </li>
          <li>
            <a href="https://github.com/Ananyashreekg" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i> <u>GitHub</u>
            </a>
          </li>
          <li>
            <a href="https://www.hackerrank.com/AnanyashreeKG" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-hackerrank"></i> <u>HackerRank</u>
            </a>
          </li>
          <li>
            <a href="https://leetcode.com/AnanyashreeKG" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-code"></i> <u>LeetCode</u>
            </a>
          </li>
        </ul>
      </div>

      <h3>Send a Message</h3>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" placeholder="Enter your name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" placeholder="Enter your email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" placeholder="Enter your message" required></textarea>
        </div>
        <button type="submit" className="btn-submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;

