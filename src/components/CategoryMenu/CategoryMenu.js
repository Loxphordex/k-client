import React from 'react'
import { Link } from 'react-router-dom'

export default function CategoryMenu() {
  return (
    <div className='category-menu-container fade-in'>
      <ul className='category-menu-list'>
        <li><Link to='/gallery/shirts' className='clothing-category-link'>Shirts</Link></li>
        <li><Link to='/gallery/sweatshirts' className='clothing-category-link'>Sweatshirts</Link></li>
        <li><Link to='/gallery/jeans' className='clothing-category-link'>Jeans</Link></li>
        <li><Link to='/gallery/hats' className='clothing-category-link'>Hats</Link></li>
      </ul>
    </div>
  )
}