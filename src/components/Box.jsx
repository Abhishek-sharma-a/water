import React from 'react'
import PropTypes from 'prop-types'
import { AiOutlineUser } from 'react-icons/ai';
import { FaRegComment } from 'react-icons/fa';
import Butt from "../components/Butt";
import './Box.css';

const Box = props => {
    return (
        <>
            <div className='box5'>
                <div>
                    <AiOutlineUser />&nbsp;admin <ul />&nbsp; &nbsp;&nbsp;Dec 17, 2019 <ul /> &nbsp;&nbsp;&nbsp;<FaRegComment />&nbsp;Comments <br/>
                    <h3>{props.h}</h3> <br/>
                   <p> {props.p}</p>

                 
                </div>
                <div className='btnnn'>
                <Butt btnName="READ MORE"/>
                </div>

            </div>

        </>
    )
}

Box.propTypes = {

}

export default Box
