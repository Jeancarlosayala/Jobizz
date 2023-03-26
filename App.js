import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";
import { Provider, useDispatch } from "react-redux";
import Onboarding from "@Components/Onboarding";
import { setUser } from "@Context/user";
import { HOST_BACKEND } from "@env";

import ApplicationsScreen from "@Screens/ApplicationsScreen/ApplicationsScreen";
import JobDetailScreen from "@Screens/JobDetail/JobDetailScreen";
import Login from "@Screens/Login";
import Main from "@Screens/Main";
import Profile from "@Screens/Profile";
import Register from "@Screens/Register";
import ApplyJob from "@Screens/ApplyJob/ApplyJob";

import { store } from "./store";
import { setUserAppliedJobs } from "./Context/applied";

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
  const dispatch = useDispatch();

  useEffect(() => {
    (async () =>{
      await fetch(`http://${HOST_BACKEND}:4000/api/jobizz/user/login/`)
      .then((res) => res.json())
      .then((data) =>dispatch(setUser(data)))
      .catch((err) => console.log(err));
    })()
  }, []);

  return (
    <Stack.Navigator>
      {/* <Stack.Screen name="Onboarding" component={Onboarding} options={{headerShown: false}} /> */}
      <Stack.Screen
        name="Main"
        component={Main}
        options={{ headerShown: false, presentation: "fullScreenModal" }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false, presentation: "fullScreenModal" }}
      />
      <Stack.Screen
        name="JobDetail"
        component={JobDetailScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Applications"
        component={ApplicationsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ApplyJob"
        component={ApplyJob}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
