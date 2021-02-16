import React, { useEffect, useState } from 'react'
import Popout from '../Popout/Popout'
import { Link } from 'react-router-dom'
import logo from '../../images/Pear.png'
import { ShoppingCartSimple, List } from 'phosphor-react'

export default function MobileHeader({ match, showIcon }) {
  const [popoutVisible, setPopoutVisible] = useState(false)
  const [page, setPage] = useState(null)

  useEffect(() => {
    setPage(match.params.modifier)
    return () => {
      enableMenu(false)
    }
  }, [])

  function enableMenu(enabled) {
    if (enabled) {
      window.scrollTo(0, 0)
      setPopoutVisible(true)
      document.body.style.overflow = 'hidden'
    } else {
      setPopoutVisible(false)
      document.body.style.overflow = 'auto'
    }
  }

  return (
    <>
      <div 
        className={`mobile-header-container ${popoutVisible ? 'popout-header-container' : String()}`}
        id='mobile-header-container'>
        <div 
          className='mobile-popout-icon-container'
          onClick={() => enableMenu(!popoutVisible)}
        >
          <List size={30} className='mobile-popout-icon' />
        </div>
        <h1 className={`main-brand-logo mobile-logo ${popoutVisible ? 'popout-brand-image' : String()}`}>
          <Link to='/'>
            <img
              src={logo} 
              className={`brand-image jelly`}
              id='mobile-brand-image'
              alt='Pearegrine'
              onClick={() => enableMenu(false)}
            />
          </Link>
        </h1>
        <Link to='/cart' onClick={() => enableMenu(false)}>
          <div className='cart-area mobile-cart-icon' id='cart-area'>
            {showIcon()}
            <ShoppingCartSimple size={30} color='black' />
          </div>
        </Link>
        <div className='page-decal'>
          <h2>{page && page}</h2>
        </div>
      </div>
      <Popout popoutVisible={popoutVisible} enableMenu={enableMenu} />
    </>
  )
}
