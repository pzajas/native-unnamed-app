import { theme } from '../../src/styles/theme'
import Svg, { Path } from 'react-native-svg'

export const AmbassadorMarkerIcon = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={16} height={20} fill="none" {...props}>
    <Path
      fill={theme.colors.primary}
      stroke={theme.colors.primary}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.707}
      d="m15 19-7-5-7 5V3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16Z"
    />
  </Svg>
)
