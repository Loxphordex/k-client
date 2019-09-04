import React from 'react'
import ApiServices from '../../services/api-services'
import '../../templates/form.css'

export default class LoginRoute extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      error: null,
    }
  }

  updateUsername = (username) => {
    this.setState({ username })
  }

  updatePassword = (password) => {
    this.setState({ password })
  }

  handleError = (error) => {
    console.log(error)
  }

  clearError = () => {
    this.setState({ error: null })
  }

  clearCreds = () => {
    this.setState({
      username: '',
      password: '',
    })
  }

  handleSubmitLogin = (event) => {
    event.preventDefault()

    const { username, password } = this.state
    const { history } = this.props
    ApiServices.userLogin(username, password)
      .then((res) => window.localStorage.setItem('pearegrineKey', res.authToken))
      .then(() => this.clearCreds())
      .then(() => this.clearError())
      .then(() => history.push('/'))
      .catch((e) => this.handleError(e))
  }

  render() {
    return(
      <div className='login-area t-form-container'>
        <fieldset className='login-field t-fieldset'>
          <h2 className='t-header'>LOGIN</h2>
          <form onSubmit={(event) => this.handleSubmitLogin(event)}>
            <label htmlFor='username' className='t-label'>USERNAME</label>
            <input 
              type='text'
              id='username'
              name='username'
              className='t-input'
              onChange={(event) => this.updateUsername(event.target.value)}
              required
            />
            <label htmlFor='pass' className='t-label'>PASSWORD</label>
            <input 
              type='password'
              id='pass'
              name='pass'
              className='t-input'
              onChange={(event) => this.updatePassword(event.target.value)}
              required
            />
            <button type='submit' className='t-button'>SIGN IN</button>
          </form>
        </fieldset>
      </div>
    )
  }
}