import { h } from 'hyperapp'
import { TransitionInOut } from './../components'
import { H1 } from './../styles'

export default (state, actions) =>
  <TransitionInOut>
    <section key={'home'}>
      <H1>DMBK</H1>
    </section>
  </TransitionInOut>
  