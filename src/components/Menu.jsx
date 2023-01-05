import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";


const Menu = () => {

    const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

    const menu = [
        { title: "HOME", link: "/" },
        { title: "PAGES", link: "/pages" },
        { title: "SHOP", link: "/shop" },
        { title: "ELEMENT", link: "/element" },
        { title: "BLOG", link: "/blog" },
        { title: "CONTACT", link: "/contact" },

    ]
    return (
        <div className="header-r">
            {menu.map((menu, i) =>
                <Link to={menu.link} key={i}>{menu.title}</Link>


            )}
            {!isAuthenticated ? (
                <button className='logbtn header-r  ' onClick={() => loginWithRedirect()}>Log In</button>) : (
                <button className='logbtn' onClick={() => logout({ returnTo: window.location.origin })}>
                    Log Out
                </button>)}
        </div>
    )
}

export default Menu
