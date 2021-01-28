import React, { useEffect, useState } from 'react'
import ApiServices from '../../services/api-services'
import { Image, Transformation } from 'cloudinary-react'
import config from '../../config'
import parse from 'html-react-parser'
import './DiscoverArticle.css'

export default function DiscoverArticle({ location }) {
  const [mainArticle, setMainArticle] = useState(null)

  useEffect(() => {
    if (!mainArticle) {
      if (location && location.state) {
        // if directed from Discover home
        const { article } = location.state
        if (article) {
          setMainArticle(article)
        }
      } else {
        // if directed from elsewhere
        const params = new URLSearchParams(window.location.search)
        if (params) {
          const id = params.get('id')
          if (id) {
            ApiServices.getDiscoverPostById(id)
              .then(res => setMainArticle(res.entry))
              .catch(err => console.error(err))
          }
        }
      }
    }
  }, [])

  if (mainArticle) {
    return (
      <div className='discover-article-container'>
        <div className='discover-header-image-container'>
          <Image publicId={mainArticle.header_url} type='fetch' name={mainArticle.header_url} className='discover-header-image'>
            <Transformation quality='90' crop='scale' fetchFormat='auto' />
          </Image>
        </div>
        <div className='article-main-header-container'>
          <h1 className='article-main-header'>{mainArticle.title}</h1>
        </div>
        <article className='discover-main-article'>
          {mainArticle && parse(mainArticle.content)}
        </article>
      </div>
    )
  }

  return <></>
}