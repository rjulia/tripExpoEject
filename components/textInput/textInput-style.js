import {StyleSheet} from 'react-native'
import theme from '../../theme'
export default StyleSheet.create({
  textInput: {
    borderColor: theme.colors.primary,
    color: theme.colors.text,
    borderWidth: 1,
    padding: 10,
  },
  label: {
    color: theme.colors.text,
    marginBottom: 10,
    textTransform: 'capitalize'
  }
})