import React from 'react'
import Gallery from './Gallery'
import config from '../../config/config'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { render, screen, waitFor } from '@testing-library/react'
import fetchMock from 'jest-fetch-mock'

// const server = setupServer(
//   rest.get('/testImages', (req, res, ctx) => {
//     return res(ctx.json({ message: 'default message' }))
//   })
// )

beforeAll(() => {
  // server.listen()
  fetchMock.mockIf(config.API_ENDPOINT, req => {
    if (req.url.endsWith('/api/images')) {
      return {allImages}
    } else {
      return {
        status: 404,
        body: 'Not found'
      }
    }
  })
})
// afterEach(() => server.resetHandlers())
// afterAll(() => server.close())

  it('renders the complete page', async () => {
    render(
      <Gallery />
    )
  })

it('renders loader, then removes loader after initial API call returns', async () => {
  // server.use('/testImages', (res, req, ctx) => {
  //   return res(ctx.json({ message: 'default message' }))
  // })

  render(
    <Gallery />
  )

  expect(screen.getByTestId('gallery-preloader')).toBeTruthy()

  await waitFor(() => {
    screen.getByTestId('gallery-area')
  })

  expect(screen.getByTestId('gallery-preloader')).toBeFalsy()
})

// mock data
const allImages = {
  mappedImages: [
    {
      '0': {
        'id': 457,
        'url': 'http://res.cloudinary.com/dws2woreg/image/upload/v1612056465/deamsvy2j2n1byzc2qau.png',
        'name': 'Lighting Bolt Suffer T-Shirt',
        'link': null,
        'description': 'Screen Printed Pearegrine Original Design',
        'type': null,
        'price': 70,
        'category': 'shirt',
        'modifier': null,
        'sale_price': null,
        'new_arrival': true,
        'sale_enabled': null,
        'availableSizes': {
          'small': null,
          'medium': null,
          'large': null,
          'xlarge': null,
          'xxlarge': null
        }
      }
    }
  ]
}
