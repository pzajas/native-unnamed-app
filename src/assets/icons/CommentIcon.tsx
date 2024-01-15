import { theme } from '../../src/styles/theme'
import Svg, { Path, SvgProps } from 'react-native-svg'

export const CommentIcon = (props: SvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="none" {...props}>
    <Path
      stroke={theme.colors.primary}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 10a9 9 0 0 1-13.815 7.605L1 19l1.395-4.185A9 9 0 1 1 19 10Z"
    />
  </Svg>
)
