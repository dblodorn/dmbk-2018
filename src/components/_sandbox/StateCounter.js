import { h } from "hyperapp"
import { state, actions } from './state'
import { Main, H1 } from './styles'

const App = (state, actions) => (
  <Main>
    <H1>DMBK {state.count}</H1>
    <div>
      <button onclick={() => actions.down(1)}>-</button>
      <button onclick={() => actions.up(1)}>+</button>
    </div>
  </Main>
)

export default App