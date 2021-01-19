import React, { useEffect, useState } from 'react'
import ApiServices from '../../services/api-services'
import TokenServices from '../../services/token-services'
import AuthFooter from '../AuthFooter/AuthFooter'
import { Redirect } from 'react-router-dom'
import ReactQuill from 'react-quill'
import { modules, formats } from './editorOptions'
import 'react-quill/dist/quill.snow.css'
import './DiscoverEntry.css'

export default function DiscoverEntry() {
  const [editorHtml, setEditorHtml] = useState('')
  const token = TokenServices.getJwt()

  useEffect(() => {
    return () => {
      setEditorHtml('')
    }
  }, [])

  function postEntry() {
    if (editorHtml) {
      ApiServices.postNewDiscoverEntry({ content: editorHtml })
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }
  }

  return (
    <div className='discover-entry' id='discover-entry'>
      {token && 
        <>
          <ReactQuill
            theme='snow'
            onChange={setEditorHtml}
            value={editorHtml}
            modules={modules}
            formats={formats}
            bounds='.discover-entry'
          />
          <button onClick={postEntry} className='t-button-submit'>Post</button>
          <AuthFooter />
        </>
      }
      {!token &&
        <Redirect to='/gallery' />
      }
    </div>
  )
}