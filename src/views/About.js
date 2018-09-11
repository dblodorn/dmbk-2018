import { h } from 'hyperapp'
import { Markup, SectionTop } from './../styles'
import { setHTML } from './../scripts'
import { TransitionInOut } from './../components'

export default (state, actions) =>
  <TransitionInOut>
    <SectionTop key={'about'}>
      {(state.api_data) && <Markup oncreate={setHTML(state.api_data.options.intro)}/>}
    </SectionTop>
  </TransitionInOut>
