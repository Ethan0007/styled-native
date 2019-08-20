import React from 'react'

import {
  Platform,
  TouchableNativeFeedback,
  TouchableOpacity,
} from 'react-native'

export default function (props) {

  const TouchableFallback = Platform.OS === 'android'
    ? TouchableNativeFeedback
    : TouchableOpacity

  return (
    <TouchableFallback onPress={props.onPress}>
      {props.children}
    </TouchableFallback>
  )

}
