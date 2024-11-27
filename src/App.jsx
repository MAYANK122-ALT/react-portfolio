import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Title from './Components/Title/Title'
import Portfolio from './Components/Portfolio/Portfolio'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <>
      <Navbar/>
      <Home title= 'I am Mayank' designation='(Web Developer & Designer)'/>
      <div className='container'>
      <Title title='About'/>
      <About/>
      <Title title= 'Portfolio'/>
      <Portfolio/>
      <Title title= 'Contact'/>
      <Contact/>
      <Footer/>
      </div>
    </>
  )
}

export default App
