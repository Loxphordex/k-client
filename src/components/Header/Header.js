import React, { useEffect } from 'react'
import MobileHeader from './MobileHeader'
import { mobileScroll } from './scroll'
import { Link } from 'react-router-dom'
import { ShoppingCartSimple } from 'phosphor-react'
import logo from '../../images/Pear.png'
import './Header.css'
import './MobileHeader.css'
import './scroll.css'
import '../../styles/jelly.css'
import '../Popout/Popout.css'

export default function Header({ cartCount }) {

  useEffect(() => {
    window.onscroll = function() { mobileScroll() }
  }, [])

  function showIcon() {
    if (cartCount && cartCount > 0) {
      return (
        <div className='cart-count fade-in'>{cartCount}</div>
      )
    }
  }

  return (
    <header role='heading' className='main-header'>
      <MobileHeader showIcon={showIcon} />
      <nav role='navigation' className='main-header-nav'>
        <ul className='main-nav-links'>
          <li>
            <h1 className='main-brand-logo'>
              <Link to='/'>
                <img src={logo} className='brand-image' alt='Pearegrine' />
              </Link>
            </h1>
          </li>
          <li>
            <Link to='/gallery/sale'>Sale</Link>
          </li>
          <li>
            <Link to='/gallery/arrivals'>New Arrivals</Link>
          </li>
          <li>
            <Link to='/gallery/all'>Clothing</Link>
          </li>
          <li>
            <Link to='/discover'>Discover</Link>
          </li>
          <li>
            <Link to='/cart'>
              <div className='cart-area' id='cart-area'>
                {showIcon()}
                <ShoppingCartSimple size={30} color='black' />
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
