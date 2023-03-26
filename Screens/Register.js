import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  useFonts,
  Inter_800ExtraBold,
  Inter_500Medium,
  Inter_400Regular,
  Inter_300Light,
  Inter_700Bold,
} from "@expo-google-fonts/inter";

import BackArrow from "@assets/auth/back.png";
import Logo from "@assets/logo/Jobizz.png";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "@Context/user";
import { HOST_BACKEND } from "@env";

const formFields = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Register = () => {
  const [field, setField] = useState(formFields);
  const [name, setName] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [confirmPasswordInput, setConfirmPasswordInput] = useState("");
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handlerRegister = async () => {
    if (field.email === "" || field.password === "") {
      return Alert.alert("Please complete all the inputs");
    }

    await fetch(`http://${HOST_BACKEND}:4000/api/jobizz/user/register/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(field),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(setUser(data));
        if (data.loggedIn === true) {
          navigation.navigate("Main");
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    setField({
      name: name,
      email: emailInput,
      password: passwordInput,
      confirmPassword: confirmPasswordInput,
    });
  }, [name, emailInput, passwordInput, confirmPasswordInput]);

  const [fontsLoaded] = useFonts({
    Inter_800ExtraBold,
    Inter_700Bold,
    Inter_500Medium,
    Inter_400Regular,
    Inter_300Light,
  });

  if (!fontsLoaded) return null;

  return (
    <View className="bg-[#FAFAFD] px-[25px] h-full">
      <SafeAreaView>
        <TouchableOpacity
          className="h-[24px] w-[24px]"
          onPress={() => navigation.goBack()}
        >
          <Image
            className="h-full w-[20px]"
            style={{ resizeMode: "contain" }}
            source={BackArrow}
          />
        </TouchableOpacity>

        <View className="mt-[25px]">
          <Image
            className="h-[25px] w-[100px]"
            style={{ resizeMode: "contain" }}
            source={Logo}
          />
        </View>
        <View className="mt-[15px]">
          <Text style={style.title}>Registration 👍</Text>

          <View className="mt-[7px]">
            <Text style={style.subTitle}>Let’s Register. Apply to jobs!</Text>
          </View>
        </View>

        <View className="mt-[51px]">
          <TextInput
            textContentType="emailAddress"
            onChangeText={(val) => setName(val)}
            className="border border-[#AFB0B6]"
            style={style.input}
            placeholder="Full Name"
          />
          <TextInput
            textContentType="emailAddress"
            onChangeText={(val) => setEmailInput(val)}
            className="border border-[#AFB0B6] mt-[16px]"
            style={style.input}
            placeholder="E-mail"
          />
          <TextInput
            secureTextEntry
            onChangeText={(val) => setPasswordInput(val)}
            className="border border-[#AFB0B6] mt-[16px]"
            style={style.input}
            placeholder="Password"
          />
          <TextInput
            secureTextEntry
            onChangeText={(val) => setConfirmPasswordInput(val)}
            className="border border-[#AFB0B6] mt-[16px]"
            style={style.input}
            placeholder="Confirm Password"
          />

          <TouchableOpacity
            onPress={() => handlerRegister()}
            className="mt-[32px]"
            style={style.button}
          >
            <Text style={style.textButton}>Register</Text>
          </TouchableOpacity>
        </View>

        <View className="items-center mt-[275px] flex-row justify-center">
          <Text style={style.textRegular} className="text-[#BDBEC2]">
            Have an account?{" "}
          </Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={style.textRegular} className="text-[#356899]">
              Log in
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};

const style = StyleSheet.create({
  title: {
    fontFamily: "Inter_700Bold",
    fontSize: 24,
    letterSpacing: 0.2,
  },
  subTitle: {
    color: "#0D0D26",
    fontSize: 14,
    fontFamily: "Inter_300Light",
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
    backgroundColor: "#356899",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  textButton: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "Inter_500Medium",
  },
  textRegular: {
    fontFamily: "Inter_400Regular",
    fontSize: 14,
  },
});

export default Register;
