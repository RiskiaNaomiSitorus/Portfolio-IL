import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="contact">
            <h2>Contact</h2>
            <p>Thank you for visiting my portfolio. I am excited to connect and start a new journey full of creativity and innovation together.</p>
            
            <div className="contact-container">
                {/* Contact Information Section */}
                <div className="contact-info">
                    <div className="info-item">
                        <h3>Location:</h3>
                        <p>Jl. Parsoburan Desa Sitorus Godang, Kecamatan Silaen, Indonesia</p>
                    </div>
                    <div className="info-item">
                        <h3>Email:</h3>
                        <p>riskianaomi17@gmail.com</p>
                    </div>
                    <div className="info-item">
                        <h3>Call:</h3>
                        <p>+62 82369587850</p>
                    </div>
                    
                    {/* Embedded Google Map */}
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12580.834032636278!2d99.0793833162969!3d2.48679980985782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30322439193d8053%3A0x84816b8d45c05e02!2sInstitut%20Teknologi%20Del!5e0!3m2!1sen!2sid!4v1606794998480!5m2!1sen!2sid" 
                        width="100%" 
                        height="250" 
                        frameBorder="0" 
                        style={{ border: 0 }} 
                        allowFullScreen="" 
                        aria-hidden="false" 
                        tabIndex="0"
                        title="Google Map Location"
                    ></iframe>
                </div>
                
                {/* Contact Form Section */}
                <div className="contact-form">
                    <form>
                        <input type="text" name="name" placeholder="Your Name" required />
                        <input type="email" name="email" placeholder="Your Email" required />
                        <input type="text" name="subject" placeholder="Subject" required />
                        <textarea name="message" placeholder="Message" required></textarea>
                        <button type="submit">Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;
