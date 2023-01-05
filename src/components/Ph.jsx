import React from 'react'


const Ph = (props) => {
  return (
    <div className='flex ms-5'>
      <h3 className="bi bi-telephone text-danger border-end pe-2  border-3  "></h3><div><div className='ms-3'><span>Get Free Delivery</span><span className=' num'>{props.no}</span></div></div>

    </div>
  )
}

export default Ph