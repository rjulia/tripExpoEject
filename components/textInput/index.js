import React from 'react'
import { TextInput,Text } from 'react-native'
import styles from './textInput-style'

const TextInputView = ({
  onChangeText,
  placeholder,
  value,
  editable=true,
  label
}) => {
  return (
    <>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.textInput}
        placeholder={placeholder}
        onChangeText={(e) => onChangeText(e)}
        value={value}
        editable={editable}
      />
    </>
  )
}

export default TextInputView
