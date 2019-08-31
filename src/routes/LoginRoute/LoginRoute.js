import React from 'react'
import ApiServices from '../../services/api-services'

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
      <div className='login-area'>
        <fieldset className='login-field'>
          <form onSubmit={(event) => this.handleSubmitLogin(event)}>
            <label>USERNAME</label>
            <input 
              type='text'
              onChange={(event) => this.updateUsername(event.target.value)}
              required
            />
            <label>PASSWORD</label>
            <input 
              type='password'
              onChange={(event) => this.updatePassword(event.target.value)}
              required
            />
            <button type='submit'>SIGN IN</button>
          </form>
        </fieldset>
      </div>
    )
  }
}