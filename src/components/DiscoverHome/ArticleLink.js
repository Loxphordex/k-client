import React from 'react'

export default function ArticleLink({ article, token, deleteEntry }) {
  return (
    <div className='discover-article-link'>
      <h2 className='discover-link-header'>{article.title}</h2>
      {token &&
        <button onClick={() => deleteEntry(article.id)} className='t-button new-discover-create-link'>Delete</button>
      }
    </div>
  )
}