import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './pages/about'
import Home from './pages/home'
import Contact from './pages/contact';

function App() {
  

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact-us" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
