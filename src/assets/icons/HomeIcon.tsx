import Svg, { Circle, Path } from 'react-native-svg'
export const HomeIcon = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <Circle cx={18.919} cy={32.973} r={2.703} fill="#18284E" />
    <Path
      stroke="#18284E"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.5}
      d="m28.924 12.673-9.145-8.001a1.306 1.306 0 0 0-1.72 0l-9.144 8a1.306 1.306 0 0 0-.446.984V24.82c0 .721.585 1.306 1.306 1.306H15c.722 0 1.307-.585 1.307-1.306v-5.225c0-.722.584-1.307 1.306-1.307h2.613c.721 0 1.306.585 1.306 1.307v5.225c0 .721.585 1.306 1.306 1.306h5.225c.722 0 1.307-.585 1.307-1.306V13.656c0-.377-.163-.735-.446-.983Z"
    />
  </Svg>
)
export default HomeIcon
