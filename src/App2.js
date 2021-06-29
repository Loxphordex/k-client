import React from 'react'
import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

it('runs without crashing', async () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
})
