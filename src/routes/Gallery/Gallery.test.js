import React from 'react'
import ReactDOM from 'react-dom'
import Gallery from './Gallery'
import Enzyme from 'enzyme'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

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