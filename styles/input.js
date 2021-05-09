import {StyleSheet} from 'react-native'
import theme from '../theme'

export default StyleSheet.create({
  input : {
    marginTop: 20,
    borderBottomColor: theme.colors.grey,
    borderBottomWidth: 1,
    height: 40,
    paddingBottom: 0,
    marginBottom: 8,
  },
  error: {
    color: theme.colors.error,
    fontSize: 14,
  }
})