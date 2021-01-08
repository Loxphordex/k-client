import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <ul className="main-nav-links">
      <li>
        <Link to="/sale">Sale</Link>
      </li>
      <li>
        <Link to="/arrivals">New Arrivals</Link>
      </li>
      <li>
        <Link to="/gallery">Clothing</Link>
      </li>
      <li>
        <Link to="discover">Discover</Link>
      </li>
    </ul>
  )
}