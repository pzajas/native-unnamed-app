import Svg, { Path } from 'react-native-svg'
import { theme } from '../../src/styles/theme'

export const RightArrowIcon = () => (
  <Svg width={25} height={24} fill="none" viewBox="0 0 25 24">
    <Path
      stroke={theme.colors.primary}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M12.5 19l7-7-7-7m7 7h-14"
    />
  </Svg>
)
