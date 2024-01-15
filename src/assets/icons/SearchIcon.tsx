import { theme } from '../../src/styles/theme'
import Svg, { Path } from 'react-native-svg'
export const SearchIcon = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="none" {...props}>
    <Path
      stroke={theme.colors.primary}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m19 19-4.343-4.343m0 0A8 8 0 1 0 3.343 3.343a8 8 0 0 0 11.314 11.314Z"
    />
  </Svg>
)
