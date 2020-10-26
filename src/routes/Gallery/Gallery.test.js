import React from 'react'
import ReactDOM from 'react-dom'
import { shallow, configure } from 'enzyme'
import toJson from 'enzyme-to-json'
import Adapter from 'enzyme-adapter-react-16'
import Gallery from './Gallery'

configure({ adapter: new Adapter() })

describe('Gallery', () => {
  it('renders the complete page', () => {
    const wrapper = shallow(<Gallery />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Gallery />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
