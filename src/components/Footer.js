import { h } from 'hyperapp'
import picostyle from 'picostyle'
import { colors, height, z, fx } from './../styles/theme.json'
const styled = picostyle(h)

export default () =>
  <FooterWrapper>
    <p>WHAT</p>
  </FooterWrapper>

// STYLES
const FooterWrapper = styled('footer')({
  width: '100%',
  height: height.footer.desk,
  backgroundColor: colors.beige,
  boxShadow: fx.shadow,
  position: 'fixed',
  zIndex: z.footer,
  bottom: 0,
  left: 0
})
