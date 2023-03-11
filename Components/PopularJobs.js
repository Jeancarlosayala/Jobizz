import { View, Text, StyleSheet, Image, FlatList } from 'react-native'
import React from 'react'
import { useFonts, Inter_800ExtraBold, Inter_700Bold, Inter_600SemiBold, Inter_500Medium, Inter_400Regular, Inter_300Light } from '@expo-google-fonts/inter'

const PopularJobs = ({ data }) => {
  const [fontsLoaded] = useFonts({
    Inter_800ExtraBold,
    Inter_700Bold,
    Inter_600SemiBold,
    Inter_500Medium,
    Inter_400Regular,
    Inter_300Light
  })

  if (!fontsLoaded) return null;

  return (
    <View>
      <FlatList
        data={data}
        renderItem={({ item }, idx) => <PopularJobsItem idx={idx} item={item} />}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}

const PopularJobsItem = ({ item }) => {

  return (
    <View>
      <View key={item.id} className='bg-white mb-[17px] w-[327px] h-[74px] items-center justify-around flex-row rounded-[20px]'>
        <View>
          <Image style={style.logo} source={{ uri: item.image }} className='w-[22px] h-[22px]' />
        </View>
        <View>
          <Text style={style.positionText}>{item.jobname}</Text>
          <Text style={style.grayText}>{item.company}</Text>
        </View>
        <View>
          <Text style={style.salaryText}>{item.payment}</Text>
          <Text style={style.grayText}>{item.location}</Text>
        </View>
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  logo: {
    height: 43,
    width: 43,
    borderRadius: 12,
    resizeMode: 'contain'
  },
  positionText: {
    fontSize: 14,
    fontFamily: 'Inter_600SemiBold',
  },
  grayText: {
    color: '#0D0D26',
    fontSize: 13,
    fontFamily: 'Inter_300Light'
  },
  salaryText: {
    fontSize: 12,
    fontFamily: 'Inter_500Medium'
  }
})

export default PopularJobs