import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "../components/Login.css"
import axios from "axios"
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [input, setInput] = useState({})
    const navegate = useNavigate()
    const token = localStorage.getItem("token");

    const handlelogin = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInput(inputs => ({ ...inputs, [name]: value }));
    }
    const handlesubmit = (e) => {

        e.preventDefault();
        axios.post("https://drouponapinode.ityogistech.com/api/account/login", { email: input.email, password: input.password }).then(res => {
            localStorage.setItem("token", res.data.accessToken);
            localStorage.setItem("user", JSON.stringify( res.data.user))
        })
        navegate("/dashboard")

    }
    useEffect(() => {
        if (token) {
            navegate("/dashboard")
        }
    }, [handlesubmit])
    return (
        <div className="loginCard"><h1>Login Page</h1> <div className='login'>
            <form action="">
                <div className="d-flex flex-column"><input type="email" placeholder='Email' name='email' onChange={handlelogin} required />
                    <input type="password" placeholder='Password' name='password' onChange={handlelogin} required /></div>

                <div className='buttonplace'>
                    <button onClick={handlesubmit}>Sign in</button>
                    <button><Link to={"/register"}>Register</Link ></button></div></form>
        </div>
        </div>

    )
}

export default Login