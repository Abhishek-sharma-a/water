import React, { useState, useEffect } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'


const Register = () => {


    const navegate = useNavigate()
    const token = localStorage.getItem("token")
    useEffect(() => {
        if (token) {
            navegate("/dashboard")
        }

    }, [])

    const initial = {
        "role": "Provider",
        "provider_types": "7",
        "email": "",
        "password": "",
        "firstName": "",
        "lastName": "",
        "created_by": "USER"
    }

    const [value, setValue] = useState(initial);
    const handleInput = (event) => {

        const name = event.target.name;
        const value = event.target.value;
        setValue(values => ({ ...values, [name]: value }))

    }
    const [submit, setSubmit] = useState(false)

    const handlesubmit = (event) => {

        event.preventDefault();
        setSubmit(true);
        createPost();
    }
    const [post, setPost] = useState(null);
    const baseURL = "https://drouponapinode.ityogistech.com/api/account/register";
    function createPost() {
        axios.post(baseURL, value).then((res) => {
            localStorage.setItem("token", res.data.accessToken);
            localStorage.setItem("user", JSON.stringify(res.data.user))
            navegate("/dashboard")
            setPost();
        });
    }

    const handlereset = (e) => {
        e.preventDefault();
        setValue(initial)

    }

    return (
        <div className='register'> <div className="loginCard"><h1>Register Page</h1> <div className='login'>

            <div className='registratoin'>
                <input name="firstName" value={value?.firstName} placeholder='Firstname' onChange={handleInput} required />
                <input name="lastName" value={value?.lastName} type="text" placeholder='Lastname' onChange={handleInput} required />
                <input name="email" type="email" value={value?.email} placeholder='Email' onChange={handleInput} required />
                <input name="password" type="password" value={value?.password} placeholder='Password' onChange={handleInput} required />

            </div>

            <div className='buttonplace regbutton'>

                <button onClick={handlesubmit} >submit</button>
                <button onClick={handlereset}>reset</button></div>
        </div>
        </div></div>
    )
}

export default Register;