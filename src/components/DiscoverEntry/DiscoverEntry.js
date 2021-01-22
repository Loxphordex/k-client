import React, { useEffect, useState } from 'react'
import CloudinaryWidget from '../CloudinaryWidget/CloudinaryWidget'
import LoginPopup from '../LoginPopup/LoginPopup'
import ErrorAlert from '../Error/ErrorAlert'
import ApiServices from '../../services/api-services'
import TokenServices from '../../services/token-services'
import AuthFooter from '../AuthFooter/AuthFooter'
import { Redirect } from 'react-router-dom'
import ReactQuill from 'react-quill'
import { modules, formats } from './editorOptions'
import 'react-quill/dist/quill.snow.css'
import './DiscoverEntry.css'

export default function DiscoverEntry({ history }) {
  const [title, setTitle] = useState('')
  const [url, setUrl] = useState('')
  const [editorHtml, setEditorHtml] = useState('')
  const [error, setError] = useState(null)
  const token = TokenServices.getJwt()

  useEffect(() => {
    return () => {
      setEditorHtml('')
      setError(null)
    }
  }, [])

  function postEntry() {
    if (!title) {
      handleErrorWithTimeout('Please enter a title')
    }

    else if (!editorHtml) {
      handleErrorWithTimeout('Please provide content for the blog')
    }

    else if (!url) {
      handleErrorWithTimeout('Please provide a header image')
    }

    if (title && editorHtml && url) {
      const entry = {
        title,
        content: editorHtml,
        url
      }
      ApiServices.postNewDiscoverEntry(entry)
        .then(() => {
          history.push('/discover')
        })
        .catch(err => setError(err.error))
    }
  }

  function handleErrorWithTimeout(message, time = 7000) {
    setError({ message })
    setTimeout(() => {
      if (error !== null) {
        setError(null)
      }
    }, time);
  }

  return (
    <div className='discover-entry' id='discover-entry'>
      {token && 
        <>
          <label htmlFor='new-discover-title' className='t-label discover-label'>Title</label>
          <input
            className='t-input discover-input new-discover-title'
            name='new-discover-title'
            id='new-discover-title'
            onChange={event => setTitle(event.target.value)}
            required={true}
          />
          <label className='t-label t-discover-label'>Header Image</label>
          <CloudinaryWidget setImageUrl={setUrl} />
          {error && error.message && <ErrorAlert errorMessage={error.message} handleError={setError} />}
          <ReactQuill
            theme='snow'
            onChange={setEditorHtml}
            value={editorHtml}
            modules={modules}
            formats={formats}
            bounds='.discover-entry'
          />
          <button onClick={postEntry} className='t-button-submit'>Post</button>
          <LoginPopup error={error} setError={setError} />
          <AuthFooter history={history} />
        </>
      }
      {!token &&
        <Redirect to='/gallery' />
      }
    </div>
  )
}