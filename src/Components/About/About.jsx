import React from 'react'
import './About.css'
import About_img from '../../assets/images/person.jpg'
import webdev_icon from '../../assets/images/web-programming.png'
import uiux_icon from '../../assets/images/web-design.png'
import responsive_icon from '../../assets/images/responsive-design.png'
import graphic_icon from '../../assets/images/illustration.png'
import inclusive_icon from '../../assets/images/geometric-shape.png'
import testing_icon from '../../assets/images/testing_4296532.png'

 
const About = () => {
  return (
    <>
        <div className='about'>
        <div className='about-left'>
                    <img src={About_img} alt='about-image' className='about-img' />
                </div>

                <div className='about-right'>
                    <p>I am a skilled and passionate web developer with experience in creating visually appealing and user-friendly websites. I have a strong understanding of design and a keen eye for detail. I am proficient in HTML, CSS and JavaScript, as well as design software such as Figma and Canva. </p>
                    <br></br>
                    <p>I am driven by a strong desire to innovate and constantly evolve as a developer, embracing new technologies. I look forward to collabrating on exciting projects where I can apply my expertise to make a meaningful impact.</p>
                    <br></br>

                    <div className='skill-list'>
                        <ul>
                            <li><img src={webdev_icon} alt='webdev icon'/>Web Development</li>
                            <li><img src={uiux_icon} alt='ui/ux icon'/>UI/UX Design</li>
                            <li><img src={responsive_icon} alt='responsive icon'/>Mobile User Interfaces</li>
                            <li><img src={graphic_icon} alt='graphic design icon'/>Graphic Design</li>
                            <li><img src={inclusive_icon} alt='inclusive icon'/>Inclusive Designs</li>
                            <li><img src={testing_icon} alt='testing icon'/>Focus Group Testing</li>
                        </ul>
                    </div> 
                </div>
        </div>
      
    </>
  )
}

export default About
