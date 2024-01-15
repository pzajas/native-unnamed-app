import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { OnlineDrawerNavigation } from './OnlineDrawerNavigation'

export const MainStack = () => {
  const Stack = createNativeStackNavigator()

  return (
    <Stack.Navigator
      screenOptions={() => ({
        headerShown: false,
        gestureEnabled: false,
      })}
    >
      <Stack.Screen name="OnlineScreenStack" component={OnlineDrawerNavigation} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}
