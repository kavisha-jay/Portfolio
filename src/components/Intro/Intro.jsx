import React from "react";
import "./intro.css";
import bg from "../../Images/me.png";
import Animation from "../Animation/Animation";
import {Link} from 'react-scroll';

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
              Something about me. Nothing about all.kfijqpowfoejgiewjgb.
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
