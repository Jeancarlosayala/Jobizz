import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import BGCards from '../assets/home/backgroundCard.png'
import BookMark from '../assets/home/bookmark.png'
import { useFonts, Inter_800ExtraBold, Inter_700Bold, Inter_600SemiBold, Inter_400Regular } from '@expo-google-fonts/inter'

const FeaturedJobs = ({ data }) => {
  return (
    <View>
      <FlatList
        data={data}
        renderItem={({ item }) => <CardItem item={item} />}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}

const CardItem = ({ item }) => {
  const [fontsLoaded] = useFonts({
    Inter_800ExtraBold,
    Inter_700Bold,
    Inter_600SemiBold,
    Inter_400Regular,
  })

  if (!fontsLoaded) return null;

  return (
    <TouchableOpacity activeOpacity={0.9} onPress={() => Alert.alert('See Job')}>
      <View style={[style.card, { backgroundColor: '#356899' }]}>
        <Image source={BGCards} className='w-full h-full opacity-[0.1] absolute' />
        <View className='flex-row items-center justify-evenly mt-[22px]'>
          <View style={style.logo}>
            <Image source={{uri: item.image}} style={{resizeMode: 'contain'}} className='w-[22px] h-[22px]' />
          </View>
          <View>
            <Text style={style.position}>{item.jobname}</Text>
            <Text style={style.company}>{item.company}</Text>
          </View>
          <View className='relative'>
            <TouchableOpacity onPress={() => Alert.alert('Save Job')}>
              <Image source={BookMark} style={style.bookmark} />
            </TouchableOpacity>
          </View>
        </View>

        <View className='flex-row items-center justify-evenly mt-[24px]'>
          {
            item.categories.map((i, idx) => {
              return (
                <View style={style.categories} key={idx}>
                  <Text style={{ fontFamily: 'Inter_600SemiBold', color: 'white' }} className='text-[11px]'>{i}</Text>
                </View>
              )
            })
          }
        </View>

        <View className='flex-row items-center justify-around mt-[24px]'>
          <Text style={{ fontFamily: 'Inter_600SemiBold', color: '#fff', fontSize: 13 }}>{item.payment}</Text>
          <Text style={{ fontFamily: 'Inter_600SemiBold', color: '#fff', fontSize: 13 }}>{item.location}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const style = StyleSheet.create({
  card: {
    width: 327,
    height: 186,
    borderRadius: 24,
    position: 'relative',
    marginHorizontal: 3
  },
  logo: {
    height: 46,
    width: 46,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12
  },
  position: {
    fontFamily: 'Inter_800ExtraBold',
    fontSize: 16,
    color: 'white'
  },
  company: {
    fontFamily: 'Inter_600SemiBold',
    color: 'white',
    fontSize: 14
  },
  bookmark: {
    width: 30,
    height: 30,
  },
  categories: {
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 65,
  }
})

export default FeaturedJobs