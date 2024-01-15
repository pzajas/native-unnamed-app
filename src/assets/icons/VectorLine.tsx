import Svg, { Path } from 'react-native-svg'
import { theme } from '../../src/styles/theme'
export const VectorLine = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <Path stroke={theme.colors.slight} strokeWidth={0.5} d="M0 1h328" />
  </Svg>
)
export default VectorLine
