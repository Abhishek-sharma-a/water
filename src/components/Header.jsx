import React from 'react'
import Menu from './Menu'
import Ph from './Ph'
import { useState, useEffect } from 'react';
import Logo from "./Logo"

import JSONDATA from './MOCK_DATA.json'
import Modal from 'react-bootstrap/Modal';
const Header = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => { setShow(false); setSearch(false) }
  const handleShow = () => setShow(true);

  let [scroll, setScroll] = useState(false);
  const [search, setSearch] = useState(false)
  const [find, setFind] = useState("");


  let x = JSONDATA.filter((ele) => {
    // return ele.first_name === search;
    return find === "" ? null : ele.first_name.toLowerCase().includes(find.toLowerCase())
  })


  const click = () => {

    if (search === false) {
      handleShow();
      setSearch(true)
    }
    else {
      handleClose();
      setSearch(false)
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 84)

    })

  });


  return (
    <>
      <header className={scroll ? "stickey" : "hidestickey"}>
        <div className={"d-flex"}>
          <Logo />
          {scroll ? null : <Ph no="123-456-7890" className="border-end" />}
          <Menu />
          {scroll ? null : <>
            <div className=" x  rounded-circle" onClick={() => { click() }} >
            <h3 className="bi bi-search p-3 mx-auto my-auto "></h3>
            </div>
            <div className=" x rounded-circle" >
              <h3 className="bi bi-cart p-3 mx-auto my-auto"></h3>
            </div>
          </>}
        </div>
      </header>


      <div className='search'>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Search</Modal.Title>
          </Modal.Header>
          <Modal.Body><input type="text" placeholder='search here...' onChange={(event) => { setFind(event.target.value) }} />
            <div>  {x.map((val, key) => {
              return (<div key={key}><p>{val.first_name} {val.last_name}</p></div>)
            })}</div></Modal.Body>

        </Modal></div>
    </>
  )
}

export default Header