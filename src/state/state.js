import { location } from '@hyperapp/router'

const state = {
  data_status: false,
  api_data: false,
  all_projects: [],
  location: location.state,
  count: 0
}

export {
  state
}