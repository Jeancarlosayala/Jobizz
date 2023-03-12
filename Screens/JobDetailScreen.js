import { View, Text, SafeAreaView, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import { useFonts, Inter_800ExtraBold, Inter_700Bold, Inter_600SemiBold, Inter_500Medium, Inter_400Regular, Inter_300Light } from '@expo-google-fonts/inter'

import Currency from 'react-currency-formatter'

import BGCards from '../assets/home/backgroundCard.png'
import Back from '../assets/icons/back_white.png'
import Save from '../assets/icons/save_white.png'
import InfoScroll from '../Components/InfoScroll'

const JobDetailScreen = () => {
  const { params } = useRoute()
  const { company, image, categories, id, imageid, jobname, location, payment, info } = params.item
  const navigation = useNavigation()

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
    <View className='bg-[#FAFAFD] w-full'>
      <View className='bg-[#2C557D] h-[306px]'>
        <Image source={BGCards} className='w-full h-full opacity-[0.05] absolute' />

        <SafeAreaView className='items-center justify-center'>
          <View className='flex-row justify-between w-full px-[24px] mb-[12px] mt-[16px]'>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image style={style.icon} source={Back} />
            </TouchableOpacity>
            <View style={style.logoContainer}>
              <Image style={style.logo} source={{ uri: image }} />
            </View>
            <TouchableOpacity onPress={() => Alert.alert('save job')}>
              <Image style={style.icon} source={Save} />
            </TouchableOpacity>
          </View>

          <View className='items-center space-y-[4px] mb-[16px]'>
            <Text style={{ fontFamily: 'Inter_700Bold', color: '#fff', fontSize: 20 }}>{jobname}</Text>
            <Text style={{ fontFamily: 'Inter_400Regular', color: '#fff', fontSize: 15 }}>{company}</Text>
          </View>

          <View className='flex-row justify-evenly w-full mb-[24px]'>
            {
              categories.map((category, idx) => {
                return (
                  <View style={style.category} key={idx}>
                    <Text className='text-center'
                      style={{ color: '#fff', fontFamily: 'Inter_400Regular', fontSize: 11 }}>{category}</Text>
                  </View>
                )
              })
            }
          </View>

          <View className='flex-row justify-evenly items-center w-full mb-[20px]'>
            <Text style={{ fontFamily: 'Inter_600SemiBold', color: '#fff', fontSize: 16 }}>
              $<Currency quantity={payment} pattern='##,### ' />
            </Text>
            <Text style={{ fontFamily: 'Inter_600SemiBold', color: '#fff', fontSize: 16 }}>{location}</Text>
          </View>
        </SafeAreaView>
      </View>

      <View className='mt-[36px] mb-[34px]'>
        <InfoScroll info={info} />
        <View className='w-full items-center'>
          <TouchableOpacity style={style.apply} onPress={() => Alert.alert('apply job')}>
            <Text style={style.applyText}>Apply Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  logoContainer: {
    backgroundColor: '#fff',
    height: 80,
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 1000,
  },
  logo: {
    width: 40,
    height: 40,
    resizeMode: 'contain'
  },
  category: {
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    height: 26,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    borderRadius: 164
  },
  icon: {
    width: 24,
    height: 24,
    resizeMode: 'contain'
  },
  apply:{
    width: 327,
    height: 56,
    backgroundColor: '#356899',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5
  },
  applyText:{
    color: '#fff',
    fontFamily: 'Inter_500Medium',
    fontSize: 16
  }
})

export default JobDetailScreen