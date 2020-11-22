require('dotenv').config()

export default {
  CLOUD_NAME: process.env.REACT_APP_CLOUD_NAME,
  API_ENDPOINT: process.env.REACT_APP_API_ENDPOINT,
  PUBLISHABLE_KEY: process.env.PUBLISHABLE_KEY,
  TEST_API_ENDPOINT: process.env.TEST_API_ENDPOINT
}
