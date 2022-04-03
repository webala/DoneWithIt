import { StyleSheet, Text, View, ImageBackground, Dimensions, Image } from 'react-native'
import React from 'react'


const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground 
        style={styles.image}
        source={require('../assets/background.jpg')}
      >
          <View style={styles.logoView}>
            <Image 
                source={require('../assets/logo-red.png')}
                style={styles.logo}
                />
            <Text>Sell What You Don't Need</Text>
          </View>
          
        </ImageBackground>
    </View>
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex:1,
        width: Dimensions.get('window').width,
        height:  Dimensions.get('window').height,
        justifyContent: 'center',
        resizeMode: 'cover',
        alignItems: 'center'
    },
    logoView: {
        width: 200,
        height: 100,
        bottom: 200,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        height: 100,
        width: 100
    }

})