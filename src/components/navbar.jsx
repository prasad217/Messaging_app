import React from "react";
import {Link} from 'react-router-dom';
import '../styles/Navbar.css'

const Navbar = ({handleLogout}) => {
return (
 <nav className = 'navbar'>
    <div className= 'navbar-container'>
        <div className="navbar-brand">
            <Link to='/' className="navbar-logo">Chat App</Link>
        </div>
        <ul className="navbar-nav">
            <li className="navbar-item">
                <Link to='/register' className="navbar-link">Register</Link>
            </li>
            <li className="navbar-item">
                <Link to='/login' className="navbar-link">Login</Link>
            </li>
            <li className="navbar-item">
               <button className="nav-link" onClick={handleLogout}>Logout</button>
            </li>
        </ul>
    </div>
    
 </nav> 

)
}

export default Navbar;