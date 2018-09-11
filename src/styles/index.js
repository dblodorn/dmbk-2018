import { h } from 'hyperapp'
import { Link } from '@hyperapp/router'
import picostyle from 'picostyle'
const styled = picostyle(h)
import * as _ from './mixins'
import { colors, z, type } from './theme.json'

const Main = styled('main')({
  ..._.flexColumn,
  width: '100%',
  zIndex: z.main,
  padding: `${_.topSpacingMobile} ${_.spacingUnit(1)} ${_.spacingUnit(2)}`,
  '@media (min-width: 1240px)': {
    padding: `0 ${_.spacingUnit(0)} ${_.spacingUnit(4)}`
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
    fontFamily: type.fonts.serif,
    fontSize: type.sizes.big.desk,
    letterSpacing: '1px',
    color: colors.white,
    lineHeight: '1.25',
    fontWeight: '400',
    marginBottom: _.spacingUnit(2)
  },
  '> p > a': {
    fontFamily: type.fonts.sans,
    textDecoration: 'underline',
    color: colors.white
  },
  '> p > a:hover': {
    ..._.hoverCursor,
    textDecoration: 'line-through',
    color: colors.blue
  }
})

const SectionTop = styled('section')({
  marginTop: '-3.75rem'
})

export {
  Main,
  H1,
  NavLink,
  NavLinkLarge,
  Markup,
  SectionTop
}