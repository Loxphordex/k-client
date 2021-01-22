import React, { useEffect, useState } from 'react'
import parse from 'html-react-parser'

export default function DiscoverArticle({ location }) {
  const [mainArticle, setMainArticle] = useState(null)

  useEffect(() => {
    if (!mainArticle) {
      if (location && location.state) {
        const { article } = location.state
        if (article) {
          setMainArticle(article)
        }
      }
    }
  }, [])

  if (mainArticle) {
    return (
      <div className='discover-article-container'>
        <article className='discover-main-article'>
          <h1>{mainArticle.title}</h1>
          {mainArticle && parse(mainArticle.content)}
        </article>
      </div>
    )
  }

  return <></>
}