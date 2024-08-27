import React, { useState } from 'react';
import './Contact.css';
import SocialButton from '../SocialMeadia/SocialButton';
import emailjs from '@emailjs/browser';

const Contact = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = 'service_infvg6p';
    const templateId = 'template_c1otpxx';
    const publicKey = 'W8eSx7xSrD1AMNyuK';

    const templateParams = {
      from_name: name,
      from_email: email,      to_name: "Kaveesha",
      message: message,
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('Email sent successfully!', response);
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
  };

  return (
    <div className="contact1">
      <div id="contact">
        <h1 className="contactPageTitle">
          Contact Me
        </h1>
        <span className="contactDesc">Contact description should add.</span>
        <form className="contactForm" >
          <input
            type="text"
            className="fname"
            placeholder='Your Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            className="email"
            placeholder='Your Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            className='msg'
            name="message"
            rows="10"
            cols="30"
            placeholder='Your Message'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          >
          </textarea>
          <button type='submit' value='Send' className="submitBtn"  onSubmit={handleSubmit}>Submit</button>
        </form>
        <div className="links">
          <SocialButton />
        </div>
      </div>
    </div>
  );
};

export default Contact;
