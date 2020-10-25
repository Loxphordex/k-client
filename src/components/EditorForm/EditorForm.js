import React from 'react'
import '../../templates/form.css'
import './EditorForm.css'

export default class EditorForm extends React.Component {
  render() {
    const {
      disableEditor,
      updateNewName,
      updateNewLink,
      updateNewDescription,
      updateNewType,
      updateNewPrice,
      updateSmall,
      updateMedium,
      updateLarge,
      updateXLarge,
      updateXXLarge,
      handleSubmitEdit
    } = this.props
    return (
      <section className="editor-container">
        <div className="editor-background" onClick={() => disableEditor()} />
        <fieldset className="t-fieldset editor-field">
          <h2 className="t-header">EDIT IMAGE</h2>
          <form onSubmit={event => handleSubmitEdit(event)}>
            <label htmlFor="new-name" className="t-label">
              NAME
            </label>
            <input
              type="text"
              id="new-name"
              name="new-name"
              className="t-input"
              onChange={event => updateNewName(event.target.value)}
            />
            <label htmlFor="new-link" className="t-label">
              LINK
            </label>
            <input
              type="text"
              id="new-link"
              name="new-link"
              className="t-input"
              onChange={event => updateNewLink(event.target.value)}
            />
            <label htmlFor="new-description" className="t-label">
              DESCRIPTION
            </label>
            <textarea
              id="new-description"
              name="new-description"
              className="t-input new-description"
              onChange={event => updateNewDescription(event.target.value)}
            />
            <label htmlFor="new-type" className="t-label">
              TYPE (Cotton T-Shirt, Hoodie, etc.)
            </label>
            <input
              type="text"
              id="new-type"
              name="new-type"
              className="t-input"
              onChange={event => updateNewType(event.target.value)}
            />
            <label htmlFor="new-price" className="t-label">PRICE</label>
            <input
              type="number"
              id="new-price"
              name="new-price"
              className="t-input"
              onChange={event => updateNewPrice(event.target.value)}
            />
            <div className="size-container">
              <div className="size-unit">
                <label htmlFor="new-small" className="t-label t-size-label">S</label>
                <input
                  type="number"
                  id="new-small"
                  name="new-small"
                  className="t-input t-size"
                  onChange={event => updateSmall(event.target.value)}
                />
              </div>
              <div className="size-unit">
                <label htmlFor="new-medium" className="t-label t-size-label">M</label>
                <input
                  type="number"
                  id="new-medium"
                  name="new-medium"
                  className="t-input t-size"
                  onChange={event => updateMedium(event.target.value)}
                />
              </div>
              <div className="size-unit">
                <label htmlFor="new-large" className="t-label t-size-label">L</label>
                <input
                  type="number"
                  id="new-large"
                  name="new-large"
                  className="t-input t-size"
                  onChange={event => updateLarge(event.target.value)}
                />
              </div>
              <div className="size-unit">
                <label htmlFor="new-xLarge" className="t-label t-size-label">XL</label>
                <input
                  type="number"
                  id="new-xLarge"
                  name="new-xLarge"
                  className="t-input t-size"
                  onChange={event => updateXLarge(event.target.value)}
                />
              </div>
              <div className="size-unit">
                <label htmlFor="new-xxLarge" className="t-label t-size-label">XXL</label>
                <input
                  type="number"
                  id="new-xxLarge"
                  name="new-xxLarge"
                  className="t-input t-size"
                  onChange={event => updateXXLarge(event.target.value)}
                />
              </div>
            </div>
            <button type="submit" className="t-button editor-button">
              SUBMIT
            </button>
            <button
              className="t-button editor-button cancel-button"
              onClick={() => disableEditor()}
            >
              CANCEL
            </button>
          </form>
        </fieldset>
      </section>
    )
  }
}
