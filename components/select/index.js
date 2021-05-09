/* eslint-disable no-unused-vars */
import _ from 'lodash'
import React, { useState, useRef, useEffect } from 'react'
import { Text, View, TouchableHighlight } from 'react-native'
import MultiSelect from 'react-native-multiple-select'
import styles from './select-styles'
import theme from '../../theme'
import IconSimple from 'react-native-vector-icons/SimpleLineIcons'


const Select = ({onChange, name, label, data, error, editable, withIcon}) => {
  
  const [selectedItems, setSelectedItems] = useState([])
  const [isOpen, setIsOpen] = useState(false)

  const onSelectedItemsChange = (selectedItems) => {
    setIsOpen(false)
    setSelectedItems(selectedItems)
    onChange(name, _.head(selectedItems))
  }


  const multiSelectRef = useRef()
  const closeMultiSelectIfOpened = () => {
    setIsOpen(!multiSelectRef.current.state.selector)
    if (multiSelectRef.current.state) {
      multiSelectRef.current._toggleSelector()
    }
  }

  useEffect(() => {
    console.log('multiSelectRef', multiSelectRef)
  }, [multiSelectRef])

  return (
    <View style={styles.pickerSection}>
      {isOpen && <Text>{label}</Text> }
      {withIcon ? withIcon : null}
      <TouchableHighlight onPressIn={() => closeMultiSelectIfOpened()} style={styles.iconArrow}>
        <IconSimple name={isOpen ? 'arrow-up' :'arrow-down'} size={16} />
      </TouchableHighlight>
      <MultiSelect
        ref={multiSelectRef}
        single={true}
        hideTags={false}
        items={data}
        uniqueKey="id"
        fontSize={18}
        // onToggleList={() => closeMultiSelectIfOpened()}
        onSelectedItemsChange={onSelectedItemsChange}
        selectedItems={selectedItems}
        selectText={label}
        searchInputPlaceholderText="Search Items..."
        // onChangeInput={ (text)=> console.log('change', text)}
        // altFontFamily="ProximaNova-Light"
        tagRemoveIconColor="#CCC"
        tagBorderColor={theme.colors.primary}
        tagTextColor={theme.colors.primary}
        selectedItemTextColor={theme.colors.primary}
        selectedItemIconColor={theme.colors.primary}
        itemTextColor={theme.colors.primary}
        displayKey="name"
        styleDropdownMenu={{
          borderBottomColor:  theme.colors.lightGrey,
          borderBottomWidth: 1,
          height: 50,
        }}
        styleTextTag={{
          color: '#f2f'
        }}
        styleInputGroup={{
          height: 50,
        }}
        searchInputStyle={{
          color: theme.colors.primary,
          height: 44,

        }}
        itemFontSize={16}
        styleTextDropdown={{
        }}
        styleListContainer={{
          backgroundColor: '#fff',

        }}
        styleItemsContainer={{
          justifyContent: 'center'
        }}
        styleRowList={{
          height: 44,
        }}
        styleSelectorContainer={{
            
        }}
      />

    </View>
  )
  
}

export default Select
