import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-brand">
        <Link to="/">Sessions</Link>
      </div>
      <div className="nav-links">
        <Link to="/privacy">Privacy Policy</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/terms">Terms of Service</Link>
      </div>
    </nav>
  )
}

export default Navbar 