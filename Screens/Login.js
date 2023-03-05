import { View, Text, SafeAreaView, Image, TouchableOpacity, StyleSheet, TextInput, Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useFonts, Inter_800ExtraBold, Inter_500Medium, Inter_400Regular, Inter_300Light, Inter_700Bold } from '@expo-google-fonts/inter'

import BackArrow from '../assets/auth/back.png'
import Logo from '../assets/logo/Jobizz.png'
import { useEffect, useState } from 'react'

const formFields = {
  email: '',
  password: ''
}

const Login = () => {
  const [field, setField] = useState(formFields)
  const [emailInput, setEmailInput] = useState('')
  const [passwordInput, setPasswordInput] = useState('')

  const handlerLogin = async () => {
    if (field.email === '' || field.password === '') { return Alert.alert('Please complete all the inputs') }

    await fetch('http://192.168.1.6:4000/api/jobizz/login/', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(field)
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    setField({ email: emailInput, password: passwordInput })
  }, [emailInput, passwordInput])

  const [fontsLoaded] = useFonts({
    Inter_800ExtraBold,
    Inter_700Bold,
    Inter_500Medium,
    Inter_400Regular,
    Inter_300Light,
  })
  const navigation = useNavigation()

  if (!fontsLoaded) return null;

  return (
    <View className='bg-[#FAFAFD] px-[25px]'>
      <SafeAreaView>
        <TouchableOpacity className='h-[24px] w-[24px]' onPress={() => navigation.goBack()}>
          <Image className='h-full w-[20px]' style={{ resizeMode: 'contain' }} source={BackArrow} />
        </TouchableOpacity>

        <View className='mt-[25px]'>
          <Image className='h-[25px] w-[100px]' style={{ resizeMode: 'contain' }} source={Logo} />
        </View>
        <View className='mt-[15px]'>
          <Text style={style.title}>Welcome Back 👋</Text>

          <View className='mt-[7px]'>
            <Text style={style.subTitle}>Let’s log in. Apply to jobs!</Text>
          </View>
        </View>

        <View className='mt-[51px]'>
          <TextInput textContentType='emailAddress'
            onChangeText={(val1) => setEmailInput(val1)}
            className='border border-[#AFB0B6]'
            style={style.input}
            placeholder='E-mail' />
          <TextInput secureTextEntry
            onChangeText={(val2) => setPasswordInput(val2)}
            className='border border-[#AFB0B6] mt-[16px]'
            style={style.input}
            placeholder='Password' />

          <TouchableOpacity onPress={() => handlerLogin()} className='mt-[32px]' style={style.button}>
            <Text style={style.textButton}>Log in</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  )
}

const style = StyleSheet.create({
  title: {
    fontFamily: 'Inter_700Bold',
    fontSize: 24,
    letterSpacing: 0.2
  },
  subTitle: {
    color: '#0D0D26',
    fontSize: 14,
    fontFamily: 'Inter_300Light'
  },
  input: {
    height: 52,
    width: 327,
    borderRadius: 10,
    paddingHorizontal: 55,
  },
  button: {
    height: 56,
    width: 327,
    backgroundColor: '#356899',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10
  },
  textButton: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Inter_500Medium',
  }
})

export default Login