import React, { useEffect, useState } from 'react'
import './BarDecal.css'

export default function BarDecal({ page }) {
  const [casedPage, setCasedPage] = useState(null)
  const [tempBarDecal, setTempBarDecal] = useState('bar-decal')
  useEffect(() => {
    if (page) {
      console.log(page)
      let cased
      if (page === 'arrivals') cased = 'New Arrivals'
      else cased = page[0].toUpperCase() + page.slice(1)
      setCasedPage(cased)

      // temporary bar decal style
      page === 'shirts' ? setTempBarDecal('bar-decal-temp') : setTempBarDecal('bar-decal')
    }
  }, [page])

  return (
    <div className={tempBarDecal}>
      <h3 className='bar-decal-header'>{casedPage}</h3>
    </div>
  )
}