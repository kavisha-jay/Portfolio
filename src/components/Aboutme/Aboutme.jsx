import React from 'react';
import img from '../../Images/me.jpg';
import './About.css';

function Aboutme() {
  return (
    <section className='about' id='aboutme'>
      <img src={img} alt="Personal" className='about-img'/>
      <div className='about-text'>
        <h2>About Me</h2>
        <p>
          I'm a passionate software engineering student with a keen interest in web and app development. I thrive on solving complex problems and continuously learning new technologies to improve my skills. When I'm not coding, you'll find me exploring the latest tech trends or contributing to open-source projects. Let's build something amazing together!
        </p>
      </div>
    </section>
  );
}

export default Aboutme;
