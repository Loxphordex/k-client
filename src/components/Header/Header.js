import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import logo from '../../images/PEAREGRINE.jpg'

export default class Header extends React.Component {
  render() {
    return (
      <header role="heading">
        <nav role="navigation" className="main-header-nav">
          <h1>
            <img src={logo} alt="Pearegrine" />
          </h1>
          <ul>
            <li>
              <Link to="/aboutus">ABOUT US</Link>
            </li>
            <li>
              <Link to="/">T-SHIRTS</Link>
            </li>
            <li>
              <Link to="/contact">CONTACT</Link>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}
