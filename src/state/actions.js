import { state } from './state'
import { location } from '@hyperapp/router'

const API_URL = 'https://dmbk.io/wp-json/dmbk-io-api/v1/core'

const dataController = (url) => {
  return new Promise((resolve, reject) => {
    fetch(url, { method: 'GET'})
      .then(res => resolve(res))
      .catch(err => reject(err))
  })
}

const actions = {
  getApiData: api_data => (state, actions) => dataController(API_URL)
    .then(response => response.json())
    .then((res) => actions.setApiData(res)),
  setApiData: (res) => ({ api_data: res }),
  location: location.actions,
  down: value => state => ({ count: state.count - value }),
  up: value => state => ({ count: state.count + value }),
}

export {
  actions
}