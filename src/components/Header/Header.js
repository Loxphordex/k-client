import React, { useEffect } from 'react'
import MobileHeader from './MobileHeader'
import CategoryMenu from '../CategoryMenu/CategoryMenu'
import { mobileScroll } from './scroll'
import { Link } from 'react-router-dom'
import { ShoppingCartSimple } from 'phosphor-react'
import logo from '../../images/pearegrinenewfinalNBG.png'
import './Header.css'
import './MobileHeader.css'
import './scroll.css'
import '../Popout/Popout.css'
import '../CategoryMenu/CategoryMenu.css'
import '../CategoryMenu/MobileCategoryMenu.css'

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
          <li className='clothing-hover-link'>
            <a>Clothing</a>
            <CategoryMenu />
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
