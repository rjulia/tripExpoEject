import { StatusBar, StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: '#fff'
  },
  item: {
    padding: 20,
    marginHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
  },
  title: {
    fontSize: 20,
  },
})
