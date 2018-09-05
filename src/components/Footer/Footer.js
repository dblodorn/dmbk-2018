import { h } from "hyperapp"
import picostyle from "picostyle"
const styled = picostyle(h) 

import { colors, y, z, fx } from './../../styles/theme.json'

const FooterWrapper = styled('footer')({
  width: '100%',
  height: y.footer_desk,
  backgroundColor: colors.beige,
  boxShadow: fx.shadow,
  position: 'fixed',
  zIndex: z.footer,
  bottom: 0,
  left: 0
})

const Footer = () => (
  <FooterWrapper>
    <p>WHAT</p>
  </FooterWrapper>
)

export default Footer
