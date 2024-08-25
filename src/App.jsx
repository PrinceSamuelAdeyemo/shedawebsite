import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, useParams } from "react-router-dom"

// Componenets
import Navbar from './components/Navbar'
import Footer from './components/Footer'

// Pages
import Homepage from './pages/HomePage'
import AboutUS from './pages/AboutUs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Navbar />
      
      <Routes>
        <Route exact path='/' element={<Homepage />} />
        <Route path='/homepage' element={<Homepage />} />
        <Route path='/aboutus' element={<AboutUS />} />
      </Routes>

      <Footer />
    </Router>
  )
}

export default App
