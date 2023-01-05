import React from 'react'
import Headings from "../components/Headings"
import Box from "../components/Box";
import "./Blog.css";

const Blog = () => {
  return (
    <>
    <div><Headings h="Blog Classic" p="Home > Blog Classic" /></div>

   <div className='flex1'>
   <Box h="Produce Top Level Purified Bottled water" p="Purified water level depends on impurities of the water. We produce 99.99% purity of the water"/>
   <Box h="How Water Usefull For Our Body & Life" p="To regulate temperature and maintain other functions of our body our cells, organs and tissues need water."/>
  
   </div>
   <div className='flex2'>
   <Box h="We are Promised to Deliver Bottled Water in Time" p="Our first priority is no need to bother our customers, we would deliver our product in proper time"/>
   <Box h="Equipped With Five Stage Purification System" p="Aliquaut enim mini veniam quis trud exercitation ullamco Duis aute rue dolor prehendrit sit amet …"/>
   </div>
    </>
  )
}

export default Blog