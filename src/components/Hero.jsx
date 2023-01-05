import React from 'react'
import "../components/Hero.css"
import bottImg from '../assets/images/double-bottle.png'

const Hero = (props) => {
  return (
    <div className='hero1'> 
      <div className="hero">
    <div><h6>Understand the importance of life</h6></div>
    <div><h1>Pure & Healty<br />Drinking Water</h1></div></div> 
    <img src={props.pho} alt=""  className='pic'/></div>
  )
}

export default Hero