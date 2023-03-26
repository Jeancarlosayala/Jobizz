import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { buttonStyle } from './ButtonStyle'

const Button = ({children, onPress, style}) => {
  return (
    <TouchableOpacity style={buttonStyle[style]} onPress={onPress}>
        {children}
    </TouchableOpacity>
  )
}

export default Button