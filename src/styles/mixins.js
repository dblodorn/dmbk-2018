import { h } from 'hyperapp'
import picostyle, { keyframes } from 'picostyle'
import { colors, type, breakpoints, width, height, units, z, fx } from './theme.json'
const styled = picostyle(h)

// FUNCTIONS
export const spacingUnit = multiply => {
  return `${units.spacing * multiply}rem`
}

export const topSpacing = `calc(${height.header.desk} +  ${spacingUnit(2)})`

export const topSpacingMobile = `calc(${height.header.desk} +  ${spacingUnit(1)})`

// TYPOGRPAHY
const sansFontA = {
  fontFamily: type.fonts.sans,
  fontWeight: '400',
}

const serifFontA = {
  fontFamily: type.fonts.serif,
  fontWeight: '400',
}

const fontSizeMega = {
  fontSize: type.sizes.mega.mobile,
  '@media (min-width: 1240px)': {
    fontSize: type.sizes.mega.desk
  }
}

export const megaType = (color) => {
  return {
    ...fontSizeMega,
    ...sansFontA,
    letterSpacing: '1px',
    wordSpacing: '.5vmin',
    color: color,
    lineHeight: '1.35'
  }
}

export const mediumType = (color) => {
  return {
    ...sansFontA,
    fontSize: type.sizes.medium.desk,
    color: color,
    lineHeight: '1.35'
  }
}

export const regularType = (color) => {
  return {
    ...sansFontA,
    fontSize: type.sizes.regular.desk,
    color: color,
    lineHeight: '1.35'
  }
}

export const smallType = (color) => {
  return {
    ...sansFontA,
    fontSize: type.sizes.small.desk,
    color: color,
    lineHeight: '1.35'
  }
}

export const microType = (color) => {
  return {
    ...sansFontA,
    fontSize: type.sizes.micro.desk,
    color: color,
    lineHeight: '1.35'
  }
}

export const hoverCursor = {
  cursor: 'url(../assets/images/icons/cursor-hover.svg) 12 12, auto'
}

// FLEX UTILS
export const flexRow = {
  display: 'flex',
  flexDirection: 'row'
}

export const flexColumn = {
  display: 'flex',
  flexDirection: 'column'
}

export const flexRowCenteredVert = {
  ...flexRow,
  alignItems: 'center'
}

// ANIMATION
const zoom = keyframes({
  from: {
    transform: 'scale(0.5)'
  },
  to: {
    transform: 'scale(2)'
  },
})
