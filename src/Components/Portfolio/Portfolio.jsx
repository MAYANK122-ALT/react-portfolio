import React from 'react'
import './Portfolio.css'
import e_commmerce from '../../assets/images/e-commerce.jpg'
import netflix from '../../assets/images/netflix.png'
import conversa from '../../assets/images/conversa.png'
import college from '../../assets/images/college.png'

const Portfolio = () => {
  return (
    <>
     <div className='portfolio'>
        <div className='photos'>
            <img src={netflix} alt='netflix-image'/>
            <div className='caption'>
              <p>Netflix Clone</p>
            </div>
        </div>
        <div className='photos'>
            <img src={conversa} alt='conversa-image'/>
            <div className='caption'>
              <p>Chat-bot</p>
            </div>
        </div>
        <div className='photos'>
            <img src={college} alt='college-image' className='sizing'/>
            <div className='caption'>
              <p>College Website</p>
            </div>
        </div>
        <div className='photos'>
            <img src={e_commmerce} alt='e-commerce-image'/>
            <div className='caption'>
              <p>E-commerce Website </p>
            </div>
        </div>
      </div> 
  
    </>
  )
}

export default Portfolio
