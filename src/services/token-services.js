const TokenServices = {
  getJwt() {
    return window.localStorage.getItem('pearegrineKey')
  }
}

export default TokenServices