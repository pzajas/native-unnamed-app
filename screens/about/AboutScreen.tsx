import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export const AboutScreen = () => {
  return (
    <View style={styles.screenContainer}>
      <Text>AboutScreen</Text>
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
