import React,{useState} from 'react'
import axios from 'axios'
import '../styles/register.css'

const Register = () => {
    const[username,setUsername]=useState('');
    const[password,setPassword]=useState('');
    const[confirmPassword,setconfirmPassword]=('');

    const handleSubmit=async(e)=>{
        e.preventdefault();
        if(password!==confirmPassword){
            alert("Password not matches");
            return;
        }
        try{
            alert('Registration successfull');
        }
        catch(error){
            alert("Registration failed")
        }
    }
  return (
    <div className='register-container'>
        <form onSubmit={handleSubmit} className="register-form">
            <h2 className="title">Register</h2>
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
                <div className="form-group">
                    <input type="password" placeholder="confirm password" value={confirmPassword}
                    onChange={(e)=>{
                        setconfirmPassword(e.target.value)
                    }}required/>
                </div>
                <button type="submit" className="register-button">Register</button>
        </form>      
    </div>
  )
}

export default Register


