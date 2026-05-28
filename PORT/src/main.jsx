import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import Home from './routes/Home'
import About from './routes/About'
import Gallery from './routes/Gallery'
import Errorpage from './routes/Errorpage'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="*" element={<Errorpage />} />
      </Routes>
    </Router>
  </StrictMode>,
)
