/* eslint-disable no-unused-vars */
import _ from 'lodash'
import React, { PureComponent } from 'react'
import { ListItem, TouchableOpacity } from 'react-native'
// import {FloatLabelTextInput} from 'react-native-floating-label-text-input'
import styles from './dataPicker-styles'

export class DatePick extends PureComponent {
  render() {
    const {label, error, style, editable, withIcon, CTA, ...rest} = this.props
    return (
      <ListItem>
        <TouchableOpacity
          style={styles.datepickSection}
          onPress={() => CTA()}>
          {withIcon ? withIcon : null}
          {/* <FloatLabelTextInput
            placeholder={label}
            style={{paddingVertical: 20, fontSize: 20}}
            pointerEvents="none"
            returnKeyType={'done'}
            editable={false}
            selectTextOnFocus={false}
            // onKeyPress={KeyboardDismiss.bind(this)}
            {...rest}
          /> */}
        </TouchableOpacity>
      </ListItem>
    )
  }
}