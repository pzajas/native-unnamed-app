import 'react-native-gesture-handler'
import { HomeScreen } from '../../screens/HomeScreen'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { DrawerContent } from './DrawerContent'
import { UpperMenu } from '../components/UpperMenu'
import { AboutScreen } from '../../screens/about/AboutScreen'
import { ContactScreen } from '../../screens/contact/ContactScreen'

export const OnlineDrawerNavigation = () => {
  const Drawer = createDrawerNavigator()

  return (
    <Drawer.Navigator
      initialRouteName="WelcomeScreen"
      drawerContent={() => <DrawerContent offline={false} />}
      backBehavior="history"
      screenOptions={{
        drawerStyle: {
          width: 250,
        },
        drawerPosition: 'right',
        drawerType: 'front',
        header: () => <UpperMenu />,
      }}
    >
      <Drawer.Screen name="OnlineScreen" component={HomeScreen} />
      <Drawer.Screen name="HomeScreen" component={HomeScreen} />
      <Drawer.Screen name="AboutScreen" component={AboutScreen} />
      <Drawer.Screen name="ContactScreen" component={ContactScreen} />
    </Drawer.Navigator>
  )
}
