import { h } from 'hyperapp'
import { TransitionInOut } from './../components'
import { NavLinkLarge } from './../styles'

export default (state, actions) =>
  <TransitionInOut>
    <section key={'work'}>
      <ul>
        {(state.all_projects) && state.all_projects.map((item, i) => (
          <li key={item.id}>
            <NavLinkLarge>
              <span>{item.title}</span>
            </NavLinkLarge>
          </li>
        ))}
      </ul>
    </section>
  </TransitionInOut>
  