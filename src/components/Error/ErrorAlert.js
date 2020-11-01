import React from 'react'
import './ErrorAlert.css'

export default class ErrorAlert extends React.Component {
  constructor(props) {
    super(props)
  }

  showAlert = () => {
    const { errorMessage } = this.props
    if (!errorMessage) return "no-error"
    return String()
  }

  render() {
    const { errorMessage, handleError } = this.props
    return (
      <div onClick={() => handleError(null)} className={`error-alert ${this.showAlert()}`}>
        <div className="error-alert-icon">!</div>
        <div className="error-alert-message">{errorMessage}</div>
      </div>
    )
  }
}