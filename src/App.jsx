import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Home } from './Pages/Home/Home'
import { IndividualCategory } from './Pages/IndividualCategory/IndividualCategory'
import { VideoPage } from './Pages/VideoPage/VideoPage'
import { WatchLaterPage } from './Pages/WatchLaterPage/WatchLaterPage'

if (import.meta.env.DEV) {
  window.onerror = (event, source, lineno, colno, err) => {
    const ErrorOverlay = customElements.get('vite-error-overlay');
    if (!ErrorOverlay) {
      return;
    }
    const overlay = new ErrorOverlay(err);
    document.body.appendChild(overlay);
  };
}


function App() {
  

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:category" element={<IndividualCategory />} />
        <Route path="/video/:_id" element={<VideoPage />} />
        <Route path="/watchlater" element={<WatchLaterPage />} /> 
      </Routes>
    </>
  )
}

export default App
