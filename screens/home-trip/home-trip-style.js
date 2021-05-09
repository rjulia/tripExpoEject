import {StyleSheet, Platform} from 'react-native'
import { buttonStyles } from '../../styles'
import theme from '../../theme'

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleBoxCarousel: {
    position: 'absolute',
    top: 80,
    width: '100%',
    paddingHorizontal: 30,
  },
  titleCarousel: {
    fontSize: 48,
    textAlign: 'left',
    color: 'white'
  },
  subtitleCarousel: {
    fontSize: 16,
    lineHeight: 24,
    marginVertical: 20,
    color: 'white',
  },
  text: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  image: {
    flex: 1,
    alignItems: 'center',
    resizeMode: 'cover',
    justifyContent: 'center'
  },
  button: {
    justifyContent: 'center',
    width: 200,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#fff',
    backgroundColor: 'rgba(52, 52, 52, 0.8)'
    
  },
  containerButton: {
    ...buttonStyles.containerButton,
    marginVertical: 30,
  },
  containerRoundedButton: {
    ...buttonStyles.containerButton,
    width: 35,
    height: 35,
    position: 'absolute',
    bottom: 18,
    right: 36, 
  },
  titleTravel: {
    position: 'absolute',
    left: 36,
    bottom: 46,
    fontWeight: 'bold',
    fontSize:32,
    color: 'white'
  },
  date: {
    fontSize: 14,
    color: 'white',
    position: 'absolute',
    left: 36,
    bottom: 18,
  },
  containerTrashButton: {
    ...buttonStyles.containerButton,
    backgroundColor: 'transparent',
    position: 'absolute',
    top: 18,
    right: 36,
    width: 35,
    height: 35,
  },
  textButton: {
    ...buttonStyles.textButton,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  message: {
    fontSize: 16,
    fontWeight: '300',
    lineHeight: 24,
  },
  box: {
    backgroundColor: theme.colors.white,
    borderRadius: 20,
    shadowColor: '#000',
    alignItems: 'center',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: Platform.OS === 'ios' ? null : 5,
  },
  posterImage: {
    width: 216,
    height: 216,
    resizeMode: 'cover',
    borderRadius: 216 / 2,
    margin: 0,
    marginBottom: 50,
    shadowColor: 'rgba(23, 101, 127, 0.3)',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
    // elevation: Platform.OS === 'ios' ? null : 5,
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 190,
  },
  authorContainer: {
    position: 'absolute',
    left: 40,
    top: 20,
    maxWidth: 200
  },
  author: {
    fontSize: 14,
    color: theme.colors.white,
    fontWeight: '700'
  },
  descriptionImage: {
    fontSize: 12,
    color: theme.colors.white,
  }
})
