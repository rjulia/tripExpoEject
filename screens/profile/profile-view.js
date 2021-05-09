import React, {useState} from 'react'
import { FlatList, SafeAreaView, Text, TouchableOpacity } from 'react-native'
import styles from './profile-style'
import Icon from 'react-native-vector-icons/Feather'

const Item = ({ item, onPress, style }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
    <Text style={styles.title}>{item.title}</Text>
    <Icon name={item.iconName} size={24} color={'tomato'} />
  </TouchableOpacity>
)

const ProfileView = ({DATA, navigation}) => {
  const [selectedId] = useState(null)

  const RenderItem = ({ item, index }) => {

    return (
      <Item
        index={index}
        item={item}
        onPress={() => navigation.navigate(item.link)}
      />
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({item, index}) => (
          <RenderItem item={item} index={`list-item-${index}`} />
        )}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  )
}

export default ProfileView
