import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

export default class Header extends React.Component {
  render() {
    return(
      <header role='heading'>
        <nav role='navigation' className='main-header-nav'>
          <h2><Link to='/'>....</Link></h2>
          <ul>
            <li><Link to='/bio'>BIO</Link></li>
            <li><Link to='/'>T-SHIRTS</Link></li>
            <li><Link to='/contact'>CONTACT</Link></li>
          </ul>
        </nav>
      </header>
    )
  }
}