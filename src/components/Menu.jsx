import React from 'react'
import { Link } from 'react-router-dom'
// import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';


const Menu = () => {
    let location = useLocation()
    const navegate = useNavigate();
    // const { loginWithRedirect, logout, isAuthenticated } = useAuth0();
    const token = localStorage.getItem("token");
    const [islogin, setIslogin] = useState(false);
    useEffect(() => {
  
        if (location.pathname === '/dashboard') {
            setIslogin(true)
        }
    })

    useEffect(() => {
        if (islogin) {
            setIslogin(true)
        }
    }, []);
    const logoutfun = () => {
        localStorage.clear("token")
        navegate("/")
        setIslogin(false)
    }

    const menu = [
        { title: "HOME", link: "/" },
        { title: "Services", link: "/Services" },
        { title: "SHOP", link: "/shop" },
        { title: "ABOUT", link: "/element" },
        { title: "BLOG", link: "/blog" },
        { title: "CONTACT", link: "/contact" },
    ]

    return (
        <div className="header-r">
            {menu.map((menu, i) =>
                <Link to={menu.link} key={i}>{menu.title}</Link>
            )}
            {/* {!isAuthenticated ? (
                <button className='logbtn header-r  ' onClick={() => loginWithRedirect()}>Log In</button>) : (
                <button className='logbtn' onClick={() => logout({ returnTo: window.location.origin })}>
                    Log Out
                </button>)} */}
            {islogin ? (<button onClick={logoutfun}> log out </button>) : (<Link to={"/login"} >Log In</Link>)}

        </div>
    )
}

export default Menu
