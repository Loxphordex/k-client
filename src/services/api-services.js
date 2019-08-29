import config from '../config'

const ApiServices = {
  userRegistration(username, password) {
    return fetch(`${config.API_ENDPOINT}/api/auth/register`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
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