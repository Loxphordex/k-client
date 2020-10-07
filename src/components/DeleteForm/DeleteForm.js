import React from 'react'
import '../../templates/form.css'
import '../EditorForm/EditorForm.css'

export default class DeleteForm extends React.Component {
  render() {
    const { closeDeleteForm, handleDelete } = this.props
    return (
      <section className="editor-container">
        <div className="editor-background" onClick={() => closeDeleteForm()} />
        <fieldset className="t-fieldset editor-field delete-field">
          <h2 className="t-header">Are you sure?</h2>
          <form onSubmit={event => handleDelete(event)}>
            <button type="submit" className="t-button editor-button">
              DELETE
            </button>
            <button
              className="t-button editor-button cancel-button"
              onClick={() => closeDeleteForm()}
            >
              CANCEL
            </button>
          </form>
        </fieldset>
      </section>
    )
  }
}
