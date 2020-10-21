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
            <input
              type="text"
              id="new-description"
              name="new-description"
              className="t-input"
              onChange={event => updateNewDescription(event.target.value)}
            />
            <label htmlFor="new-type" className="t-label">
              TYPE
            </label>
            <input
              type="text"
              id="new-type"
              name="new-type"
              className="t-input"
              onChange={event => updateNewType(event.target.value)}
            />
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
