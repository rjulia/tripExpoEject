/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Expenses } from '../screens'

const Stack = createStackNavigator()

const ExpensesNavigation = () => {

  return (
    <Stack.Navigator>
      <Stack.Screen name="Expenses" component={Expenses} />
    </Stack.Navigator>
  )
}

export default ExpensesNavigation