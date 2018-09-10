import { state } from './state'
import { location } from '@hyperapp/router'
import { flattenCategories } from './../scripts'

const API_URL = 'https://dmbk.io/wp-json/dmbk-io-api/v1/core'

const dataController = (url, state) => {
  state.data_status = 'fetching'
  return new Promise((resolve, reject) => {
    fetch(url, { method: 'GET'})
      .then(res => resolve(res))
      .catch(err => reject(err))
  })
}

const actions = {
  setApiData: (res) => ({ api_data: res }),
  setProjectData: (res) => ({ all_projects: flattenCategories(res.api_data.projects)}),
  getApiData: api_data => (state, actions) => dataController(API_URL, state)
    .then(response => response.json())
    .then(state.data_status = 'loaded')
    .then((res) => actions.setApiData(res))
    .then((res) => actions.setProjectData(res)),
  location: location.actions
}

export {
  actions
}