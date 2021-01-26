import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { CloudinaryContext } from 'cloudinary-react'
import config from '../../config'
import ArticleLink from './ArticleLink'
import AuthFooter from '../AuthFooter/AuthFooter'
import ApiServices from '../../services/api-services'
import TokenServices from '../../services/token-services'
import './Discover.css'

export default function DiscoverHome({ history }) {
  const [articles, setArticles] = useState(null)
  const [error, setError] = useState(null)
  const token = TokenServices.getJwt()

  useEffect(() => {
    getPosts()

    return () => {
      setError(null)
    }
  }, [])

  function getPosts() {
    ApiServices.getDiscoverPosts()
      .then(res => setArticles(res.entries))
      .then(() => setError(null))
      .catch(err => setError(err))
  }

  function deleteEntry(id) {
    ApiServices.deleteDiscoverEntry(id)
      .then(() => getPosts())
      .catch(err => setError(err))
  }

  return (
    <div className='discover-home'>
      <CloudinaryContext cloudName={config.CLOUD_NAME}>
        {articles && articles.length > 0 &&
            <div className='discover-list'>
              {articles.map(article => {
                return (
                  <div key={article.id} className='post-link-container fade-in'>
                    <ArticleLink article={article} token={token} deleteEntry={deleteEntry} />
                  </div>
                )
              })}
            </div>
        }
        {token && 
          <>
            <Link to='new_discover_entry' className='discover-new-entry'>
              <button className='t-button new-discover-create-link'>New Entry</button>
            </Link>
            <AuthFooter history={history} />
          </>
        }
      </CloudinaryContext>
    </div>
  )
}