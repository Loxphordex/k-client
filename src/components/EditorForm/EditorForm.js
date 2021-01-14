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
      updateNewPrice,
      updateCategory,
      updateNewArrival,
      updateSalePrice,
      updateSaleEnabled,
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
            <div className="category-container">
              <h3 className="t-label">CATEGORY</h3>
              <label htmlFor="category-none" className="t-label t-label-radio">NONE</label>
              <input
                type="radio"
                id="category-none"
                name="category"
                className="t-input t-radio t-category"
                onChange={event => updateCategory(event.target.value)}
                value=''
              />
              <label htmlFor="category-shirt" className="t-label t-label-radio">SHIRT</label>
              <input
                type="radio"
                id="category-shirt"
                name="category"
                className="t-input t-radio t-category"
                onChange={event => updateCategory(event.target.value)}
                value="shirt"
              />
              <label htmlFor="category-sweatshirt" className="t-label t-label-radio">SWEATSHIRT</label>
              <input
                type="radio"
                id="category-sweatshirt"
                name="category"
                className="t-input t-radio t-category"
                onChange={event => updateCategory(event.target.value)}
                value="sweatshirt"
              />
              <label htmlFor="category-jeans" className="t-label t-label-radio">JEANS</label>
              <input
                type="radio"
                id="category-jeans"
                name="category"
                className="t-input t-radio t-category"
                onChange={event => updateCategory(event.target.value)}
                value="jeans"
              />
              <label htmlFor="category-hat" className="t-label t-label-radio">HAT</label>
              <input
                type="radio"
                id="category-hat"
                name="category"
                className="t-input t-radio t-category"
                onChange={event => updateCategory(event.target.value)}
                value="hat"
              />
            </div>
            <label htmlFor="sale-price" className="t-label">SALE PRICE</label>
            <input 
              type="float"
              id="sale-price"
              name="sale-price"
              className="t-input t-sale-price"
              onChange={event => updateSalePrice(event.target.value)}
            />
            <label htmlFor="enable-sale" className="t-label">ENABLE SALE</label>
            <input 
              type="checkbox"
              id="enable-sale"
              name="enable_sale"
              className="t-input t-enable-sale"
              onChange={updateSaleEnabled}
            />
            <label htmlFor="new-arrival" className="t-label">NEW ARRIVAL</label>
            <input 
              type="checkbox"
              id="new-arrival"
              name="new-arrival"
              className="t-input t-new-arrival"
              onChange={updateNewArrival}
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
