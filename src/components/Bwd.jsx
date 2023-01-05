import React from 'react'

const Bwd = (props) => {
  return (
    <div className='last '>
      <div className='part1'>
        <h1>{props.h}</h1>
      </div>
      <div className='vl'></div>

      <div className='part2'>
        <p>{props.p}</p>
      </div>

    </div>

  )
}

export default Bwd