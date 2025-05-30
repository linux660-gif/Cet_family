import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';


const ContactSection = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-info">
          <h2>Visit Us</h2>
          
          <div className="info-card">
            <FaMapMarkerAlt className="info-icon" />
            <div>
              <h4>Location</h4>
              <p>123 Faith Avenue<br />Nairobi, Kenya</p>
            </div>
          </div>
          
          <div className="info-card">
            <FaPhone className="info-icon" />
            <div>
              <h4>Phone</h4>
              <p>+254 700 123 456</p>
            </div>
          </div>
          
          <div className="info-card">
            <FaEnvelope className="info-icon" />
            <div>
              <h4>Email</h4>
              <p>info@cetfamily.org</p>
            </div>
          </div>
          
          <div className="info-card">
            <FaClock className="info-icon" />
            <div>
              <h4>Service Times</h4>
              <p>Sunday: 9:00 AM & 11:00 AM<br />
              Wednesday Bible Study: 7:00 PM</p>
            </div>
          </div>
        </div>
        
        <div className="contact-form">
          <h2>Send Us a Message</h2>
          <form>
            <div className="form-group">
              <input type="text" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <input type="tel" placeholder="Phone Number" />
            </div>
            <div className="form-group">
              <textarea placeholder="Your Message" rows="5" required></textarea>
            </div>
            <button type="submit" className="submit-button">Send Message</button>
          </form>
        </div>
      </div>
      
      <div className="map-container">
        <iframe 
          title="Church Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.808559559107!2d36.82121431475393!3d-1.2923858359809253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d664b39e4f%3A0x4d4f9b2d4c1d4c1d!2sFaith%20Avenue%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1620000000000!5m2!1sen!2ske"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
};

export default ContactSection;