import React, { useEffect, useState } from 'react'
import LoginRoute from '../../routes/LoginRoute/LoginRoute'
import './LoginPopup.css'

export default function LoginPopup({ error, setError }) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (error && error.message === 'jwt expired') {
      setIsOpen(true)
    }
  }, [isOpen, error])

  function handleClosePopup(open) {
    // open: bool
    setIsOpen(open)
    if (open === false) {
      setError(null)
    }
  }

  return (
    <>
      {isOpen &&  
        <div className='login-popup-container'>
          <div className='login-popup-background' onClick={() => handleClosePopup(false)} />
          <div className='login-route-container'>
            <LoginRoute handleClosePopup={handleClosePopup} />
          </div>
        </div>}
    </>
  )
}