import React from 'react'
import PaySuccess from '../PaySuccess/PaySuccess'
import PayCanceled from '../PayCanceled/PayCanceled'

export default function Confirm() {
  const urlParams = new URLSearchParams(window.location.search)
  const responseSuccess = urlParams.get('success')
  const responseCanceled = urlParams.get('canceled')

  if (responseSuccess && !responseCanceled) return <PaySuccess />
  if (responseCanceled && !responseSuccess) return <PayCanceled />

  return (
    <div>Error</div>
  )
}