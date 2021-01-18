import React, { useEffect, useState } from 'react'
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
          <AuthFooter />
        </>
      }
      {!token &&
        <Redirect to='/gallery' />
      }
    </div>
  )
}