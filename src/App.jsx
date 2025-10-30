import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import ComingSoon from './pages/ComingSoon'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/soon' element={<ComingSoon />} />
      </Routes>
    </>
  )
}

export default App
