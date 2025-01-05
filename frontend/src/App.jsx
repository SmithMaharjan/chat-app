import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './pages/login/Login'
import { Route, Routes } from 'react-router-dom'
import Signup from './pages/signup/Signup'
import Home from './pages/home/Home'

function App() {

  return (
    <>
      <div className=' p-4 flex h-screen items-center justify-center'>
        <Routes>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
          <Route path='/' element={<Home />}></Route>

        </Routes>


      </div>



    </>
  )
}

export default App
