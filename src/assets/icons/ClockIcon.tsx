import Svg, { Circle, Path } from 'react-native-svg'

export const ClockIcon = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <Circle cx={9} cy={9} r={6.75} stroke="#686868" strokeLinecap="round" strokeLinejoin="round" />
    <Path stroke="#686868" strokeLinecap="round" strokeLinejoin="round" d="M8.25 6v3.75H12" />
  </Svg>
)
