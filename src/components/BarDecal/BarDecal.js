import React, { useEffect, useState } from 'react'
import './BarDecal.css'

export default function BarDecal({ page }) {
  const [casedPage, setCasedPage] = useState(null)
  useEffect(() => {
    if (page) {
      let cased
      if (page === 'arrivals') cased = 'New Arrivals'
      else cased = page[0].toUpperCase() + page.slice(1)
      setCasedPage(cased)
    }
  }, [])

  return (
    <div className='bar-decal'>
      <h3 className='bar-decal-header'>{casedPage}</h3>
    </div>
  )
}