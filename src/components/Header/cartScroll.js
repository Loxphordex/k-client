export function cartScroll() {
  const cartArea = document.getElementById('cart-area')
  const sticky = cartArea.offsetTop

  if (window.pageYOffset > sticky) {
    cartArea.classList.add('cart-scroll')
  } else {
    cartArea.classList.remove('cart-scroll')
  }
}