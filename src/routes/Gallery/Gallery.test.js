import React from 'react'
import Gallery from './Gallery'
import config from '../../config/config'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { render } from '@testing-library/react'

const server = setupServer(
  rest.get('/images', (req, res, ctx) => {
    return res(ctx.json({ 
      id: 1
     }))
  })
)

it('renders the complete page', async () => {
  server.use('/images', (res, req, ctx) => {
    return res(ctx.status(200))
  })

  render(
    <Gallery />
  )
})
