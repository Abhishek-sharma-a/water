import React from 'react'
import "./BotwithButt.css"
import Butt from "../components/Butt"
const BotwithButt = (props) => {
  return (
    <div>
<div className='center'>

    <img src={props.im} alt=""  className='pic'/>
    <h6>{props.h}</h6>
     <h3>{props.h3}</h3>
     <p>{props.p}</p>
     <Butt btnName="ADD TO CART"/>
    

</div>
    </div>
  )
}

export default BotwithButt