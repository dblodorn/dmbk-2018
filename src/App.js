import { h } from 'hyperapp'
import { Route, Switch } from '@hyperapp/router'
import { state, actions } from './state'
import { Header } from './components'
import { Home, About, Work, NotFound } from './views'
import { Main } from './styles'

export default (state, actions) =>
  <div>
    <Header state={state}/>
    <Main oncreate={() => actions.getApiData()}>
      <Switch>
        <Route path="/" render={props => Home(state, actions)}/>
        <Route path="/work" render={props => Work(state, actions)}/>
        <Route path="/about" render={props => About(state, actions)}/>
        <Route render={NotFound}/>
      </Switch>
    </Main>
  </div>
