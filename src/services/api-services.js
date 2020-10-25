import config from '../config'
import TokenServices from './token-services'
import { generateUpdateEndpoint } from './helper-functions'

const ApiServices = {
  getImages() {
    return fetch(`${config.API_ENDPOINT}/api/images`).then(res =>
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
  }
}

export default ApiServices
