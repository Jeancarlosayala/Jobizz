import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { getUser, setToggleMenu, setUser } from '../Context/user'

import User from '../assets/home/user.png'
import { useFonts, Inter_800ExtraBold, Inter_700Bold, Inter_600SemiBold, Inter_500Medium, Inter_400Regular, } from '@expo-google-fonts/inter'

import sidebarOptions from '../Api/sidebarOptions'
import LogOutIcon from '../assets/icons/logout.png'
import CloseIcon from '../assets/icons/close.png'
import { useNavigation } from '@react-navigation/native'

const SideBar = () => {
  const user = useSelector(getUser);
  const dispatch = useDispatch();
  const navigation = useNavigation()

  const [fontsLoaded] = useFonts({
    Inter_800ExtraBold,
    Inter_700Bold,
    Inter_600SemiBold,
    Inter_500Medium,
    Inter_400Regular,
  })

  const logOut = async () => {
    await fetch('http://192.168.1.4:4000/api/jobizz/user/logout/', {
      method: 'POST'
    }).then(res => res.json())
      .then(data => dispatch(setUser(data)))
      .then(() => dispatch(setToggleMenu(false)))
      .catch(err => console.log(err))
  }

  if (!user) return <Text>Loading...</Text>
  if (!fontsLoaded) return null;

  return (
    <View>
      <View className='items-center space-y-[12px]'>
        <View className='relative w-full items-center'>
          <TouchableOpacity className='absolute right-[24px]' onPress={() => dispatch(setToggleMenu(false))}>
            <Image style={style.close} source={CloseIcon} />
          </TouchableOpacity>
          <Image style={[style.userImage, { resizeMode: 'contain' }]} source={user.loggedIn && user.data.image ? {uri: user.data.image} : User} />
        </View>
        <View className='items-center space-y-[6px]'>
          <Text style={style.username}>{user.loggedIn && user.data.name}</Text>
          <Text style={style.role}>Full Stack Developer</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <Text style={style.profile}>View Profile</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View className='ml-[40px] space-y-[28px] mt-[40px]'>
        {
          sidebarOptions.map(({ id, option, icon, screen }) => {
            return (
              <TouchableOpacity onPress={() => navigation.navigate(screen)} className='flex-row items-center' key={id}>
                <Image style={style.icon} source={icon} />
                <Text style={style.sidebarOptionText}>{option}</Text>
              </TouchableOpacity>
            )
          })
        }
        <TouchableOpacity className='flex-row items-center' onPress={logOut}>
          <Image style={style.icon} source={LogOutIcon} />
          <Text style={style.sidebarOptionText} className='text-[#E30000]'>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  userImage: {
    height: 104,
    width: 104,
    borderRadius: 1000
  },
  username: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 20
  },
  role: {
    color: '#95969D',
    fontFamily: 'Inter_400Regular',
    fontSize: 12
  },
  profile: {
    fontFamily: 'Inter_600SemiBold',
    color: '#356899',
    fontSize: 14
  },
  icon: {
    width: 21,
    height: 21,
    resizeMode: 'contain'
  },
  sidebarOptionText: {
    marginLeft: 18,
    fontFamily: 'Inter_500Medium',
    fontSize: 15
  },
  close: {
    height: 20,
    width: 20,
    resizeMode: 'contain'
  }
})

export default SideBar