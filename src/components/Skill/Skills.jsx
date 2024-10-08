import React from 'react';
import './Skills.css';
import UIDesign from '../../Images/ui-ux.png';
import Web from '../../Images/9414296.png';
import App from '../../Images/app.png';

const Skills = () => {
  return (
    <section id="skills">
       <span className='skillTitle'>
        What I do
       </span>
       <span className="skillDes">
        Skill description to fill
       </span>

      <div className="contain1">
       <div className="skillBars">
         <div className="skillBar">
            <img src={UIDesign} alt="" className="skillbarimg" />
            <div className="skillBarText">
                <h2>UI/UX Design</h2>
                <p>You can write your own content here.</p>
            </div>
         </div>

         <div className="skillBar">
            <img src={Web} alt="" className="skillbarimg" />
            <div className="skillBarText">
                <h2>Website design</h2>
                <p>You can write your own content here</p>
            </div>
         </div>

         <div className="skillBar">
            <img src={App} alt="" className="skillbarimg" />
            <div className="skillBarText">
                <h2>Website design</h2>
                <p>You can write your own content here</p>
            </div>
         </div>
       </div>
       </div>
    </section>
  );
}

export default Skills;