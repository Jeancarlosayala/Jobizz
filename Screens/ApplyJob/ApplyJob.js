import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import { ApStyles } from "./ApplyJobStyle";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { getUser } from "@Context/user";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import Back from "@assets/icons/back_black.png";
import PopularJobs from "@Components/PrimaryCard/PopularJobs";
import Checkbox from "expo-checkbox";
import Button from "@Components/Button/Button";

const ApplyJob = () => {
  const [ischecked, setIschecked] = useState(false);
  const { params } = useRoute();
  const navigation = useNavigation();
  const data = [params.item];
  const user = useSelector(getUser);
  const { name, image } = user.data;

  const alert = () =>{
    Alert.alert('hola')
  }

  return (
    <View className="px-[24px] bg-[#FAFAFD] h-full">
      <SafeAreaView className="bg-[#fff] mb-[24px]">
        <View className="flex-row items-center w-full mb-[24px]">
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image style={ApStyles.icon} source={Back} />
          </TouchableOpacity>
          <Text style={ApStyles.headerText} className="ml-[123px]">
            Apply
          </Text>
        </View>
        <View>
          <PopularJobs height={44} data={data} />
        </View>
      </SafeAreaView>

      <KeyboardAwareScrollView>
        <View className="mb-[32px]">
          <Text style={ApStyles.headerText}>Your profile</Text>

          <View className="items-center">
            <View
              className="bg-[#fff] h-[155px] w-[155px] 
          items-center justify-center rounded-[16px] space-y-[4px]"
            >
              <Image style={ApStyles.image} source={{ uri: image }} />
              <Text style={ApStyles.headerText}>{name}</Text>
              <Text style={ApStyles.subText}>Front End Developer</Text>
            </View>
          </View>
        </View>

        <View className="mb-[40px]">
          <Text style={ApStyles.headerText}>Resume Selected</Text>

          <View
            className="flex-row items-center justify-center 
        mt-[16px] h-[58px] w-[155px] bg-[#fff] rounded-[16px]"
          >
            <Checkbox
              style={ApStyles.checkbox}
              value={ischecked}
              onValueChange={setIschecked}
              color={ischecked ? "#5386E4" : "#CACBCE"}
            />
            <View className="ml-[20px] space-y-[8px]">
              <View style={ApStyles.role}>
                <Text style={ApStyles.roleText}>Front End</Text>
              </View>
              <Text style={[ApStyles.headerText, { fontSize: 14 }]}>
                {name}
              </Text>
            </View>
          </View>
        </View>

        <View className='mb-[32px]'>
          <Text style={ApStyles.headerText} className="mb-[16px]">
            Cover Later
            <Text style={ApStyles.optionalText}>(Optional)</Text>
          </Text>

          <TextInput
            multiline={true}
            numberOfLines={4}
            placeholder="Write a cover letter......"
            style={ApStyles.textArea}
          />
        </View>

        <Button styles={'primary'} onPress={alert}>
          <Text style={ApStyles.whiteText}>Apply</Text>
        </Button>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default ApplyJob;
