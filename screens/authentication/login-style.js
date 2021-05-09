import {StyleSheet} from 'react-native'
import theme from '../../theme'
import { buttonStyles, inputStyles } from '../../styles'

export default StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    flex: 1,
    paddingLeft: 16,
    paddingRight: 16,
  },
  base: {
    alignContent: 'flex-start',
    justifyContent: 'flex-start',
    backgroundColor: '#ffffff',
    flexDirection: 'column',
  },
  divider: {
    height: 16,
  },
  headline: {
    fontSize: 30,
  },

  header: {
    padding: 0,
  },
  title: {
    color: theme.colors.text,
    textAlign: 'left',
    fontSize: 32,
    lineHeight: 35,
    fontWeight: '700',
    marginVertical: 25,
  },
  btn: {
    height: 50,
    paddingTop: 6,
  },
  containerButton: {
    ...buttonStyles.containerButton,
  },
  textButton: {
    ...buttonStyles.textButton,
  },
  input : {
    ...inputStyles.input
  },
  errors: {
    ...inputStyles.error
  },
  errorLogin: {
    textAlign: 'center',
    marginVertical: 20,
    
  },
  boxImputs: {
    marginBottom: 50,
  },
  boxForgot:{
    justifyContent: 'flex-end',
    width: '100%'
  },
  signUpBox: {
    marginBottom: 55,
    alignItems: 'center'
  },
  signUpText: {
    fontWeight: '300',
    fontSize: 16,
    lineHeight: 24,
    color: theme.colors.text
  },
  textForgot: {
    color: theme.colors.primary,
    textAlign: 'right'
  }
})