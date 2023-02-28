import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Onboarding from './Components/Onboarding';
import Main from './Screens/Main';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Onboarding" component={Onboarding} options={{headerShown: false}} />
        <Stack.Screen name="Main" component={Main} options={{headerShown: false, presentation: 'fullScreenModal'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
