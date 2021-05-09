/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Agenda } from '../screens'

const Stack = createStackNavigator()

const AgendaNavigation = () => {

  return (
    <Stack.Navigator>
      <Stack.Screen name="Agenda" component={Agenda} />
    </Stack.Navigator>
  )
}

export default AgendaNavigation