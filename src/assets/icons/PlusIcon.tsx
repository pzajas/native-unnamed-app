import { theme } from '../../src/styles/theme'
import Svg, { Path } from 'react-native-svg'

export const PlusIcon = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={26} height={26} fill="none" {...props}>
    <Path
      stroke={theme.colors.neutral}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 12H3M12 3v18"
    />
  </Svg>
)
