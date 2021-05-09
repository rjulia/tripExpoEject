import {StyleSheet} from 'react-native'
import theme from '../../theme'

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    padding: 20,
    flex: 1,
    alignItems: 'center',
    resizeMode: 'cover',
    justifyContent: 'center'
  },
  box:{
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  title: {
    color: 'white',
    fontSize: 48,
    textAlign: 'left',
    maxWidth: 280,
  },
  subtitle: {
    textAlign: 'center',
    width: '100%',
    fontSize: 16,
    color: 'white',
    marginVertical: 40,
  },
  activeDotStyle: {
    backgroundColor: theme.colors.white
  },
  containerPagination: {
    position:'absolute',
    height: 300,
    bottom: 0,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 18,
  },
  dotsContainer: {
    width: '100%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: 35,
  },
  dot: {
    height: 8,
    width: 8,
    backgroundColor: theme.colors.white,
    borderRadius: 4,
    marginHorizontal: 8,
    opacity: 0.5,
  },
  dotActive: {
    opacity: 1,
    width: 16,
  },
  containerButton: {
    backgroundColor: theme.colors.primary,
    height: 60,
    borderRadius: 30,
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButton: {
    color: theme.colors.white,
    textTransform: 'capitalize'
  }
})
