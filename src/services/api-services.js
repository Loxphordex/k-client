import config from '../config'

const ApiServices = {
  getImages() {
    return fetch(`${config.API_ENDPOINT}/api/images`)
    .then(res => {
      return (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
    })
  },

  userRegistration(username, password) {
    return fetch(`${config.API_ENDPOINT}/api/auth/register`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({ username, password })
    })
    .then(res => {
      return (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
    })
  },

  userLogin(username, password) {
    return fetch(`${config.API_ENDPOINT}/api/auth/login`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({ username, password })
    })
    .then(res => {
      return (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
    })
  }
}

export default ApiServices