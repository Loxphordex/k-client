import React, { useEffect, useState } from 'react'
import MobileCategoryMenu from '../CategoryMenu/MobileCategoryMenu'
import { Link } from 'react-router-dom'

export default function Popout({ popoutVisible, enableMenu }) {
  const [detailsEnabled, setDetailsEnabled] = useState(false)

  useEffect(() => {
    return () => {
      setDetailsEnabled(false)
    }
  }, [popoutVisible])

  function toggleDetails(event) {
    event.preventDefault()
    event.stopPropagation()

    setDetailsEnabled(!detailsEnabled)
  }

  return (
    <div className={`popout-container ${popoutVisible ? 'popout-visible' : 'popout-hidden'}`} onClick={() => enableMenu(false)}>
      <nav role='navigation' className='popout-nav'>
        <h3 className='menu-header'>Menu</h3>
        <ul className='mobile-nav-links'>
          <li>
            <Link to='/gallery/sale'>Sale</Link>
          </li>
          <li>
            <Link to='/gallery/arrivals'>New Arrivals</Link>
          </li>
          <li onClick={(event) => toggleDetails(event)}>
            <a>Clothing</a>
          </li>
          <li>
            <Link to='/discover'>Discover</Link>
          </li>
        </ul>
      </nav>
      <div className={`popout-details fade-in ${detailsEnabled ? 'details-enabled-color' : String()}`}>
        {detailsEnabled && <MobileCategoryMenu />}
      </div>
    </div>
  )
}