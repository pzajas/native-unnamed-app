import { View, Text, StyleSheet } from 'react-native'

export const HomeScreen = () => {
  return (
    <View style={styles.screenContainer}>
      <Text>Home Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  screenContainer: {
    height: '80%',
    justifyContent: 'center',
    alignItems: 'center',
  },
})
