import React, { useState } from "react";
// import {useNavigate} from 'react-router-dom'
import '../styles/login.css'
const Login = ({handleLogout})=>{

    // const navigate= useNavigate();
    const[username,setUsername]=useState('');
    const[password,setPassword]=useState('');
    const handleSubmit=async(e)=>{
        e.preventDefault();
        console.log(username);
        console.log(password);
    };
    return(
        <div className="login-container">
            <form onSubmit={handleSubmit} className="login-form">
                <h2 className="title">Login</h2>
                <div className="form-group">
                    <input type="text" placeholder="username" value={username} 
                    onChange={(e)=>{
                        setUsername(e.target.value)
                    }} required />
                </div>
                <div className="form-group">
                    <input type="password" placeholder="password" value={password}
                    onChange={(e)=>{
                        setPassword(e.target.value)
                    }}required/>
                </div>
                <button type="submit" className="login-button">Login</button>
            </form>
        </div>
    )

}
export default Login



