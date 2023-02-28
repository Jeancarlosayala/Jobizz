import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

//Screens
import HomeScreen from './HomeScreen';
import MessagesScreen from './MessagesScreen';
import SavedScreen from './SavedScreen';
import NotificationsSecreen from './NotificationsSecreen';

//Icons
import Home from '../assets/home/home.png'
import HomeSelected from '../assets/home/homeSelected.png'
import Messages from '../assets/home/messages.png'
import MessagesSelected from '../assets/home/messagesSelected.png'
import Saved from '../assets/home/saved.png'
import SavedSelected from '../assets/home/savedSelected.png'
import Notifications from '../assets/home/notifications.png'
import NotificationsSelected from '../assets/home/notificationsSelected.png'

const Tab = createBottomTabNavigator();

const Main = () => {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName, rn = route.name;
        switch (rn) {
          case 'Home':
            iconName = focused ? (
              <View>
                <Image className='w-[20px] h-[20px]' style={{ resizeMode: 'contain' }} source={HomeSelected} />
                <View />
              </View>
            ) : <Image className='w-[20px] h-[20px]' style={{ resizeMode: 'contain' }} source={Home} />
            break;
          case 'Messages':
            iconName = focused ? (
              <View>
                <Image className='w-[20px] h-[20px]' style={{ resizeMode: 'contain' }} source={MessagesSelected} />
                <View />
              </View>
            ) : <Image className='w-[20px] h-[20px]' style={{ resizeMode: 'contain' }} source={Messages} />
            break;
          case 'Saved':
            iconName = focused ? (
              <View>
                <Image className='w-[20px] h-[20px]' style={{ resizeMode: 'contain' }} source={SavedSelected} />
                <View />
              </View>
            ) : <Image className='w-[20px] h-[20px]' style={{ resizeMode: 'contain' }} source={Saved} />
            break;
          case 'Notifications':
            iconName = focused ? (
              <View>
                <Image className='w-[20px] h-[20px]' style={{ resizeMode: 'contain' }} source={NotificationsSelected} />
                <View />
              </View>
            ) : <Image className='w-[20px] h-[20px]' style={{ resizeMode: 'contain' }} source={Notifications} />
            break;
        }

        return <Icons name={iconName} focused={focused} />
      },
      tabBarLabelStyle: { display: 'none' },
      tabBarStyle: { borderTopColor: 'white' },
    })}
    >
      <Tab.Screen name='Home' component={HomeScreen} options={{ headerShown: false }} />
      <Tab.Screen name='Messages' options={{ headerShown: false }} component={MessagesScreen} />
      <Tab.Screen name='Saved' options={{ headerShown: false }} component={SavedScreen} />
      <Tab.Screen name='Notifications' options={{ headerShown: false }} component={NotificationsSecreen} />
    </Tab.Navigator>
  )
}

const Icons = ({ name, focused }) => {
  return (
    <View className='items-center justify-center'>
      <Text>{name}</Text>
      {focused && <View className='rounded-full' style={style.active} />}
    </View>
  )
}

const style = StyleSheet.create({
  active: {
    height: 4,
    width: 4,
    backgroundColor: '#356899'
  }
})

export default Main