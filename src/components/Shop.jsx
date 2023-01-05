import React from 'react'
import Headings from '../components/Headings'
import BotwithButt from './BotwithButt'
import './Shop.css'
import { BsFillCartFill } from "react-icons/bs";
import { FaChevronCircleRight } from 'react-icons/fa';
import img1 from "../assets/images/double-bottle.png"
const Shop = () => {
    return (
        <>
            <Headings h="Our Shop" p="Home > Shop" />

            <div className='shopp'>
                <div className='cart'>
                    <h3><BsFillCartFill />&nbsp;cart</h3>
                    <p>No products in the cart.</p>
                    <h3>Product categories</h3>
                    <h4><FaChevronCircleRight />&nbsp;Accessories</h4>
                    <h4><FaChevronCircleRight />&nbsp;Bottle</h4>
                    <h4><FaChevronCircleRight />&nbsp;Clothing</h4>
                    <h4><FaChevronCircleRight />&nbsp;Decor</h4>
                    <h4><FaChevronCircleRight />&nbsp;Hoodies</h4>
                    <h4><FaChevronCircleRight />&nbsp;Music</h4>
                    <h4><FaChevronCircleRight />&nbsp;TShirts</h4>
                    <h4><FaChevronCircleRight />&nbsp;Uncategorized</h4>
                </div>

                {/* yhkuy */}
                {/* tfkuyfl */}


                <div className='botal1'>
                    <BotwithButt im={img1} h="6 X 3L bottles" h3="Naturally Minerels water" p="Naturally Spark Water ensures your health  " /><br />
                    <BotwithButt im={img1} h="6 X 3L bottles" h3="Naturally Minerels water" p="Naturally Spark Water ensures your health " />

                </div>
                <div className='botal2'>
                    <BotwithButt im={img1} h="6 X 3L bottles" h3="Naturally Minerels water" p="Naturally Spark Water ensures your health " /><br />
                    <BotwithButt im={img1} h="6 X 3L bottles" h3="Naturally Minerels water" p="Naturally Spark Water ensures your health " />
                </div>



            </div>




        </>

    )
}

export default Shop