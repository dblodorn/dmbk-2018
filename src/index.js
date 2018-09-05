import withReduxDevtools from '@frontmen/hyperapp-redux-devtools'
import { location } from "@hyperapp/router"
import { app } from "hyperapp"
import { state, actions } from './state'
import App from './App'

const main = withReduxDevtools(app)(
  state,
  actions, 
  App,
  document.body
)

location.subscribe(main.location)