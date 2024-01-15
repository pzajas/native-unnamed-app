import Svg, { Path } from 'react-native-svg'
import { theme } from '../../src/styles/theme'
export const FiltersIcon = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <Path
      stroke={theme.colors.primary}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11 19h10M3 19h3M8.5 21.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM19 12h2M3 12h11M16.5 14.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM13 5h8M3 5h5M10.5 7.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
    />
  </Svg>
)
export default FiltersIcon
