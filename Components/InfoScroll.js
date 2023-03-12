import { View, Text, FlatList, TouchableOpacity, Dimensions, StyleSheet } from 'react-native'
import React, { useRef, useState } from 'react'
import { useFonts, Inter_800ExtraBold, Inter_700Bold, Inter_600SemiBold, Inter_500Medium, Inter_400Regular, Inter_300Light } from '@expo-google-fonts/inter'

const headers = ['Description', 'Requirement', 'About', 'Reviews']

const InfoScroll = ({ info }) => {
  const [locationIndex, setLocationIndex] = useState(0);
  const listRef = useRef(null);
  const scrollToItem = ({ itemIndex }) => {
    setLocationIndex(itemIndex)
    listRef.current.scrollToIndex({ index: itemIndex });
  };

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
      <View className='flex-row items-center justify-evenly w-full mb-[20px]'>
        {
          headers.map((header, idx) => {
            return (
              <TouchableOpacity key={idx} onPress={() => scrollToItem({ itemIndex: idx })}>
                <Text style={locationIndex === idx ? style.headerActive : style.headerText}>{header}</Text>
              </TouchableOpacity>
            )
          })
        }
      </View>

      <View style={{ height: 308, marginBottom: 35 }}>
        <FlatList
          style={{ flex: 1 }}
          ref={listRef}
          data={info}
          renderItem={({ item }) => <InfoScrollItem item={item} />}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

const InfoScrollItem = ({ item }) => {
  const formatData = JSON.parse(item)

  return (
    <View className='mb-[30px] px-[24px]'>
      <Text style={style.categoryTitle}>{formatData.category}</Text>
      <View className={`${formatData.category === 'Requirements' && 'flex-col'} `}>
        {formatData.data.map((infoData, idx) => {
          return (
            <View key={idx} className='relative'>
              {formatData.category === 'Requirements' && <View style={style.list} />}
              <Text style={style.bodyText} className={`${formatData.category === 'Requirements' && 'ml-[15px]'}`}>{infoData}</Text>
            </View>
          )
        })}</View>
    </View>
  )
}

const style = StyleSheet.create({
  headerText: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 14,
    color: '#95969D'
  },
  headerActive: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 14,
    color: '#000'
  },
  list: {
    height: 7,
    width: 7,
    backgroundColor: '#494A50',
    position: 'absolute',
    borderRadius: 100,
    top: 5
  },
  bodyText:{
    fontSize: 14,
    fontFamily: 'Inter_400Regular',
    color: '#95969D'
  },
  categoryTitle: {
    fontSize: 14,
    fontFamily: 'Inter_400Regular',
    color: '#000',
    marginBottom: 30,
  }
})

export default InfoScroll