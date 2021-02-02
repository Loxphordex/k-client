import React, { useEffect } from 'react'
import { CheckCircle, ArrowUUpLeft } from 'phosphor-react'
import './PaySuccess.css'

export default function PaySuccess({ history, cart, setCart }) {

  useEffect(() => {
    if (cart) {
      setCart([])
    }
  }, [])

  function backToGallery() {
    history.push('/gallery/all?page=1')
  }

  return (
    <div className='confirm-success-container fade-in'>
      <div className='confirm-icon-container'>
        <CheckCircle size={48} />
      </div>
      <h2 className='t-header confirm-header'>Pearegrine thanks you</h2>
      <p>Your order will be shipped within a few business days. Please allow some time. There's covid out there.</p>

      <div onClick={backToGallery} className='return-from-confirm'>
        <ArrowUUpLeft size={24} />
        <p>Back to gallery</p>
      </div>
    </div>
  )
}