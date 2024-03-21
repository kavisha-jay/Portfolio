import React from "react";
import "./intro.css";
import bg from "../../Images/me.png";
import Animation from "../Animation/Animation";
import {Link} from 'react-scroll';
;

import SocialButton from "../SocialMeadia/SocialButton";

const Intro = () => {
  return (
  <>
   
    <section id="intro">
    
        <div className="introContent">
             <span className="hi">Hi,</span>
             <span className="hello">I'm <span className="fn">Kaveesha</span></span>
             <span className="itroText"><Animation /></span>
             <p className="introPara">
             I'm a passionate software engineering undergraduate with a
             strong foundation 

             </p>
             <p className="introPara">
             in computer science principles, eager to
              translate theory into building innovative<br /> and user-friendly
              applications.
              </p>
             <div className="SocialBTN">
             <SocialButton/>
             </div>
             <button className='desktopMenuBtn'>
                   Download CV
            </button>
        </div>
        
        <img src={bg} alt="profile" className="bg" />
        
    </section>
    
  </>
  )
};

export default Intro;
