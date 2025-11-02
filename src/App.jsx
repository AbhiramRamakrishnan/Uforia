import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import ComingSoon from './pages/ComingSoon'
import EventsPage from "./pages/EventsPage";
import EventDetailPage from "./pages/EventDetailPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/soon' element={<ComingSoon />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/events/:id" element={<EventDetailPage />} />
      </Routes>
    </>
  )
}

export default App
