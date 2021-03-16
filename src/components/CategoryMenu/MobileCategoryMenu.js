import React from 'react'
import { Link } from 'react-router-dom'

export default function MobileCategoryMenu() {
  return (
    <div className='mobile-category-menu-container fade-in'>
      <h3 className='menu-header categories-menu-header'>Categories</h3>
      <ul className='mobile-nav-links mobile-category-menu-list'>
        <li><Link to='/gallery/shirts'>Shirts</Link></li>
        <li><Link to='/gallery/sweatshirts'>Sweatshirts</Link></li>
        <li><Link to='/gallery/jeans'>Jeans</Link></li>
        <li><Link to='/gallery/hats'>Hats</Link></li>
      </ul>
    </div>
  )
}