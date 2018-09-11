import { h } from 'hyperapp'
import { Link } from '@hyperapp/router'
import picostyle from 'picostyle'
const styled = picostyle(h)
import * as _ from './mixins'
import { colors, z } from './theme.json'

const Main = styled('main')({
  ..._.flexColumn,
  width: '100%',
  zIndex: z.main,
  padding: `${_.topSpacingMobile} ${_.spacingUnit(2)} ${_.spacingUnit(2)}`,
  '@media (min-width: 1240px)': {
    padding: `${_.topSpacing} ${_.spacingUnit(4)} ${_.spacingUnit(4)}`
  }
})

const H1 = styled('h1')({
  ..._.megaType(colors.white),
})

const NavLink = styled(Link)({
  ..._.smallType(colors.white),
  marginRight: '5vmin',
  ':hover': {
    ..._.hoverCursor,
    textDecoration: 'line-through',
    color: colors.blue
  },
  ':last-child': {
    marginRight: '0'
  },
  '.active': {
    textDecoration: 'line-through',
    pointerEvents: 'none'
  }
})

const NavLinkLarge = styled(Link)({
  ..._.megaType(colors.white),
  ':hover': {
    ..._.hoverCursor,
    textDecoration: 'line-through',
    color: colors.blue
  },
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
    ..._.hoverCursor,
    textDecoration: 'line-through',
    color: colors.blue
  }
})

export {
  Main,
  H1,
  NavLink,
  NavLinkLarge,
  Markup
}