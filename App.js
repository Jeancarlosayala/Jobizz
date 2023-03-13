import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useEffect } from 'react';
import { Provider, useDispatch } from 'react-redux';
import Onboarding from './Components/Onboarding';
import { setUser } from './Context/user';
import ApplicationsScreen from './Screens/ApplicationsScreen';
import JobDetailScreen from './Screens/JobDetailScreen';
import Login from './Screens/Login';
import Main from './Screens/Main';
import Profile from './Screens/Profile';
import Register from './Screens/Register';

import { store } from './store';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Views />
      </Provider>
    </NavigationContainer>
  );
}

const Views = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const getSession = async () => {
      await fetch('http://192.168.1.4:4000/api/jobizz/user/login/')
        .then(res => res.json())
        .then(data => dispatch(setUser(data)))
        .catch(err => console.log(err))
    }
    getSession();
  }, [])

  return (
    <Stack.Navigator>
      {/* <Stack.Screen name="Onboarding" component={Onboarding} options={{headerShown: false}} /> */}
      <Stack.Screen name="Main" component={Main} options={{ headerShown: false, presentation: 'fullScreenModal' }} />
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
      <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false, presentation: 'fullScreenModal' }} />
      <Stack.Screen name="JobDetail" component={JobDetailScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Applications" component={ApplicationsScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}
