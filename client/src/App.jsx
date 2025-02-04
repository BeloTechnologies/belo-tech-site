import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Privacy from './pages/Privacy'
import Contact from './pages/Contact'
import Report from './pages/Report'
import Terms from './pages/Terms'

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/report" element={<Report />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
