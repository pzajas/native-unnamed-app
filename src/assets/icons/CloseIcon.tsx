import Svg, { Path } from 'react-native-svg'
import { theme } from '../../src/styles/theme'
export const CloseIcon = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <Path stroke={theme.colors.primary} strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21 3 3M21 3 3 21" />
  </Svg>
)
export default CloseIcon
