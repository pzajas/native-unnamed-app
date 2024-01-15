import { StyleSheet, TouchableOpacity, FlatList, View, Text } from 'react-native'

import { useNavigation, DrawerActions } from '@react-navigation/native'
interface IMenuItem {
  item: {
    title: string
    screen: string
    type?: string
  }
}
interface offlineProps {
  offline?: boolean
}

export const DrawerContent = ({ offline }: offlineProps) => {
  const closeDrawer = () => {
    navigation.dispatch(DrawerActions.closeDrawer())
  }
  const navigation = useNavigation<any>()
  const subPages = [
    { title: 'Home', screen: 'HomeScreen' },
    { title: 'About', screen: 'AboutScreen' },
    { title: 'Contact', screen: 'ContactScreen' },
    { title: 'Dummy', screen: 'AboutScreen' },
    { title: 'Dummy', screen: 'ContactScreen' },
  ]

  const functionalityPages = [
    { title: 'Dummy', screen: 'AboutScreen' },
    { title: 'Dummy', screen: 'AboutScreen' },
    { title: 'Dummy', screen: 'AboutScreen' },
  ]

  const navigateToScreen = (screenName: string, type?: string) => () => {
    navigation.navigate(screenName as never, type)
  }

  const renderSubPagesList = ({ item }: IMenuItem) => (
    <View style={styles.pagesContainer}>
      <TouchableOpacity onPress={navigateToScreen(item.screen)}>
        <Text>{item.title}</Text>
      </TouchableOpacity>
    </View>
  )

  const renderFunctionalityPagesList = ({ item }: IMenuItem) => (
    <View style={styles.pagesContainer}>
      <TouchableOpacity>
        <Text>{item.title}</Text>
      </TouchableOpacity>
    </View>
  )

  return (
    <View style={styles.drawerContentContainer}>
      <TouchableOpacity onPress={closeDrawer} style={styles.closeIconContainer}></TouchableOpacity>
      <TouchableOpacity
        onPress={navigateToScreen(!offline ? 'OnlineScreen' : 'OfflineScreen')}
        style={styles.homeIconContainer}
      ></TouchableOpacity>
      <View style={styles.subpagesContainer}>
        <FlatList scrollEnabled={false} data={subPages} renderItem={renderSubPagesList} />
      </View>
      <View style={styles.functionalitiesContainer}>
        <FlatList scrollEnabled={false} data={functionalityPages} renderItem={renderFunctionalityPagesList} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  drawerContentContainer: {
    marginLeft: 16,
  },
  pagesContainer: {
    marginBottom: 24,
  },
  closeIconContainer: {
    left: 185,
    top: 65,
    width: 30,
    height: 30,
    position: 'absolute',
  },
  homeIconContainer: {
    marginTop: 110,
    width: 40,
    height: 40,
    marginBottom: 24,
    marginLeft: -6,
  },
  functionalitiesContainer: {
    marginTop: 48,
  },
  subpagesContainer: {
    marginTop: 24,
  },
  socialMediaIconsContainer: {
    marginTop: 24,
  },
})
