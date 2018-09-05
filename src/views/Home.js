import { h } from "hyperapp"
import { state } from './../state'
import { H1 } from './../styles'

export default (state, actions) => {
  console.log(state)
  return (
    <section>
      <H1>Dain Blodorn Kim</H1>
    </section>
  )
}
