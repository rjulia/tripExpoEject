/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import _ from 'lodash'
import React, { useState } from 'react'
import { 
  View, 
  ImageBackground, 
  Text, 
  TouchableOpacity, 
  Modal,
  Alert
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import styles from './home-styles'
import { CText, Button } from '../../components'
import AppIntroSlider from 'react-native-app-intro-slider'
import slides from './data-splash'

const Home = ({navigation}) => {

  const [isOpenModal, setiIOpenModal] = useState(false)
  
  const renderItem = ({ item }) => {
    return (
      <View style={styles.container} key={item.key}>
        {/* <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.linearGradient}> */}
        <ImageBackground source={item.image} style={styles.image}>
          <View style={styles.box}>
            <CText
              fontF='extraBold'
              style={styles.title}
            >
              {item.title}
            </CText>
            <CText
              style={styles.subtitle}
              fontF='normal'>
              {item.text}
            </CText>

          </View>
        </ImageBackground>
      </View>
    )
  }
  const RenderPagination = ({ activeIndex }) => {
    return (
      <View style={styles.containerPagination}>
        <View style={styles.dotsContainer}>

          {
            _.map(slides, (slide) => (
              <View
                key={slide.key}
                style={[
                  styles.dot,
                  activeIndex === slide.key && styles.dotActive
                ]}
              />
            ))
          }
        </View>
        <TouchableOpacity
          style={styles.containerButton}
          onPress={() => navigation.navigate('Modal',{
            action: 'login',
            title: 'Login with Email',
          })}>
          <Text style={styles.textButton}>Get started!</Text>

        </TouchableOpacity>
      </View>
    )
  }
  return (
    <AppIntroSlider
      keyExtractor={(item) => item.key.toString()}
      renderItem={renderItem}
      data={slides}
      // onDone={onDone}
      renderPagination={(activeIndex) => <RenderPagination activeIndex={activeIndex} />}
      // activeDotStyle={styles.activeDotStyle}
      // renderDoneButton={renderDoneButton}
    />
  )
}

export default Home

