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
      category: null,
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

  updateCategory = category => {
    this.setState({ category })
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
          link: '',
          category: null
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
            <div className="category-container">
              <h3 className="t-label">CATEGORY</h3>
              <label htmlFor="category-none" className="t-label t-label-radio">NONE</label>
              <input
                type="radio"
                id="category-none"
                name="category"
                className="t-input t-radio t-category"
                onChange={event => this.updateCategory(event.target.value)}
                value=''
              />
              <label htmlFor="category-shirt" className="t-label t-label-radio">SHIRT</label>
              <input
                type="radio"
                id="category-shirt"
                name="category"
                className="t-input t-radio t-category"
                onChange={event => this.updateCategory(event.target.value)}
                value="shirt"
              />
              <label htmlFor="category-sweatshirt" className="t-label t-label-radio">SWEATSHIRT</label>
              <input
                type="radio"
                id="category-sweatshirt"
                name="category"
                className="t-input t-radio t-category"
                onChange={event => this.updateCategory(event.target.value)}
                value="sweatshirt"
              />
              <label htmlFor="category-jeans" className="t-label t-label-radio">JEANS</label>
              <input
                type="radio"
                id="category-jeans"
                name="category"
                className="t-input t-radio t-category"
                onChange={event => this.updateCategory(event.target.value)}
                value="jeans"
              />
              <label htmlFor="category-hat" className="t-label t-label-radio">HAT</label>
              <input
                type="radio"
                id="category-hat"
                name="category"
                className="t-input t-radio t-category"
                onChange={event => this.updateCategory(event.target.value)}
                value="hat"
              />
            </div>
            <button type="submit" className="t-button-submit">
              SUBMIT
            </button>
          </form>
        </fieldset>
      </section>
    )
  }
}
