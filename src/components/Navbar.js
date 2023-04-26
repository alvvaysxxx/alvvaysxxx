import React from 'react'
import { Link } from 'react-router-dom'


export default function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <ul className="navbar-links">
          <Link to = 'services'><li><a href="#">Услуги</a></li></Link>
          <Link to = 'about'><li><a href="#">Обо мне</a></li></Link>
          <Link to = 'contacts'><li><a href="#">Контакты</a></li></Link>
        </ul>
      </nav>
    </div>
  )
}
