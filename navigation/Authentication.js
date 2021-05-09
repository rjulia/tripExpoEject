import React, { useState, useEffect } from 'react'
import { useStore } from 'react-redux'

// navigation components
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Home, Modal } from '../screens'
import TabsNavigation from './TabsNavigation'


const Stack = createStackNavigator()

const RootStackScreen = ({store}) => {


  return (
    <Stack.Navigator
      mode="modal"
      screenOptions={{
        headerShown: false,
        animationEnabled: false,
        cardStyle: { backgroundColor: 'transparent' },
        cardOverlayEnabled: true,
        cardStyleInterpolator: ({ current: { progress } }) => ({
          cardStyle: {
            opacity: progress.interpolate({
              inputRange: [0, 0.5, 0.9, 1],
              outputRange: [0, 0.25, 0.7, 1],
            }),
          },
          overlayStyle: {
            opacity: progress.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 0.5],
              extrapolate: 'clamp',
            }),
          },
        }),
      }}
    >
      {
        store.getState().user.jwt === null ? (
          <Stack.Screen name="Home" component={Home} />
        ) : (
          <>
            <Stack.Screen name="TabsNavigation" component={TabsNavigation} />
              
          </>
        )}
      <Stack.Screen 
        name="Modal" 
        component={Modal}
        options={({ navigation }) => ({
          animationEnabled: true,
          onClick: () => navigation.pop()
        })}
      />
    </Stack.Navigator>
  )
}

const Authentication = () => {
  const store = useStore()
  
  const [route, setRoute] = useState(
    store.getState().user.jwt ? 'HomeTrip' : 'Home',
  )
  useEffect(() => {
    store.subscribe(() => {
      setRoute(store.getState().user.jwt ? 'HomeTrip' : 'Home')
    })
  }, [])
  return (
    <NavigationContainer initialRouteName={route}>
      <RootStackScreen store={store}/>

    </NavigationContainer>
  )
}

export default Authentication