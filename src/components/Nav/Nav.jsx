import './NavBar.css';
import React from 'react';
import { Link } from 'react-scroll';
import logo from '../../Images/KL1.jpg';
const Nav = () => {
  return (
    <>
      <nav className='navbar'>
       <div className="name">
          KJ.
        </div>
        <div className="desktopMenu">
          <Link activeClass='active' to="intro" spy={true} smooth={true} offset={-100} duration={500} className="destopMenuListItem">Home</Link>
          <Link activeClass='active' spy={true} smooth={true} offset={-75} duration={500} to="skills" className="destopMenuListItem">Services</Link>
          <Link activeClass='active' spy={true} smooth={true} offset={-50} duration={500} to="works" className="destopMenuListItem">Portfolio</Link>
          <Link activeClass='active' spy={true} smooth={true} offset={-35} duration={500} to="contact" className="destopMenuListItem">Contact me</Link>
        </div>
      </nav>
    </>
  );
};

export default Nav;