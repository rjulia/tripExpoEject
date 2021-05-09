/* eslint-disable no-unused-vars */
/* eslint-disable react/display-name */
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { useTheme } from 'react-native-paper'
import {
  CreateItinerary,
  Map,
} from '../screens'
import { IconButton } from 'react-native-paper'

const ItineraryStack = createStackNavigator()

const ItineraryNavigation = (props) => {
  const {colors} = useTheme()
  return (
    <ItineraryStack.Navigator
      screenOptions={({ route, theme }) => ({
        headerStyle :{backgroundColor: colors.primary},
        headerTintColor: colors.background,
        headerTitleStyle: {
          fontWeight: 'bold',
          textTransform: 'uppercase',
          fontSize: 24
        },
        headerLeft: ({onPress}) =>(
          <IconButton
            icon='chevron-left'
            size={30}
            color={colors.background}
            onPress={onPress}/>
        )
      })}
      initialRouteName={Map}
    >
      <ItineraryStack.Screen name="Map" component={Map} 
        options={({ route }) => ({
          headerLeft: null,
          headerTitle: 'ITINERARY'
        })} 
      />
      {/* <ItineraryStack.Screen name="CreateItinerary" component={CreateItinerary} /> */}
    </ItineraryStack.Navigator>
  )
}

export default ItineraryNavigation