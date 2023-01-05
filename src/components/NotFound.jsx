import React from 'react'
import Headings from './Headings'
import "../components/Vedio.css"
const NotFound = () => {
  return (
   <>
      <Headings h="Error Page" p="Home > 404" />
   
    <div className='not'><h1>404</h1>
    <h2>Oops! That page can't be found</h2>
    <p>Can not find what you need? Take a moment and do a search below or start from our Homepage.</p></div>
   </>
  )
}

export default NotFound