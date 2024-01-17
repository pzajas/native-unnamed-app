import { useNavigation } from '@react-navigation/native'
import { View, Text, StyleSheet, Image, SafeAreaView } from 'react-native'
import { Button } from 'react-native-paper'
import { SliderBox } from 'react-native-image-slider-box'

export const WelcomeScreen = () => {
  const navigation = useNavigation()

  const navigateToScreen = (screenName: string) => () => {
    navigation.navigate(screenName)
  }

  const image = require('./../../assets/images/woman_face_2.png')

  const images = [image, image, image]

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, justifyContent: 'space-evenly', paddingHorizontal: 16 }}>
        <SliderBox
          images={images}
          sliderBoxHeight={400}
          onCurrentImagePressed={(index: number) => console.warn(`image ${index} pressed`)}
          dotColor="#E75480"
          dotStyle={{
            width: 20,
            height: 20,
            borderRadius: 15,
            borderWidth: 2,
            borderColor: 'red',
            marginHorizontal: 10,
            padding: 0,
            margin: 0,
          }}
          paginationBoxStyle={{
            position: 'absolute',
            bottom: 0,
            padding: 0,
            alignItems: 'center',
            alignSelf: 'center',
            justifyContent: 'center',
            paddingVertical: 20,
          }}
        />
        <View>
          <Text style={{ fontSize: 25, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 }}>
            Lorem ipsum dolor sit amet, consectetur.
          </Text>
          <Text style={{ fontSize: 16, textAlign: 'center' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
            dolore
          </Text>
        </View>
        <View style={styles.startButtonContainer}>
          <Button mode="contained" onPress={navigateToScreen('LoginScreen')} style={{ backgroundColor: '#E75480' }}>
            Start
          </Button>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 300,
  },
  startButtonContainer: {
    position: 'absolute',
    bottom: 0,
    left: 16,
    borderRadius: 8,
    width: '100%',
  },
})
