import React from 'react'
import './Navbar.css'
import { Link, ScrollLink } from 'react-scroll';

const Navbar = () => {
  return (
    <>
      <nav>
        <ul>
            <li><Link to='home' smooth={true} offset={0} duration={500}>Home</Link></li>
            <li><Link to='about' smooth={true} offset={-170} duration={500}>About</Link></li>
            <li><Link to='portfolio' smooth={true} offset={-150} duration={500}>Portfolio</Link></li>
            <li><Link to='contact' smooth={true} offset={-150} duration={500}>Contact</Link></li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
