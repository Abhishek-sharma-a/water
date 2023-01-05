import React from 'react'
import Vedio from './Vedio'
import Hero from './Hero'
import im from "../assets/images/double-bottle.png"




const Home = () => {

  return (<>
  
      <div> <Hero pho={im} /></div>

    <div className='bg'></div>
    <Vedio />
  </>
  )
}

export default Home