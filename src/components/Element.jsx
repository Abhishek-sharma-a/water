import React from 'react'
import Headings from '../components/Headings'
import Card from '../components/Card';
import png1 from '../assets/images/drop.png'
import png2 from '../assets/images/water.png'
import png3 from '../assets/images/humidity.png'
import png4 from '../assets/images/water-barrel.png'


const Element = () => {
  return (
  <>
  <Headings h="feature Layout" p="Home > Feature Layout" />
  <div>
  <div className='cardf'> <Card i={png1} h="Chloride Free" />
                <Card i={png2} h="Quality Certified" /> <Card i={png3} h="Maximum Purity" /> <Card i={png4} h="5 Step Filtration" /></div>
          

  </div>
  </>
  )
}

export default Element