import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AuthFooter from '../AuthFooter/AuthFooter'
import ApiServices from '../../services/api-services'
import TokenServices from '../../services/token-services'
import parse from 'html-react-parser'
import './Discover.css'

export default function DiscoverHome() {
  const [entries, setEntries] = useState(null)
  const [error, setError] = useState(null)
  const token = TokenServices.getJwt()

  useEffect(() => {
    if (!entries || entries.length === 0) {
      ApiServices.getDiscoverPosts()
        .then(res => {setEntries(res.entries)})
        .then(() => setError(null))
        .catch(err => setError(err))
    }

    return () => {
      setError(null)
    }
  }, [entries])

  function deleteEntry(id) {
    ApiServices.deleteEntry(id)
      .then(res => console.log(res))
  }

  return (
    <div className='discover-home'>
      {entries && <div>{entries.map(e => <div key={e.id}>{parse(e.content)}</div>)}</div>}
      {token && 
        <>
          <Link to='new_discover_entry'>
            <button className='t-button new-discover-create-link'>New Entry</button>
          </Link>
          <AuthFooter />
        </>
      }
    </div>
  )
}