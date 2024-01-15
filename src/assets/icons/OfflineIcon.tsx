import Svg, { Circle, Path } from 'react-native-svg'
import { theme } from '../../src/styles/theme'

export const OfflineIcon = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props} height={43} width={43} viewBox="0 0 44 43">
    <Path
      d="M6.5 6L36.5 36"
      stroke={theme.colors.primary}
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M29.3667 19.4333C30.7319 20.0996 32.0084 20.9338 33.1667 21.9167"
      stroke={theme.colors.primary}
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M9.8335 21.9167C12.3036 19.8514 15.2766 18.477 18.4502 17.9333"
      stroke={theme.colors.primary}
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M19.3501 9.41666C22.9208 9.12894 26.5128 9.5636 29.9118 10.6947C33.3108 11.8258 36.4471 13.6301 39.1334 16"
      stroke={theme.colors.primary}
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M3.8667 16C6.17864 13.9564 8.82953 12.3321 11.7 11.2"
      stroke={theme.colors.primary}
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M15.7168 27.85C17.4088 26.6479 19.4329 26.0021 21.5085 26.0021C23.584 26.0021 25.6081 26.6479 27.3001 27.85"
      stroke={theme.colors.primary}
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Circle cx={21.5} cy={34} r={3} fill={theme.colors.primary} />
  </Svg>
)
