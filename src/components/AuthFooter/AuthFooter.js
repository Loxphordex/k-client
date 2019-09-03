import React from 'react'
import TokenServices from '../../services/token-services'
import './AuthFooter.css'

export default class AuthFooter extends React.Component {
  handleAddImage = () => {
    const { history } = this.props
    history.push('/new')
  }

  handleLogout = async() => {
    const { history } = this.props
    await TokenServices.clearToken()
    history.push('/')
  }

  render() {
    return(
      <footer className='auth-footer'>
        <button 
          className='footer-add-image'
          onClick={() => this.handleAddImage()}>
          ADD IMAGE
        </button>
        <button 
          className='footer-logout'
          onClick={() => this.handleLogout()}>
          LOGOUT
        </button>
      </footer>
    )
  }
}