import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/chatlist.css'
const Chatlist = () => {
  return (
    <div className='chat-container'>
        <div className="chat-list-container">
            <h2>Friends</h2>
            <ul className="user-list">
                <li className="user-item">
                    <div className="user-link">
                        Achyuth
                    </div>
                </li>
            </ul>
        </div>      
    </div>
  )
}

export default Chatlist
