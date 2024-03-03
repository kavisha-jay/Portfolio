import React from 'react';
import './Contact.css';
import SocialButton from '../SocialMeadia/SocialButton';

const Contact = () => {
  return (
    <div className="contact1">
    <div id="contact">
        <h1 className="contactPageTitle">
            Contact Me
        </h1>
        <span className="contactDesc">Contact description should add.</span>
        <form className="contactForm">
               <input type="text" className="fname" placeholder='Your Name'/>
               <input type="email" className="email" placeholder='Your Email'/>
               <textarea className='msg' name="message" rows="5" placeholder='Your Messge'>

               </textarea>
               <button type='submit' value='Send' className="submitBtn">Submit</button>
               
        </form>     
        <div className="links">
                  <SocialButton/>
        </div>
    </div>
    </div>
  )
}

export default Contact;