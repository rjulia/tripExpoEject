/* eslint-disable no-unused-vars */
/* eslint-disable react/display-name */
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { IconButton } from 'react-native-paper'
import { HomeTrip, CreateTrip } from '../screens'
const TripStack = createStackNavigator()

const TripNavigation = () => {

  return (
    <TripStack.Navigator

      initialRouteName={HomeTrip}>
      <TripStack.Screen name="HomeTrip" component={HomeTrip} 
        options={({ route }) => ({
          headerShown: false
        })} 
      />
      <TripStack.Screen 
        name="CreateTrip" 
        component={CreateTrip} 
        options={({ route }) => ({
          headerStyle :{backgroundColor: 'orange'},
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            textTransform: 'uppercase'
          },
          headerLeft: ({onPress}) =>(
            <IconButton
              icon='chevron-left'
              size={30}
              color={'#fff'}
              onPress={onPress}/>
          )
        })}
      />
    </TripStack.Navigator>
  )
}

export default TripNavigation