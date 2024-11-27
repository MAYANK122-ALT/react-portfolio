import React from 'react'
import './Home.css'
import home_img from '../../assets/images/person.jpg'
import arrow from '../../assets/images/icons8-arrow-24.png'
import { Link, ScrollLink } from 'react-scroll';

const Home = ({title, designation}) => {

const imageAlt = "home image"
  return (
    <>
     <div className='home'>
      <div className='home-section'>
        <div className='home-img'>
            <img src={home_img} alt={imageAlt}/>
        </div>    
        <div className='box'>
      <div className='home-text'>
        <h1>{title}</h1>
        <p>{designation}</p>
        <p>I'm a skilled and passionate web developer with experience in creating visually<br></br>appealing and user-friendly websites.</p>
        <div className='btn'><Link to='contact' smooth={true} offset={-150} duration={500}>Hire Me<img src={arrow} alt='arrow-icon'/></Link></div>
      </div>
    </div>
    </div>
    </div> 
    </>
  )
}

export default Home
