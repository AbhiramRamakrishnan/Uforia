import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import ComingSoon from './pages/ComingSoon'
import Events from "./pages/Events";
import EventDetail from "./pages/EventDetailPage";
import Updates from './pages/Updates';
import GalleryPage from './pages/GalleryPage'
import VideosPage from './pages/VideosPage'


const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/soon' element={<ComingSoon />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/:id" element={<EventDetail />} />
        <Route path="/updates" element={<Updates />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/videos" element={<VideosPage />} />
      </Routes>
    </>
  )
}

export default App
