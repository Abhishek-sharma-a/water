import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import "./Contact.css";
import { FaPhone, FaLocationArrow } from 'react-icons/fa';
import { MdAccessTimeFilled, MdLocationOn } from 'react-icons/md'
import Headings from './Headings';

const Contact = () => {

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };



  return (
    <>

      <Headings h="Contact" p="Home > Contact" />





      <div className='contact'>

        <div className='msg'>
          <h1>Send a Message</h1>
          <ul>
            <li> <FaPhone /> <p> Call Us +1 207-876-1059</p></li>
            <li><MdLocationOn />  <p> Upton Avenue, Guilford,<br></br>
              Maine 04443 USA</p></li>

            <li><FaLocationArrow /> <p> E-mail sales@example.com </p></li>
            <li><MdAccessTimeFilled /> <p> Monday-Friday: 9am to 5pm Saturday: <br></br> 10am to 4pm Sunday: Closed  </p></li>
          </ul>

        </div>

        <div className='info'>
          <h1>Contact Information</h1>

          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col} md="4" controlId="validationCustom01">
                <Form.Label>First name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="First name"

                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCustom02">
                <Form.Label>Last name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Last name"

                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>

            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="6" controlId="validationCustom03">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" required />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid email.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="3" controlId="validationCustom04">
                <Form.Label>Phone</Form.Label>
                <Form.Control type="phone" placeholder=" " required />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid number.
                </Form.Control.Feedback>
              </Form.Group>
            </Row>

            <Button type="submit">Submit Now</Button>
          </Form>



        </div>

      </div>
    </>


  )
}

export default Contact


// jgju