import { h } from 'hyperapp'
import picostyle from 'picostyle'
import { NavLink } from './../styles'
import { flexRowCenteredVert, flexRow, spacingUnit } from './../styles/mixins'
import { height, z } from './../styles/theme.json'
const styled = picostyle(h) 

export default (props) => {
  return (
    <HeaderWrapper>
      <Nav>
        <NavLink to="/"><span>Home</span></NavLink>
        <NavLink to="/about"><span>About</span></NavLink>
      </Nav>
    </HeaderWrapper>
  )
}

// STYLES
const HeaderWrapper = styled('header')({
  ...flexRowCenteredVert,
  width: '100%',
  height: height.header.desk,
  position: 'fixed',
  bottom: 0,
  left: 0,
  zIndex: '9000'
})

const Nav = styled('nav')({
  ...flexRow,
  paddingRight: spacingUnit(2),
  marginLeft: 'auto'
})