import { h } from 'hyperapp'
import { Link } from '@hyperapp/router'
import picostyle from 'picostyle'
const styled = picostyle(h)
import * as _ from './mixins'
import { colors, height } from './theme.json'

const Main = styled('main')({
  ..._.flexColumn,
  width: '100%',
  paddingTop: `calc(${height.header.desk} +  ${_.spacingUnit(2)})`,
  paddingLeft: _.spacingUnit(4),
  paddingRight: _.spacingUnit(4),
  paddingBottom: _.spacingUnit(4)
})

const H1 = styled('h1')({
  ..._.megaType(colors.white),
})

const NavLink = styled(Link)({
  ..._.smallType(colors.white),
  marginRight: '5vmin',
  ':hover': {
    textDecoration: 'line-through'
  },
  ':last-child': {
    marginRight: '0'
  }
})

const Markup = styled('div')({
  '> p': {
    ..._.bigType(colors.white),
    marginBottom: _.spacingUnit(2)
  },
  '> p > a': {
    ..._.bigType(colors.white),
    textDecoration: 'underline',
  },
  '> p > a:hover': {
    textDecoration: 'line-through'
  }
})

export {
  Main,
  H1,
  NavLink,
  Markup
}