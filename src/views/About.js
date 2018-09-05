import { h } from 'hyperapp'
import { state, actions } from './../state'
import { Markup, H1 } from './../styles'
import { setHTML } from './../scripts'

export default (state) => {
  console.log(state)
  return (
    <section>
      <H1>About</H1>
      <Markup oncreate={setHTML(`<p>${state.match}</p>`)}/>
    </section>
  )
}
