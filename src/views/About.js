import { h } from 'hyperapp'
import { Markup } from './../styles'
import { setHTML } from './../scripts'

export default (state, actions) =>
  <section>
    {(state.api_data) && <Markup oncreate={setHTML(state.api_data.options.intro)}/>}
  </section>
