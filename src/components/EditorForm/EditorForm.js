import React, { useEffect, useState } from 'react'
import '../../templates/form.css'
import './EditorForm.css'

export default function EditorForm({
  images,
  editorImageId,
  editorOpen,
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
}) {
  const [image, setImage] = useState(null)

  useEffect(() => {
    setEditedImage()
    populateExistingValues()
    disableDocumentScroll()

    return () => {
      setImage(null)
      document.body.style.overflow = 'auto'
    }
  }, [editorOpen, image])

  function setEditedImage() {
    const editedImage = images.find(i => i.id === parseInt(editorImageId, 10))
    setImage(editedImage)
  }

  function populateExistingValues() {
    if (image) {
      if (image.name) updateNewName(image.name)
      if (image.link) updateNewLink(image.link)
      if (image.description) updateNewDescription(image.description)
      if (image.price) updateNewPrice(image.price)
      if (image.availableSizes.small) updateSmall(image.availableSizes.small)
      if (image.availableSizes.medium) updateMedium(image.availableSizes.medium)
      if (image.availableSizes.large) updateLarge(image.availableSizes.large)
      if (image.availableSizes.xlarge) updateXLarge(image.availableSizes.xlarge)
      if (image.availableSizes.xxlarge) updateXXLarge(image.availableSizes.xxlarge)
      if (image.category) updateCategory(image.category)
      if (image.sale_price) updateSalePrice(image.sale_price)
      if (image.sale_enabled) updateSaleEnabled(image.sale_enabled)
      if (image.new_arrival) updateNewArrival(image.new_arrival)
    }
  }

  function disableDocumentScroll() {
    if (editorOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }

  return (
    <section className='editor-container'>
      <div className='editor-background' onClick={() => disableEditor()} />
      <fieldset className='t-fieldset editor-field'>
        <h2 className='t-header'>EDIT IMAGE</h2>
        <form onSubmit={event => handleSubmitEdit(event)}>
          <label htmlFor='new-name' className='t-label'>
            NAME
          </label>
          <input
            type='text'
            id='new-name'
            name='new-name'
            className='t-input'
            placeholder={image && image.name ? image.name : ''}
            onChange={event => updateNewName(event.target.value)}
          />
          <label htmlFor='new-link' className='t-label'>
            LINK
          </label>
          <input
            type='text'
            id='new-link'
            name='new-link'
            className='t-input'
            placeholder={image && image.link ? image.link : ''}
            onChange={event => updateNewLink(event.target.value)}
          />
          <label htmlFor='new-description' className='t-label'>
            DESCRIPTION
          </label>
          <textarea
            id='new-description'
            name='new-description'
            className='t-input new-description'
            placeholder={image && image.description ? image.description : ''}
            onChange={event => updateNewDescription(event.target.value)}
          />
          <label htmlFor='new-price' className='t-label'>PRICE</label>
          <input
            type='number'
            id='new-price'
            name='new-price'
            className='t-input'
            placeholder={image && image.price ? image.price : ''}
            onChange={event => updateNewPrice(event.target.value)}
          />
          <div className='size-container'>
            <div className='size-unit'>
              <label htmlFor='new-small' className='t-label t-size-label'>S</label>
              <input
                type='number'
                id='new-small'
                name='new-small'
                className='t-input t-size'
                placeholder={image && image.availableSizes.small ? image.availableSizes.small : ''}
                onChange={event => updateSmall(event.target.value)}
              />
            </div>
            <div className='size-unit'>
              <label htmlFor='new-medium' className='t-label t-size-label'>M</label>
              <input
                type='number'
                id='new-medium'
                name='new-medium'
                className='t-input t-size'
                placeholder={image && image.availableSizes.medium ? image.availableSizes.medium : ''}
                onChange={event => updateMedium(event.target.value)}
              />
            </div>
            <div className='size-unit'>
              <label htmlFor='new-large' className='t-label t-size-label'>L</label>
              <input
                type='number'
                id='new-large'
                name='new-large'
                className='t-input t-size'
                placeholder={image && image.availableSizes.large ? image.availableSizes.large : ''}
                onChange={event => updateLarge(event.target.value)}
              />
            </div>
            <div className='size-unit'>
              <label htmlFor='new-xLarge' className='t-label t-size-label'>XL</label>
              <input
                type='number'
                id='new-xLarge'
                name='new-xLarge'
                className='t-input t-size'
                placeholder={image && image.availableSizes.xlarge ? image.availableSizes.xlarge : ''}
                onChange={event => updateXLarge(event.target.value)}
              />
            </div>
            <div className='size-unit'>
              <label htmlFor='new-xxLarge' className='t-label t-size-label'>XXL</label>
              <input
                type='number'
                id='new-xxLarge'
                name='new-xxLarge'
                className='t-input t-size'
                placeholder={image && image.availableSizes.xxlarge ? image.availableSizes.xxlarge : ''}
                onChange={event => updateXXLarge(event.target.value)}
              />
            </div>
          </div>
          <div className='category-container'>
            <h3 className='t-label'>CATEGORY</h3>
            <label htmlFor='category-none' className='t-label t-label-radio'>NONE</label>
            <input
              type='radio'
              id='category-none'
              name='category'
              className='t-input t-radio t-category'
              // checked={image && !image.category}
              onChange={event => updateCategory(event.target.value)}
              value=''
            />
            <label htmlFor='category-shirt' className='t-label t-label-radio'>SHIRT</label>
            <input
              type='radio'
              id='category-shirt'
              name='category'
              className='t-input t-radio t-category'
              // checked={image && image.category === 'shirt'}
              onChange={event => updateCategory(event.target.value)}
              value='shirt'
            />
            <label htmlFor='category-sweatshirt' className='t-label t-label-radio'>SWEATSHIRT</label>
            <input
              type='radio'
              id='category-sweatshirt'
              name='category'
              className='t-input t-radio t-category'
              // checked={image && image.category === 'sweatshirt'}
              onChange={event => updateCategory(event.target.value)}
              value='sweatshirt'
            />
            <label htmlFor='category-jeans' className='t-label t-label-radio'>JEANS</label>
            <input
              type='radio'
              id='category-jeans'
              name='category'
              className='t-input t-radio t-category'
              // checked={image && image.category === 'jeans'}
              onChange={event => updateCategory(event.target.value)}
              value='jeans'
            />
            <label htmlFor='category-hat' className='t-label t-label-radio'>HAT</label>
            <input
              type='radio'
              id='category-hat'
              name='category'
              className='t-input t-radio t-category'
              // checked={image && image.category === 'hat'}
              onChange={event => updateCategory(event.target.value)}
              value='hat'
            />
          </div>
          <label htmlFor='sale-price' className='t-label'>SALE PRICE</label>
          <input 
            type='float'
            id='sale-price'
            name='sale-price'
            className='t-input t-sale-price'
            placeholder={image && image.sale_price ? image.sale_price : null}
            onChange={event => updateSalePrice(event.target.value)}
          />
          <label htmlFor='enable-sale' className='t-label'>ENABLE SALE</label>
          <input 
            type='checkbox'
            id='enable-sale'
            name='enable_sale'
            className='t-input t-enable-sale'
            checked={image && image.sale_enabled}
            onChange={updateSaleEnabled}
          />
          <label htmlFor='new-arrival' className='t-label'>NEW ARRIVAL</label>
          <input 
            type='checkbox'
            id='new-arrival'
            name='new-arrival'
            className='t-input t-new-arrival'
            checked={image && image.new_arrival}
            onChange={updateNewArrival}
          />
          <button type='submit' className='t-button editor-button'>
            SUBMIT
          </button>
          <button
            className='t-button editor-button cancel-button'
            onClick={() => disableEditor()}
          >
            CANCEL
          </button>
        </form>
      </fieldset>
    </section>
  )
}
