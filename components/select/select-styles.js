import {StyleSheet} from 'react-native'
import theme from '../../theme'

export default StyleSheet.create({
  pickerSection: {
    position: 'relative',
    paddingTop: 0,
    width: '100%',
    marginTop: 0,
    marginBottom: 10,
  },
  bordernone:{

  },
  dropdownSection: {

  },
  errorMessage: {
    color: theme.colors.text,
  },
  fieldLabel: {
    color: theme.colors.text,

  },
  styleDropdownMenu: {

  },

  searchInputStyle: {
    height: 30,
    color: theme.colors.primary
  },
  styleItemsContainer: {
    backgroundColor: theme.colors.primary,

  },
  iconArrow: {
    position: 'absolute',
    alignItems: 'flex-end',
    justifyContent: 'center',
    zIndex: 1000,
    right: 0,
    top: 15,
    height: 30,
    width: 50,
    paddingRight: 10,
    backgroundColor: theme.colors.white,
  }
})