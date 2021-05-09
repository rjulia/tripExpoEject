import {StyleSheet} from 'react-native'
import theme from '../../theme'
export default StyleSheet.create({
  container: {
    position: 'relative',
    backgroundColor: theme.colors.primary,
    height: 60,
    borderRadius: 30,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: theme.colors.primary,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  text: {
    color: theme.colors.white,
    textTransform: 'capitalize'
  }
})