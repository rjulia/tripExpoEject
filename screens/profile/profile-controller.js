import React from 'react'
import ProfileView from './profile-view'

const SettingsStyles = ({navigation}) => {
  const DATA = [
    {
      id: 1,
      title: 'Item List',
      iconName: 'clipboard',
      link: 'TodoList'
    },
    {
      id: 2,
      title: 'Phone agenda',
      iconName: 'phone',
      link: 'PhoneAgenda'
    },
    {
      id: 3,
      title: 'Forecast',
      iconName: 'cloud-drizzle',
      link: 'Forecast'
    },
    {
      id: 4,
      title: 'Documents',
      iconName: 'file-text',
      link: 'Documents'
    },
    {
      id: 5,
      title: 'SettingHome',
      iconName: 'settings',
      link: 'Settings'
    },
    
  ]
  const viewProps = {
    DATA,
    navigation
  }
  return (
    <ProfileView {...viewProps} />
  )
}

export default SettingsStyles
