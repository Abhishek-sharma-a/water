import React from 'react'

const Headings = (props) => {
  return (
     <div className='head'>
    <h1 >{props.h}</h1>
    <p>{props.p}</p>
  </div>
  )
}

export default Headings