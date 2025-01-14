import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Mainpage from './pages/Mainpage/mainpage'
import Login from './pages/Login/login'
import Sportpage from './pages/Sportpage/sport'
import Register from './pages/Register/register'

function App() {
  
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Mainpage/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/sport' element={<Sportpage/>}/>
      <Route path='/register' element={<Register/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
