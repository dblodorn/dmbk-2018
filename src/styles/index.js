import { h } from "hyperapp"
import { Link } from '@hyperapp/router'
import picostyle, { keyframes } from "picostyle"
const styled = picostyle(h) 

import { colors, y } from './theme.json'

const Main = styled('main')({
  height: '100vh',
  width: '100vw',
  background: colors.black,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  padding: '3rem'
})

const bigType = {
  fontFamily: 'authentic-sans',
  letterSpacing: '1px',
  color: colors.white,
  fontSize: '10vmin',
  fontWeight: '400',
  lineHeight: '1.35'
}

const flexRow = {
  display: 'flex',
  flexDirection: 'row'
}

const FullRule = styled('hr')({
  width: '100%'
})

const H1 = styled('h1')({
  ...bigType,
})

const zoom = keyframes({
  from: {
    transform: 'scale(0.5)'
  },
  to: {
    transform: 'scale(2)'
  },
})

const Markup = styled('div')({
  '> *': {
    ...bigType
  },
  '> p > a': {
    ...bigType,
    textDecoration: 'underline',
  },
  '> p > a:hover': {
    textDecoration: 'line-through'
  }
})

const Nav = styled('nav')({
  ...flexRow
})

const NavLink = styled(Link)({
  ...bigType,
  marginRight: '5vmin',
  ':hover': {
    textDecoration: 'line-through'
  },
  ':last-child': {
    marginRight: '0'
  }
})

module.exports = {
  Main,
  H1,
  Markup,
  FullRule,
  Nav,
  NavLink
}