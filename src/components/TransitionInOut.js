import { h } from 'hyperapp'
import { Enter, Exit } from '@hyperapp/transitions'
import picostyle from 'picostyle'
const styled = picostyle(h)
import { topSpacing } from './../styles/mixins'

const transitionTime = 350

export default (props, children) =>
  <TransitionWrapper>
    <Enter time={transitionTime} css={{opacity: "0", transform: 'translateY(100vw)'}}>
      <Exit time={transitionTime} css={{opacity: "0", transform: 'translateY(-100vh)'}}>
        {children}
      </Exit>
    </Enter>
  </TransitionWrapper>

// STYLES
const TransitionWrapper = styled('div')({
  display: 'block',
  minHeight: topSpacing
})