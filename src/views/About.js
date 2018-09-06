import { h } from 'hyperapp'
import { Markup } from './../styles'
import { setHTML } from './../scripts'
import { TransitionInOut } from './../components'

export default (state, actions) =>
  <TransitionInOut>
    <section key={'about'}>
      {(state.api_data) && <Markup oncreate={setHTML(state.api_data.options.intro)}/>}
    </section>
  </TransitionInOut>
