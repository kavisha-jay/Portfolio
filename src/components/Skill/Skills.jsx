import React from 'react';
import './Skills.css';
import UIDesign from '../../Images/one.png';

const Skills = () => {
  return (
    <section id="skills">
       <span className='skillTitle'>
        What I do
       </span>
       <span className="skillDes">
        Skill description to fill
       </span>

       <div className="skillBars">
         <div className="skillBar">
            <img src={UIDesign} alt="" className="skillbarimg" />
            <div className="skillBarText">
                <h2>UI/UX Design</h2>
                <p>You can write your own content here.</p>
            </div>
         </div>

         <div className="skillBar">
            <img src={UIDesign} alt="" className="skillbarimg" />
            <div className="skillBarText">
                <h2>Website design</h2>
                <p>You can write your own content here</p>
            </div>
         </div>

         <div className="skillBar">
            <img src={UIDesign} alt="" className="skillbarimg" />
            <div className="skillBarText">
                <h2></h2>
                <p></p>
            </div>
         </div>
       </div>
    </section>
  );
}

export default Skills;