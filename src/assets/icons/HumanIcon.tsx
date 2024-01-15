import Svg, { Path } from 'react-native-svg'

export const HumanIcon = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={10} height={12} fill="none" {...props}>
    <Path
      stroke="#686868"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M1 11.114c0-1.241 1.761-2.247 3.933-2.247 2.173 0 3.934 1.006 3.934 2.247M4.933 6.619a2.81 2.81 0 1 0 0-5.619 2.81 2.81 0 0 0 0 5.619Z"
    />
  </Svg>
)
