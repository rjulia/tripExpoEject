import {StyleSheet} from 'react-native'
import theme from '../../theme'
import { buttonStyles, inputStyles } from '../../styles'

export default StyleSheet.create({
  container: {
    // defaultflex: 1,
    marginVertical: 20,
    // justifyContent: 'flex-start',
    // alignItems: 'center',
    // alignContent: 'flex-start'
  },

  containerButton :{
    ...buttonStyles.containerButton,

    marginTop: 40,
  },
  textButton :{
    ...buttonStyles.textButton,
  },
  textButtonDate: {
    ...buttonStyles.textButton,
    color: theme.colors.placeholder,
  },
  input: {
    ...inputStyles.input,
    marginBottom: 50,
  },
  title: {
    fontSize: 32,
    color: theme.colors.text,
    marginBottom: 10,
  },
  message: {
    color: theme.colors.grey,
    fontSize: 14,
    marginBottom: 20
  },
  dateBox: {
    flexDirection: 'row',
    width: '100%',
  },
  boxDateButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 8,
  },
  containerDateButton: {
    borderBottomColor: '#d8d8d8',
    borderBottomWidth: 1,
    flex: 1,
    marginHorizontal: 10,
    marginVertical: 20,
  },
  containerDateEnd: {
    marginRight: 0
  },
  containerDateStart: {
    marginLeft: 0
  },
  containerCalendar: {
    width: '100%',
    flex: 1,
  },
  errors: {
    ...inputStyles.error
  },
  titleCalendar: {
    color: theme.colors.text,
    fontSize: 16,
    marginVertical: 10,
    textAlign: 'center'
  }
})