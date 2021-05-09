import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import CText from '../custom-text/custom-text'
import styles from './button-styles'
export default function Button({
  containerStyle,
  textStyle,
  text = 'start',
  onPress,
  fontF='',
}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={[
          containerStyle,
          styles.container
        ]}
      >
        <CText
          fontF={fontF}
          style={{
            ...textStyle,
            ...styles.text
          }}
        >
          {text}
        </CText>
      </View>
    </TouchableOpacity>
  )
}
