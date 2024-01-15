import Svg, { Path } from 'react-native-svg'
import { theme } from '../../src/styles/theme'

export const LeftArrowIcon = () => (
  <Svg width={25} height={24} viewBox="0 0 24 24" fill="none">
    <Path
      stroke={theme.colors.primary}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M12 5L5 12M5 12L12 19M5 12H19"
    />
  </Svg>
)
