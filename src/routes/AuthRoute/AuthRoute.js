import React from 'react'
import ApiServices from '../../services/api-services'

export default class AuthRoute extends React.Component {
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

  handleSubmitUser = (event) => {
    event.preventDefault()

    const { username, password } = this.state
    const { history } = this.props

    ApiServices.userRegistration(username, password)
      .then(() => this.clearError())
      .then(() => this.clearCreds())
      .then(() => history.push('/'))
      .catch(error => this.handleError(error))
  }

  render() {
    const { error } = this.state
    return(
      <div>
        <h2>Auth</h2>
        { error && <div>{ error }</div> }
        <fieldset>
          <form onSubmit={(event) => this.handleSubmitUser(event)}>
            <input 
              type='text' 
              onChange={event => this.updateUsername(event.target.value)}
              placeholder='USERNAME'
              required />
            <input 
              type='password' 
              onChange={event => this.updatePassword(event.target.value)}
              placeholder='PASSWORD'
              required />
            <button type='submit'>SUBMIT</button>
          </form>
        </fieldset>
      </div>
    )
  }
}