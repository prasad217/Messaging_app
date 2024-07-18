import React from 'react'
import './App.css'
import Navbar from './components/navbar'
import {BrowserRouter as Router,Route,Routes,Navigate,useNavigate } from 'react-router-dom'
import Login from './components/login'
import Register from './components/register'
import ChatList from './components/chatlist'
import Chat from './components/chat'

const App=()=> {
  // const [count, setCount] = useState(0)
  const navigate=useNavigate();
  const handleLogout=()=>{
    navigate('/');
  };
  return (
    <>
    <div>
      <Navbar handleLogout={handleLogout}/>    
      {/* <Login handleLogout={handleLogout}/>    */}
    </div>
     <div>
      <Routes>
        <Route path='/' element={<Navbar/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        {/* <Route path='/chat' element={<ChatList/>}/>
        <Route path='/chat/:id' element={<Chat/>}/> */}
      </Routes>
    </div>  
    </>
  )
}

export default App
