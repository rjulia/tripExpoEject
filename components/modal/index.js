/* eslint-disable no-unused-vars */
import _ from 'lodash'
import React, {useEffect, useRef } from 'react'
import { View, Animated, Modal, Dimensions, PanResponder, StyleSheet } from 'react-native'


const ModalComponent =  ({visible, onDismiss, children}) => {

  const panY = new Animated.Value(Dimensions.get('screen').height)
  const resetPositionAnim = Animated.timing(panY, {
    toValue: 0,
    duration: 200,
    useNativeDriver: true
  })
  const closeAnim = Animated.timing(panY, {
    toValue: Dimensions.get('screen').height,
    duration: 400,
    useNativeDriver: true
  })

  const handleDismiss = () => {
    closeAnim.start(() => onDismiss())
  }

  useEffect(() => {
    if (visible && !_.isNull(panY)) {
      resetPositionAnim.start()
    }
  }, [panY])

  return (
    <Modal
      animated
      animationType="fade"
      visible={visible}
      transparent
      onRequestClose={() => handleDismiss()}
    >
      <View style={styles.overlay}>
        <Animated.View 
          style={[
            styles.container,
            {
              transform: [{
                translateY: panY
              }]
            }
          ]}>
          {children}
        </Animated.View>
      </View>
    </Modal>
  )
}

export default ModalComponent


const styles = StyleSheet.create({
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    flex: 1,
    justifyContent: 'flex-end',

  },
  container: {

    backgroundColor: 'white',
    paddingTop: 12,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    padding: 20,
    paddingBottom: 40,
    paddingVertical: 60,
    height: 600,
  },
})
