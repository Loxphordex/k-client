import React from 'react'
import { Link } from 'react-router-dom'
import './CategoryMenu.css'

export default function CategoryMenu() {
  return (
    <div className='category-menu-container fade-in'>
      <ul className='category-menu-list'>
        <li><Link to='/gallery/shirts'>Shirts</Link></li>
        <li><Link to='/gallery/sweatshirts'>Sweatshirts</Link></li>
        <li><Link to='/gallery/jeans'>Jeans</Link></li>
        <li><Link to='/gallery/hats'>Hats</Link></li>
      </ul>
    </div>
  )
}