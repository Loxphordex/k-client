import React from 'react'
import AuthRoute from './AuthRoute'
import { render } from '@testing-library/react'

it('renders without crashing', () => {
  render(
    <AuthRoute />
  )
})
