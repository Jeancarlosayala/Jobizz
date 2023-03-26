import { useFonts, Inter_800ExtraBold, Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter'
import { View, Text, SafeAreaView, Image, StyleSheet, TextInput, TouchableOpacity, Alert, Animated } from 'react-native'

import User from '@assets/home/user.png'
import Search from '@assets/home/search.png'
import Filter from '@assets/home/filter.png'
import FeaturedJobs from '@Components/FeaturedJobs'

import PopularJobs from '@Components/PrimaryCard/PopularJobs'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { getUser, setToggleMenu } from '@Context/user'
import { useEffect, useRef, useState } from 'react'
import { HOST_BACKEND } from "@env";
import SideBar from '@Components/SideBar'

const HomeScreen = () => {
  const user = useSelector(getUser)
  const menuToggle = useSelector((state) => state.user.toggleMenu)
  const dispatch = useDispatch()
  const [cardJobs, setCardJobs] = useState(null);

  const progress = useRef(new Animated.Value(1)).current;

  const showMenu = () => {
    dispatch(setToggleMenu(!menuToggle))
  }

  useEffect(() => {
    fetch(`http://${HOST_BACKEND}:4000/api/jobizz/job/`)
      .then(res => res.json())
      .then(res => setCardJobs(res.data))
      .catch(err => console.log(err))
  }, [])

  useEffect(() => {
    Animated.timing(progress, {
      toValue: menuToggle ? 0 : 1,
      useNativeDriver: true,
      duration: 500
    }).start()
  }, [menuToggle])

  const [fontsLoaded] = useFonts({
    Inter_800ExtraBold,
    Inter_700Bold,
    Inter_400Regular,
  })
  const navigation = useNavigation()

  if (!user || !cardJobs) return <Text>Loading...</Text>
  if (!fontsLoaded) return null;

  return (
    <View className='bg-[#FAFAFD] h-full'>
      <Animated.View style={[style.toggleMenu, {
        transform: [{
          translateX: progress.interpolate({
            inputRange: [0.2, 1],
            outputRange: [-0.5 * 2 * Math.PI, -1 * 100 * Math.PI]
          })
        }]
      }]} className=' absolute h-[100vh] z-10 w-full'>
        <View className='bg-white h-full w-[311px]'>
          <SafeAreaView>
            <SideBar />
          </SafeAreaView>
        </View>
      </Animated.View>

      <SafeAreaView>
        <View className='flex-row items-center w-full justify-between px-[21px]'>
          <View>
            <Text style={style.welcome}>Welcome to Jobizz {user.loggedIn && user.data.name}!</Text>
            <Text style={style.discover}>Discover Jobs 🔥 </Text>
          </View>
          <View className='relative'>
            <TouchableOpacity onPress={() => user.loggedIn ?
              showMenu() : navigation.navigate('Login')}>
              <View className='rounded-full items-center justify-center' style={style.roundedNotify}>
                <View className='rounded-full' style={style.notify} />
              </View>
              <Image style={[style.userImage, { resizeMode: 'contain' }]} source={user.loggedIn && user.data.image ? { uri: user.data.image } : User} />
            </TouchableOpacity>
          </View>
        </View>

        <View className='items-center mt-[42px] flex-row justify-evenly'>
          <View className='relative justify-center items-center'>
            <Image style={style.searchIcon} source={Search} />
            <TextInput className='pl-[54px] pr-[35px]' placeholder='Search a job or position' style={style.searchJob} />
          </View>
          <View>
            <TouchableOpacity style={style.filter} onPress={() => Alert.alert('Show Filters')}>
              <Image source={Filter} />
            </TouchableOpacity>
          </View>
        </View>

        <View>
          <View className='flex-row justify-between px-[24px] mt-[40px]'>
            <Text style={style.subTitle}>Featured Jobs</Text>
            <TouchableOpacity activeOpacity={1} onPress={() => Alert.alert('See All Featured Jobs')}>
              <Text style={style.seeAll}>See All</Text>
            </TouchableOpacity>
          </View>
          <View className='px-[21px] mt-[20px]'>
            <FeaturedJobs data={cardJobs} />
          </View>
        </View>

        <View>
          <View className='flex-row justify-between px-[24px] mt-[42px]'>
            <Text style={style.subTitle}>Popular Jobs</Text>
            <TouchableOpacity activeOpacity={1} onPress={() => Alert.alert('See All Featured Jobs')}>
              <Text style={style.seeAll}>See All</Text>
            </TouchableOpacity>
          </View>
          <View className='ml-[24px] mt-[20px]'>
            <PopularJobs heightView={165} height={74} data={cardJobs} />
          </View>
        </View>
      </SafeAreaView>
    </View>
  )
}

const style = StyleSheet.create({
  userImage: {
    height: 54,
    width: 54,
    borderRadius: 1000
  },
  roundedNotify: {
    backgroundColor: '#fff',
    width: 16,
    height: 16,
    position: 'absolute',
    zIndex: 1,
    right: 0
  },
  notify: {
    backgroundColor: 'red',
    width: 8,
    height: 8,
    position: 'absolute',
    zIndex: 1,
  },
  welcome: {
    color: '#95969D',
    fontSize: 14,
    fontFamily: 'Inter_400Regular'
  },
  discover: {
    fontFamily: 'Inter_800ExtraBold',
    fontSize: 22,
  },
  searchJob: {
    backgroundColor: '#F2F2F3',
    width: 263,
    height: 48,
    borderRadius: 12,
    textAlign: 'center',
    color: '#95969D',
    fontSize: 15
  },
  searchIcon: {
    position: 'absolute',
    zIndex: 1,
    left: 27,
    width: 20,
    height: 20
  },
  filter: {
    backgroundColor: '#F2F2F3',
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12
  },
  subTitle: {
    fontSize: 16,
    fontFamily: 'Inter_700Bold'
  },
  seeAll: {
    color: '#95969D',
    fontSize: 14
  },
  toggleMenu: {
    left: -75,
    backgroundColor: 'rgba(0,0,0,0)',
  }
})

export default HomeScreen