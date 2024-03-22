import './NavBar.css';
import React from 'react';
import { Link } from 'react-scroll';
import { useState } from 'react';
import menu from '../../Images/rmenu.svg';

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);
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

        <img src={menu} alt="Menu" className='mobMenu' onClick={() => setShowMenu(!showMenu)}/>
        <div className="navMenu" style={{display: showMenu? 'flex':'none'}}>
          <Link activeClass='active' to="intro" spy={true} smooth={true} offset={-100} duration={500} className="ListItem" onClick={() => setShowMenu(false)}>Home</Link>
          <Link activeClass='active' spy={true} smooth={true} offset={-75} duration={500} to="skills" className="ListItem" onClick={() => setShowMenu(false)}>Services</Link>
          <Link activeClass='active' spy={true} smooth={true} offset={-50} duration={500} to="works" className="ListItem" onClick={() => setShowMenu(false)}>Portfolio</Link>
          <Link activeClass='active' spy={true} smooth={true} offset={-35} duration={500} to="contact" className="ListItem" onClick={() => setShowMenu(false)}>Contact me</Link>
        </div>
      </nav>
    </>
  );
};

export default Nav;