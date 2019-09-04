import React from 'react'

export default class EditorForm extends React.Component {
  render() {
    return(
      <section>
        <fieldset>
          <form>
            <label htmlFor='new-name'>NAME</label>
            <input 
              type='text'
              id='new-name'
              name='new-name'
            />
            <label htmlFor='new-link'>LINK</label>
            <input 
              type='text'
              id='new-link'
              name='new-link'
            />
            <button type='submit'>SUBMIT</button>
            <button>CANCEL</button>
          </form>
        </fieldset>
      </section>
    )
  }
}