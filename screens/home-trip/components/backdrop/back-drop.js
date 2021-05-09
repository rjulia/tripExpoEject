import _ from 'lodash'
import React from 'react'
import { View, Dimensions, Animated, FlatList, Image } from 'react-native'
import MaskedView from '@react-native-community/masked-view'
import Svg, { Rect } from 'react-native-svg'
const { width, height } = Dimensions.get('window')
const env = process.env
const ITEM_SIZE = width * 0.80
const BACKDROP_HEIGHT = height
const AnimatedSvg = Animated.createAnimatedComponent(Svg)

const Backdrop = ({dataCard, scrollX}) => {
  return <View style={{ height: BACKDROP_HEIGHT, width, position: 'absolute' }} renderToHardwareTextureAndroid>
    <FlatList
      data={dataCard.reverse()}
      keyExtractor={(item) => item.id.toString()}
      removeClippedSubviews={false}
      renderToHardwareTextureAndroid
      contentContainerStyle={{width, height: BACKDROP_HEIGHT}}
      renderItem={({ item, index }) => {
        let uri
        if (!item.source) {
          return null
        }
        if (!_.isEmpty(item.imgObj)) {
          uri  = `https://res.cloudinary.com/${env.REACT_NATIVE_CLOUDINARY_CLOUD_NAME}/${item.imgObj.public_id}.${item.imgObj.format}`
        }
        
        const translateX = scrollX.interpolate({
          inputRange: [(index - 2) * ITEM_SIZE, (index - 1) * ITEM_SIZE],
          outputRange: [-width, 0],
        })
        return (
          <MaskedView
            style={{
              width,
              height,
              position: 'absolute',
            }}
            maskElement={
              <AnimatedSvg
                width={width}
                height={height}
                style={{
                  backgroundColor: 'transparent',
                  transform: [{ translateX }],
                }}
              >
                <Rect
                  x='0'
                  y='0'
                  width={width}
                  height={height}
                  fill='red'
                />
              </AnimatedSvg>
            }
          >
            <Image
              blurRadius={20}
              source={!_.isEmpty(item.imgObj) ? {uri: uri} : item.source}
              style={{
                width: width,
                height: BACKDROP_HEIGHT,
                resizeMode: 'cover',
              }}
            />
          </MaskedView>
        )
      }}
    />
  </View>
}

export default Backdrop
