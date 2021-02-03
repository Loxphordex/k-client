import React from 'react'
import textLogo from '../../images/PearegrineTextBlack.png'
import { Link } from 'react-router-dom'

export default function Popout({ popoutVisible, enableMenu }) {
  return (
    <div className={`popout-container ${popoutVisible ? 'popout-visible' : 'popout-hidden'}`}>
      <nav role='navigation' className='popout-nav'>
        <h3 className='menu-header'>Menu</h3>
        <ul className='mobile-nav-links'>
          <li onClick={() => enableMenu(false)}>
            <Link to='/gallery/sale'>Sale</Link>
          </li>
          <li onClick={() => enableMenu(false)}>
            <Link to='/gallery/arrivals'>New Arrivals</Link>
          </li>
          <li>
            <Link to='/gallery/all'>Clothing</Link>
          </li>
          <li onClick={() => enableMenu(false)}>
            <Link to='/discover'>Discover</Link>
          </li>
        </ul>
      </nav>
      <div className='popout-details'>
        
      </div>
    </div>
  )
}