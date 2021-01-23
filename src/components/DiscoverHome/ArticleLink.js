import React from 'react'
import { Link } from 'react-router-dom'
import { Image, Transformation } from 'cloudinary-react'

export default function ArticleLink({ article, token, deleteEntry }) {
  return (
    <>
      <Link to={{
        pathname: '/discover/post',
        search: `?id=${article.id}`,
        state: { article }
      }}>
        <div className='discover-article-link-container'>
          <Image publicId={article.header_url} type='fetch' name={article.header_url}>
            <Transformation quality='90' width='500' crop='scale' fetchFormat='auto' />
          </Image>
          <div className='discover-link-header-container'>
            <h2 className='discover-link-header'>{article.title}</h2>
          </div>
        </div>
      </Link>
      {token &&
        <button onClick={() => deleteEntry(article.id)} className='t-button delete-discover-entry'>Delete</button>
      }
    </>
  )
}