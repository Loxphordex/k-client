import React from 'react'
import ApiServices from '../../services/api-services'
import { loadStripe } from '@stripe/stripe-js'
import config from '../../config'

const stripePromise = loadStripe(config.PUBLISHABLE_KEY)

export default function Checkout() {
  const handleTest = async() => {
    const res = await ApiServices.testLocalPaymentSession()
    console.log(res)
  }
  return (
    <button onClick={handleTest}>TEST</button>
  )
}