import { h } from 'hyperapp'
import { Link, Route, Switch } from '@hyperapp/router'
import { state, actions } from './state'
import { Home, About, NotFound } from './views'
import { Main, FullRule, Nav, NavLink } from './styles'

export default (state, actions) =>
  <Main oncreate={() => actions.getApiData()}>
    <Nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
    </Nav>
    <FullRule/>
    <Switch>
      <Route path="/" render={Home} />
      <Route path="/about" render={About}/>
      <Route render={NotFound} />
    </Switch>
  </Main>
