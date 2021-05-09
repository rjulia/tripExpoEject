/* eslint-disable react/display-name */
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
// import Itenerary from '../screens/Itenerary/Itenerary'
import AgendaNavigation from './AgendaNavigation'
import ExpensesNavigation from './ExpensesNavigation'
import ProfileNavigation from './ProfileNavigation'
import ItineraryNavigation from './ItineraryNavigation'
import TripNavigation from './TripNavigation'
import Icon from 'react-native-vector-icons/Feather'


const TabsNavigation = () => {
  const Tab = createBottomTabNavigator()

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName
          if (route.name === 'Itinerary') {
            iconName = focused
              ? 'map'
              : 'map'
          } else if (route.name === 'Agenda') {
            iconName = focused ? 'calendar' : 'calendar'
          } else if ( route.name === 'Expenses') {
            iconName = focused ? 'pie-chart' : 'pie-chart'
          } else if ( route.name === 'RootProfile') {
            iconName = focused ? 'settings' : 'settings'
          } else if ( route.name === 'HomeApp') {
            iconName = focused ? 'home' : 'home'
          }
          return <Icon name={iconName} size={size} color={color} />
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen
        name="HomeApp"
        component={TripNavigation}
      />
      <Tab.Screen
        name="Itinerary"
        component={ItineraryNavigation}
      />
      <Tab.Screen
        name="Agenda"
        component={AgendaNavigation}
      />
      <Tab.Screen
        name="Expenses"
        component={ExpensesNavigation}
      />
      <Tab.Screen
        name="RootProfile"
        component={ProfileNavigation}
      />
    </Tab.Navigator>
  )
}

export default TabsNavigation
