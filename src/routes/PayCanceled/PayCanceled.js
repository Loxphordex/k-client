import React from 'react'
import { Redirect } from 'react-router-dom'

export default function PayCanceled() {
  return (
    <Redirect to='/cart' />
  )
}