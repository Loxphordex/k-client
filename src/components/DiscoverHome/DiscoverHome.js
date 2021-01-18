import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AuthFooter from '../AuthFooter/AuthFooter'
import ApiServices from '../../services/api-services'
import TokenServices from '../../services/token-services'
import parse from 'html-react-parser'
import './Discover.css'

export default function DiscoverHome() {
  const [entries, setEntries] = useState([])
  const [error, setError] = useState(null)
  const token = TokenServices.getJwt()

  useEffect(() => {
    ApiServices.getDiscoverPosts()
      .then(res => setEntries(res))
      .then(() => setError(null))
      .catch((err) => setError(err))

    return () => {
      setError(null)
    }
  }, [])

  return (
    <div className='discover-home'>
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