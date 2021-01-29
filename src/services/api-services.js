import config from '../config'
import TokenServices from './token-services'
import { generateUpdateEndpoint } from './helper-functions'

const ApiServices = {
  // Image services
  getImages() {
    return fetch(`${config.API_ENDPOINT}/api/images`).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    )
  },

  getImagesOnSale() {
    return fetch(`${config.API_ENDPOINT}/api/images/sale`).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    )
  },

  getImagesOnNewArrival() {
    return fetch(`${config.API_ENDPOINT}/api/images/arrivals`).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    )
  },

  postImage(image) {
    return fetch(`${config.API_ENDPOINT}/api/images`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        Authorization: `Bearer ${TokenServices.getJwt()}`
      },
      body: JSON.stringify(image)
    }).then(res => (!res.ok ? res.json().then(e => Promise.reject(e)) : res.json()))
  },

  updateImage(data) {
    return fetch(
      generateUpdateEndpoint(data),
      {
        method: 'PATCH',
        headers: {
          'content-type': 'application/json',
          Authorization: `Bearer ${TokenServices.getJwt()}`
        }
      }
    ).then(res => (!res.ok ? res.json().then(e => Promise.reject(e)) : res.json()))
  },

  deleteImage(id) {
    return fetch(`${config.API_ENDPOINT}/api/images?id=${id}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${TokenServices.getJwt()}`
      }
    }).then(res => (!res.ok ? res.json().then(e => Promise.reject(e)) : res.json()))
  },

  // Auth services
  userRegistration(username, password) {
    return fetch(`${config.API_ENDPOINT}/api/auth/register`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({ username, password })
    }).then(res => (!res.ok ? res.json().then(e => Promise.reject(e)) : res.json()))
  },

  userLogin(username, password) {
    return fetch(`${config.API_ENDPOINT}/api/auth/login`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({ username, password })
    }).then(res => (!res.ok ? res.json().then(e => Promise.reject(e)) : res.json()))
  },

  // Stripe API services
  testPaySessionEndpoint() {
    return fetch(`${config.API_ENDPOINT}/api/pay/create_session`)
      .then(res => (!res.ok ? res.json().then(e => Promise.reject(e)) : res.json()))
  },

  testLocalPaymentSession(cart) {
    return fetch(`${config.API_ENDPOINT}/api/pay/create_session`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({ ...cart })
    }).then(res => (!res.ok ? res.json().then(e => Promise.reject(e)) : res.json()))
  },

  // Email services
  postTestEmail() {
    return fetch(`${config.API_ENDPOINT}/api/email/test_email`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        Authorization: `Bearer ${TokenServices.getJwt()}`
      },
    }).then(res => !res.ok ? res.json().then(e => Promise.reject(e)) : res.json())
  },

  // Discover services
  getDiscoverPosts() {
    return fetch(`${config.API_ENDPOINT}/api/discover`)
      .then(res => (!res.ok ? res.json().then(e => Promise.reject(e)) : res.json()))
  },

  getDiscoverPostById(id) {
    return fetch(`${config.API_ENDPOINT}/api/discover?id=${id}`).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    )
  },

  postNewDiscoverEntry(entry) {
    return fetch(`${config.API_ENDPOINT}/api/discover`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        Authorization: `Bearer ${TokenServices.getJwt()}`
      },
      body: JSON.stringify(entry)
    }).then(res => (!res.ok ? res.json().then(e => Promise.reject(e)) : res.json()))
  },

  deleteDiscoverEntry(id) {
    return fetch(`${config.API_ENDPOINT}/api/discover?id=${id}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        Authorization: `Bearer ${TokenServices.getJwt()}`
      }
    })
      .then(res => (!res.ok ? res.json().then(e => Promise.reject(e)) : res.json()))
  }
}

export default ApiServices
