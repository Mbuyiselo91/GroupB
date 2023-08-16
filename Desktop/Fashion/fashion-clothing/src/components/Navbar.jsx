import React from 'react'
import '../components/Navbar.css'

function Navbar() {
  return (
    <div className='container'>

      <nav className="navbar-links">
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/about">New arrivals</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/men">Mens</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/ladies">Ladies</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/giftcard">Gift Cards</a>
            </li>
          </ul>
        </div>

      </nav>
    </div>
  )
}

export default Navbar