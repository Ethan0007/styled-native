import React from 'react'

import {
  Platform,
  TouchableNativeFeedback,
  TouchableOpacity,
} from 'react-native'

export default function () {

  const TouchableFallback = Platform.OS === 'android'
    ? TouchableNativeFeedback
    : TouchableOpacity

  return (
    <TouchableFallback onPress={this.props.onPress}>
      {this.props.children}
    </TouchableFallback>
  )

}
