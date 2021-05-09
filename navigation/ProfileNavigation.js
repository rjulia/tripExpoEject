/* eslint-disable no-unused-vars */
/* eslint-disable react/display-name */
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import {
  Settings,
  Forecast,
  Documents,
  PhoneAgenda,
  Todolist,
  Profile,
} from '../screens'
import { IconButton } from 'react-native-paper'

const ProfileStack = createStackNavigator()

const ProfileNavigation = () => {

  return (
    <ProfileStack.Navigator
      screenOptions={({ route }) => ({
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
      initialRouteName={Profile}
    >
      <ProfileStack.Screen name="Profile" component={Profile} 
        options={({ route }) => ({
          headerLeft: null,
        })} 
      />
      {/*
      <ProfileStack.Screen name="Settings" component={Settings} />
      <ProfileStack.Screen name="TodoList" component={Todolist} />
      <ProfileStack.Screen name="Forecast" component={Forecast} />
      <ProfileStack.Screen name="Documents" component={Documents} />
      <ProfileStack.Screen name="PhoneAgenda" component={PhoneAgenda} /> */}
    </ProfileStack.Navigator>
  )
}

export default ProfileNavigation