export function cartScroll() {
  const cartArea = document.getElementById('cart-area')
  const sticky = cartArea.offsetTop

  if (window.pageYOffset > sticky) {
    cartArea.classList.add('cart-scroll')
  } else {
    cartArea.classList.remove('cart-scroll')
  }
}

export function headerScroll() {
  const headerContainer = document.getElementById('mobile-header-container')
  const sticky = headerContainer.offsetTop

  if (window.pageYOffset > sticky) {
    headerContainer.classList.add('scroll')
    headerContainer.classList.add('header-scroll')
  } else {
    headerContainer.classList.remove('scroll')
    headerContainer.classList.remove('header-scroll')
  }
}

function removeJelly() {
  const jelly = document.getElementById('mobile-brand-image')
  const sticky = jelly.offsetTop

  if (window.pageYOffset > sticky) {
    jelly.classList.remove('jelly')
    jelly.classList.add('jelly-again')
  } else {
    jelly.classList.add('jelly')
    jelly.classList.remove('jelly-again')
  }
}

export function mobileScroll() {
  // removeJelly()
  cartScroll()
  headerScroll()
}