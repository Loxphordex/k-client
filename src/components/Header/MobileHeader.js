import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../images/Pear.png'
import { ShoppingCartSimple, List } from 'phosphor-react'

export default function MobileHeader({ showIcon }) {
  const [popoutVisible, setPopoutVisible] = useState(false)

  return (
    <div className='mobile-header-container' id='mobile-header-container'>
      <div className='mobile-popout-icon-container'>
        <List size={30} className='mobile-popout-icon' />
      </div>
      <h1 className='main-brand-logo mobile-logo'>
        <Link to='/'>
          <img src={logo} className='brand-image jelly' id='mobile-brand-image' alt='Pearegrine' />
        </Link>
      </h1>
      <Link to='/cart'>
        <div className='cart-area mobile-cart-icon' id='cart-area'>
          {showIcon()}
          <ShoppingCartSimple size={30} color='black' />
        </div>
      </Link>
    </div>
  )
}
