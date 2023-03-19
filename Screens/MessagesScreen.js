import { View, Text, SafeAreaView, Image, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import { useFonts, Inter_700Bold, Inter_600SemiBold, Inter_400Regular } from '@expo-google-fonts/inter'

import SearchGray from '@assets/home/search.png'
import Search from '@assets/home/searchBlue.png'
import Edit from '@assets/home/edit.png'

const MessagesScreen = () => {
  const [fontsLoaded] = useFonts({
    Inter_700Bold,
    Inter_600SemiBold,
    Inter_400Regular,
  })

  if (!fontsLoaded) return null;

  return (
    <View className='bg-[#FAFAFD] px-[23px]'>
      <SafeAreaView className=''>
        <View className='flex-row items-center justify-between'>
          <Text style={{ fontFamily: 'Inter_600SemiBold', fontSize: 16 }}>Messages</Text>
          <View className='flex-row items-center space-x-[20px]'>
            <Image className='w-[24px] h-[24px]' source={Search} />
            <Image className='w-[24px] h-[24px]' source={Edit} />
          </View>
        </View>

        <View className='relative justify-center items-center mt-[16px]'>
          <Image style={style.searchIcon} source={SearchGray} />
          <TextInput className='border border-[#AFB0B6]' placeholder='Search a job or position' style={style.searchChat} />
        </View>

        <View className='mt-[24px]'>
          <Text style={style.section}>Companies</Text>

          <View className='mt-[8px]'>
            <Text>Working it</Text>
          </View>
        </View>
      </SafeAreaView>
    </View>
  )
}

const style = StyleSheet.create({
  searchChat: {
    width: 327,
    height: 40,
    borderRadius: 10,
    paddingHorizontal: 54,
    fontSize: 15,
    fontFamily: 'Inter_400Regular',
    color: '#AFB0B6'
  },
  searchIcon: {
    position: 'absolute',
    left: 26
  },
  section: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 14
  }
})

export default MessagesScreen