import React from 'react';
import './Works.css';
import zero from "../../Images/zero.png";
const Works = () => {
  return (
     <section id="works">
        <h2 className="worksTitle">My Projects</h2>
        <span className="worksDes">Works description.</span>
        <div className="worksImgs">
            <img src={zero} alt="" className="worksImg" />
            <img src={zero} alt="" className="worksImg" />
            <img src={zero} alt="" className="worksImg" />
            <img src={zero} alt="" className="worksImg" />
            <img src={zero} alt="" className="worksImg" />
            <img src={zero} alt="" className="worksImg" />
        </div>
     </section>
  )
}

export default Works