const TokenServices = {
  getJwt() {
    return window.localStorage.getItem('pearegrineKey')
  },

  clearToken() {
    window.localStorage.removeItem('pearegrineKey')
  }
}

export default TokenServices