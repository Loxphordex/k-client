import config from '../config'
import { classList } from '../components/CartComponents/getCartInfo'
import { sizes } from '../constants/sizes'

export function generateUpdateEndpoint(data) {
  return `${config.API_ENDPOINT}/api/images?id=${data.id}&name=${data.name}&link=${data.link}&description=${data.description}&type=${data.type}&price=${data.price}&small=${data.small}&medium=${data.medium}&large=${data.large}&xLarge=${data.xLarge}&xxLarge=${data.xxLarge}`
}

export function addCart(image, cart, handleError, setCart, sizeSelection) {
  if (image && cart && handleError && setCart, sizeSelection) {
    const availableProducts = image[sizeSelection]
    
    handleError(null)
    if (cart.length > 0) {
      // check if image exists in cart, if so, add count to image
      let existingImage
      const updatedCart = cart.map(i => {
        if (i.id === image.id) {
          // if image exists in cart
          i.count++
          existingImage = true
          if (i.selectedSizes && i.selectedSizes[sizeSelection]) {
            i.selectedSizes[sizeSelection]++
          }
          else {
            i.selectedSizes = {
              ...i.selectedSizes,
              [sizeSelection]: 1
            }
          }
        }

        return i
      })

      // if more shirts in cart than available, throw error
      // if (image.count > availableProducts) {
      //   handleError({
      //     type: "cart-unavailable",
      //     message: "No additional sizes are available"
      //   })
      //   return
      // }
      if (!existingImage) {
        image.count = 1
        image.selectedSizes = {[sizeSelection]: 1}
        updatedCart.push(image)
      }

      setCart(updatedCart)
    } 
    else {
      image.count = 1
      image.selectedSizes = {[sizeSelection]: 1}
      cart.push(image)
      setCart(cart)
    }
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