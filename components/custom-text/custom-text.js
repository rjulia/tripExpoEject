import React from 'react'
import { Text } from 'react-native'
import { AppLoading } from 'expo'
import {
  useFonts,
  Raleway_300Light,
  Raleway_400Regular,
  Raleway_700Bold,
  Raleway_800ExtraBold,
} from '@expo-google-fonts/raleway'

export default ({
  fontF,
  style,
  children
}) => {
  let [fontsLoaded] = useFonts({
    Raleway_300Light,
    Raleway_400Regular,
    Raleway_700Bold,
    Raleway_800ExtraBold,
  })
  let fontFamily = ''
  switch (fontF) {
  case 'ligth':
    fontFamily = 'Raleway_300Light'
    break
  case 'bold':
    fontFamily = 'Raleway_700Bold'
    break
  case 'extraBold':
    fontFamily = 'Raleway_800ExtraBold'
    break
  case 'normal':
    fontFamily = 'Raleway_400Regular'
    break
  }

  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
      <Text
        style={{
          ...style,
          fontFamily,
        }}>
        {children}
      </Text>
    )
  }
}