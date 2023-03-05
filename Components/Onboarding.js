import { View, FlatList, StyleSheet, Animated, Image, Text, TouchableOpacity } from 'react-native'
import React, { useRef, useState } from 'react'
import slides from '../Api/slides'
import OnboardingItems from './OnboardingItems'
import Paginator from './Paginator'
import Elipse from '../assets/onboarding/elipse.png'
import { useFonts, Inter_600SemiBold, Inter_400Regular } from '@expo-google-fonts/inter';
import { useNavigation } from '@react-navigation/native'

const Onboarding = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slideRef = useRef(null)
  const navigation = useNavigation();

  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  const scrollNext = () => {
    if (currentIndex < slides.length - 1) {
      slideRef.current.scrollToIndex({ index: currentIndex + 1 })
    } else {
      navigation.navigate('Main')
    }
  }

  const scrollEnd = () =>{
      slideRef.current.scrollToIndex({index: slides.length - 1})
  }

  return (
    <View className='bg-[#FAFAFD]' style={styles.container}>
      <Image style={{ resizeMode: 'contain', position: 'absolute' }} className='w-full top-0' source={Elipse} />

      <View style={{ flex: 3 }}>
        <FlatList
          data={slides}
          renderItem={({ item }) => <OnboardingItems item={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          keyExtractor={(item) => item.id}
          onScroll={Animated.event([{
            nativeEvent: {
              contentOffset: { x: scrollX }
            }
          }], { useNativeDriver: false })}
          scrollEventThrottle={32}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          ref={slideRef}
        />
      </View>

      <Paginator data={slides} scrollX={scrollX} />
      <NextButton scrollNext={scrollNext} scrollEnd={scrollEnd} index={currentIndex} />
    </View>
  )
}

const NextButton = ({ scrollNext, scrollEnd, index }) => {
  const [fontsLoaded] = useFonts({
    Inter_600SemiBold,
    Inter_400Regular
  })

return (
    <View className='items-center justify-around w-full h-28 flex-row'>
      {
        index != 0 && index != 3 && <TouchableOpacity style={styles.button} onPress={scrollEnd}>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
      }
      {
        index != 0 && <TouchableOpacity style={index != 3 ? styles.nextButton : styles.exploreButton} onPress={scrollNext}>
        <Text style={styles.textButton} className='text-white'>{index != 3 ? 'Next' : 'Explore'}</Text>
      </TouchableOpacity> 
      }
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  nextButton: {
    backgroundColor: '#2C557D',
    padding: 10,
    width: 158,
    height: 58,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5
  },
  exploreButton: {
    backgroundColor: '#2C557D',
    padding: 10,
    width: 295,
    height: 58,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5
  },
  textButton: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: '16px'
  },
  skipText: {
    color: '#95969D',
    fontSize: '16px',
    fontFamily: 'Inter_600SemiBold'
  }
})

export default Onboarding