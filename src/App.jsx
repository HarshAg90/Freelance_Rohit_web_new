import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './pages/about'
import Home from './pages/home'

function App() {
  

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact-us" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
