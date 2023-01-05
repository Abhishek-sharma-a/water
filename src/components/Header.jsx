import React from 'react'

import Menu from './Menu'
import Ph from './Ph'
import { useState, useEffect } from 'react';
import Logo from "./Logo"

const Header = () => {

  let [scroll, setScroll] = useState(false);


  useEffect(() => {
    console.log(window.scrollY, "r45t5t5")
    window.addEventListener("scroll", () => {

      setScroll(window.scrollY > 84)

    })

  });

  return (
    <>
      <header className={scroll ? "stickey" : "hidestickey"}>
        <Logo />
        <Menu />


      </header>

      <div className={scroll == false ? "stickey d-flex mt-5" : "hidestickey d-flex mt-5"}>
        <Logo />
        <Ph no="123-456-7890" className="border-end" />
        <Menu />
        <div className=" x  rounded-circle"  ><h3 className="bi bi-search p-3 mx-auto my-auto "></h3></div>

        <div className=" x rounded-circle"><h3 className="bi bi-cart p-3 mx-auto my-auto"></h3></div>
      </div>
    </>
  )
}
// hj
export default Header