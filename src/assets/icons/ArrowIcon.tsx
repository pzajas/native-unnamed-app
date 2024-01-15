import Svg, { Path } from 'react-native-svg'
import { theme } from '../../src/styles/theme'
export const ArrowIcon = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <Path
      stroke={theme.colors.primary}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 9.856v8.5a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-8.5m17 2.5-10-9-10 9"
    />
  </Svg>
)
