import React from 'react'
import CloudinaryWidget from '../../components/CloudinaryWidget/CloudinaryWidget'
import ApiServices from '../../services/api-services'
import '../../templates/form.css'

export default class NewImageRoute extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      error: null,
      url: '',
      name: '',
      link: '',
      confirmation: ''
    }
  }

  setImageUrl = url => {
    this.setState({ url })
  }

  setImageName = name => {
    this.setState({ name })
  }

  setImageLink = link => {
    this.setState({ link })
  }

  setConfirmation = () => {
    const { name } = this.state
    this.setState({
      confirmation: `Success! Added '${name}' to the gallery.`
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    const { url, name, link } = this.state
    const newImage = { url, name, link }

    if (!url) {
      this.setState({ error: 'Image not selected' })
      return
    }

    ApiServices.postImage(newImage)
      .then(() => this.setConfirmation())
      .then(() => {
        this.setState({
          error: null,
          url: '',
          name: '',
          link: ''
        })
      })
      .catch(e => this.setState({ error: e }))
  }

  render() {
    const { error, confirmation } = this.state
    return (
      <section className="new-image-area t-form-container">
        <fieldset className="t-fieldset">
          <div className="t-confirmation">{confirmation}</div>
          <div className="t-error">{error}</div>
          <h2 className="t-header">NEW IMAGE</h2>
          <CloudinaryWidget setImageUrl={this.setImageUrl} />
          <form className="t-form" onSubmit={event => this.handleSubmit(event)}>
            <label id="t-label" htmlFor="imageName" className="t-label">
              NAME
            </label>
            <input
              type="text"
              className="t-input"
              name="imageName"
              id="imageName"
              onChange={event => this.setImageName(event.target.value)}
              placeholder="OPTIONAL"
            />
            <label htmlFor="imageLink" className="t-label">
              STORE LINK
            </label>
            <input
              type="text"
              className="t-input"
              name="imageLink"
              id="imageLink"
              onChange={event => this.setImageLink(event.target.link)}
              placeholder="OPTIONAL"
            />
            <button type="submit" className="t-button-submit">
              SUBMIT
            </button>
          </form>
        </fieldset>
      </section>
    )
  }
}
