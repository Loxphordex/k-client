import React from 'react'
import ReactDOM from 'react-dom'
import { shallow, configure } from 'enzyme'
import toJson from 'enzyme-to-json'
import Adapter from 'enzyme-adapter-react-16'
import AuthRoute from './AuthRoute'

configure({ adapter: new Adapter() })

describe('Gallery', () => {
  it('renders the complete page', () => {
    const wrapper = shallow(<AuthRoute />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<AuthRoute />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
