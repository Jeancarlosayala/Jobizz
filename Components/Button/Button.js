import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { buttonStyle } from './ButtonStyle'

const Button = ({children, onPress, styles}) => {
  return (
    <TouchableOpacity style={buttonStyle[styles]} onPress={onPress}>
        {children}
    </TouchableOpacity>
  )
}

export default Button