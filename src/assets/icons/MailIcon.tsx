import Svg, { Path } from 'react-native-svg'
import { theme } from '../../src/styles/theme'
export const MailIcon = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <Path
      stroke={theme.colors.primary}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 7.356a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-10Z"
    />
    <Path
      stroke={theme.colors.primary}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m21 7.356-9 6-9-6"
    />
  </Svg>
)
export default MailIcon
