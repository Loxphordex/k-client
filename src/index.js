import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { CloudinaryContext } from 'cloudinary-react'
import config from './config'
import './index.css'
import App from './App'
import 'isomorphic-fetch'

ReactDOM.render(
  <BrowserRouter>
    <CloudinaryContext cloudName={config.CLOUD_NAME}>
      <App />
    </CloudinaryContext>
  </BrowserRouter>,
  document.getElementById('root')
)
