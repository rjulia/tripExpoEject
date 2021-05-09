import _ from 'lodash'
import React from 'react'
const env = process.env
import { connect } from 'react-redux'
import { LinearGradient } from 'expo-linear-gradient'
import { Dimensions, Animated, View, Text, Image, StatusBar, TouchableOpacity, ImageBackground } from 'react-native'
import { deleteUser } from '../../redux/actions/UserActions'
import Icon from 'react-native-vector-icons/Feather'
import Backdrop from './components/backdrop/back-drop'
import styles from './home-trip-style'
import { CText } from '../../components'

const CreateTripView = ({
  navigation,
  trips,
  // loading,
  // onGetTrip,
  onDeleteUser,
}) => {

  
  const handelExit = () => {
    alert('exit')
    onDeleteUser()
    navigation.navigate('Login')
  }
  // const cardHomeProps = {
  //   handelExit: handelExit,
  //   onGetTrip,
  //   navigation
  // }

  const { width } = Dimensions.get('window')
  const SPACING = 10
  const ITEM_SIZE = width * 0.8
  const EMPTY_ITEM_SIZE = (width - ITEM_SIZE) / 2
  const scrollX = React.useRef(new Animated.Value(0)).current
  return (
    <View style={styles.container}>
      <Backdrop dataCard={trips} scrollX={scrollX}/>
      <StatusBar hidden />
      <View style={styles.titleBoxCarousel}>
        <CText
          fontF='extraBold'
          style={styles.titleCarousel}
        >
          Let&#39;s go!
        </CText>
        <Text style={styles.subtitleCarousel}>Where are you travelling?</Text>
      </View>
      <Animated.FlatList
        showsHorizontalScrollIndicator={false}
        data={trips}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        bounces={false}
        decelerationRate={0.2}
        contentContainerStyle={{ alignItems: 'center' }}
        snapToInterval={ITEM_SIZE}
        snapToAlignment='start'
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true }
        )}
        scrollEventThrottle={16}
        renderItem={({ item, index }) => {
          if (!item.title) {
            return <View style={{ width: EMPTY_ITEM_SIZE }} />
          }
          let uri

          if (!_.isEmpty(item.imgObj)) {
            uri  = `https://res.cloudinary.com/${env.REACT_NATIVE_CLOUDINARY_CLOUD_NAME}/${item.imgObj.public_id}.${item.imgObj.format}`
          }

          const inputRange = [
            (index - 2) * ITEM_SIZE,
            (index - 1) * ITEM_SIZE,
            index * ITEM_SIZE,
          ]

          const translateY = scrollX.interpolate({
            inputRange,
            outputRange: [100, 70, 100],
          })

          if (item.initial ) {
            return (
              <View style={{ 
                width: ITEM_SIZE }}>
                <Animated.View
                  style={[styles.box,{
                    marginHorizontal: SPACING * 2,
                    padding: SPACING * 2.5,
                    paddingBottom: SPACING * 3,
                    transform: [{ translateY }], 
                    minHeight: 460,      
                  }]}
                > 
                  <View style={styles.posterImage}>
                    <Image
                      source={item.source }
                      style={styles.posterImage}
                    />
                  </View>
                  {/* TODO: add premium logical
                  <Text style={{ fontSize: 24 }} numberOfLines={1}>
                    {item.title}
                  </Text> */}
                  <Text style={styles.message}>
                    {item.message}
                  </Text>
                  <TouchableOpacity
                    style={styles.containerButton}
                    onPress={() => navigation.navigate('Modal',{
                      action: 'create-trip',
                      title: 'Create a new trip',
                      message: 'Filling in the info in the below to get started'
                    })}>
                    <Text style={styles.textButton}>Create a new trip</Text> 
                  </TouchableOpacity>
                </Animated.View>
              </View>
            )
            
          } else {   
            return (
              <View style={{ 
                width: ITEM_SIZE }}>
                <Animated.View
                  style={[styles.box,{
                    transform: [{ translateY }],
                    minHeight: 460,
                    overflow: 'hidden',
                    marginHorizontal: SPACING * 2,
                  }]}
                > 
                  <ImageBackground 
                    source={!_.isEmpty(item.imgObj) ? {uri: uri} : item.source } 
                    style={[styles.image, { 
                      width: ITEM_SIZE,
                      borderRadius: 25,
                      
                    }]}
                  >
                    <LinearGradient
                      // Background Linear Gradient
                      colors={['transparent', 'rgba(0,0,0,0.8)']}
                      style={styles.background}
                    />
                    <View style={styles.authorContainer}>
                      <Text style={styles.author}>{_.get(item, 'imgObj.context.custom.alt')}</Text>
                      <Text style={styles.descriptionImage}>{_.get(item, 'imgObj.context.custom.caption')}</Text>
                    </View>
                    <TouchableOpacity
                      style={styles.containerTrashButton}
                      // TODO delete trip
                      onPress={() => handelExit()}>
                      <Icon name='trash-2' size={30} color="#fff" />
                    </TouchableOpacity>

                    <CText 
                      fontF='bold'
                      style={styles.titleTravel}
                    >
                      {item.title}
                    </CText>
                    <Text style={styles.date}>{item.date}</Text>
                    <TouchableOpacity
                      style={styles.containerRoundedButton}
                      onPress={item.buttonAction}>
                      <Icon name='arrow-right' size={18} color="#fff" />
                    </TouchableOpacity>
                  </ImageBackground>
                  
                </Animated.View>
              </View> 
            )
          }
        }}
      />
    </View>
  )
}


const mapStateToProps = (state) => ({
  user: state.user
})

const mapDispatchToProps = (dispatch) => ({
  onDeleteUser: () => dispatch(deleteUser()),
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateTripView)
