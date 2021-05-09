/* eslint-disable no-unused-vars */
import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Login from '../authentication'
import CreateTrip from '../create-trip'
import styles from './modal-style'

const Modal = ({route, navigation}) => {

  const { title, action } = route.params

  const viewProps = {
    ...route.params
  }

  console.log(route.params)

  const ViewModal = () => {
    let component
    switch (action) {
    case 'login':
      component = <Login {...viewProps} />
      break
    case 'create-trip':
      component = <CreateTrip {...viewProps} />
      break
    default:
      component = <View></View>
      break
    }

    return component
  }


  return (
    <View style={styles.modalContainer}>
      <TouchableOpacity
        onPress={() => navigation.pop()}>
        <Text style={styles.closeButton}>CLOSE</Text>
      </TouchableOpacity>
      <View style={styles.modalBox}>
        <ViewModal/>

      </View>
    </View>
  )
}

export default Modal
