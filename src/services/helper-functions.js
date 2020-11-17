import config from '../config'
import { classList } from '../routes/Cart/getCartInfo'

export function generateUpdateEndpoint(data) {
  return `${config.API_ENDPOINT}/api/images?id=${data.id}&name=${data.name}&link=${data.link}&description=${data.description}&type=${data.type}&price=${data.price}&small=${data.small}&medium=${data.medium}&large=${data.large}&xLarge=${data.xLarge}&xxLarge=${data.xxLarge}`
}

export function addCart(image, cart, handleError, handleImage) {
  if (image && cart && handleError && handleImage) {
    const availableProducts = image[image.size.toLowerCase()]
    const imageObject = {
      count: 1,
      details: image
    }

    if (cart[image.name] && cart[image.name][image.size]) {
      imageObject.count = cart[image.name][image.size].count + 1
      if (imageObject.count > availableProducts) {
        handleError({
          type: "cart-unavailable",
          message: "No additional sizes are available"
        })
        return
      }
    }

    handleError(null)
    handleImage(image, imageObject)
  }
}

export function removeFromCart(image, cart, handleError, setCart) {
  if (
    image && 
    image.details && 
    image.details.name && 
    cart[image.details.name]) 
  {
    delete cart[image.details.name]
    setCart(cart)
  }
}

export function updateStorageCart(cart) {
  window.localStorage.setItem('pearegrineCart', JSON.stringify(cart))
}

export function objectIsEmpty(obj) {
  return Object.keys(obj).length === 0 ? true : false
}