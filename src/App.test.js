import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

describe('App', () => {
  it('runs without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})