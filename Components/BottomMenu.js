import { View, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import Home from '../assets/home/home.png'
import Messages from '../assets/home/messages.png'
import Notifications from '../assets/home/notifications.png'
import Saved from '../assets/home/saved.png'

const BottomMenu = () => {
  return (
    <View style={style.menu} className='flex-row items-center justify-evenly'>
      <TouchableOpacity onPress={() => Alert.alert('Menu Item')} activeOpacity={1}>
        <Image className='h-[20px] w-[20px]' source={Home} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => Alert.alert('Menu Item')} activeOpacity={1}>
        <Image className='h-[20px] w-[20px]' source={Messages} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => Alert.alert('Menu Item')} activeOpacity={1}>
        <Image className='h-[20px] w-[20px]' source={Saved} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => Alert.alert('Menu Item')} activeOpacity={1}>
        <Image className='h-[20px] w-[20px]' source={Notifications} />
      </TouchableOpacity>
    </View>
  )
}

const style = StyleSheet.create({
  menu:{
    backgroundColor: '#fff',
    height: 70
  }
})

export default BottomMenu