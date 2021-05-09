import {StyleSheet} from 'react-native'
import theme from '../../theme'

export default StyleSheet.create({

  modalContainer: {
    flex: 1,
  },
  modalBox: {
    marginTop: 200,
    backgroundColor: theme.colors.white,
    flex: 1,
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    padding: 20,

  },
  textButton: {
    color: theme.colors.white,
    textTransform: 'capitalize'
  },
  closeButton: {
    color: theme.colors.white,
    textAlign: 'right',
    marginTop: 44,
    marginEnd: 30,
  }
})
