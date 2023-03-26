import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  Alert,
} from "react-native";
import React from "react";
import {
  useFonts,
  Inter_800ExtraBold,
  Inter_700Bold,
  Inter_600SemiBold,
  Inter_500Medium,
  Inter_400Regular,
  Inter_300Light,
} from "@expo-google-fonts/inter";
import { useNavigation } from "@react-navigation/native";
import { PoStyles } from "./PopularJobsStyles";

import Currency from "react-currency-formatter";

const PopularJobs = ({ data, height, heightView }) => {
  const [fontsLoaded] = useFonts({
    Inter_800ExtraBold,
    Inter_700Bold,
    Inter_600SemiBold,
    Inter_500Medium,
    Inter_400Regular,
    Inter_300Light,
  });

  if (!fontsLoaded) return null;

  return (
    <View style={{ height: heightView }}>
      <FlatList
        data={data}
        renderItem={({ item }, idx) => (
          <PopularJobsItem height={height} idx={idx} item={item} />
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const PopularJobsItem = ({ item, height }) => {
  const navigation = useNavigation();
  const { image, jobname, company, payment, location, id, status } = item;

  return (
    <TouchableOpacity
      className="mb-[20px]"
      onPress={() => {
        navigation.navigate("JobDetail", { item: item });
      }}
    >
      <View
        className={`bg-white w-[327px] justify-center rounded-[10px] px-[10px]`}
        style={{height: height}}
      >
        <View className={`items-center justify-around flex-row rounded-[20px] ${status && 'mb-[23px]'}`}>
          <View>
            <Image style={PoStyles.logo} source={{ uri: image }} />
          </View>
          <View>
            <Text style={PoStyles.positionText}>{jobname}</Text>
            <Text style={[PoStyles.grayText, {marginTop: 4}]}>{company}</Text>
          </View>
          <View>
            <Text style={PoStyles.salaryText}>
              $<Currency quantity={payment} pattern="##,### " />
            </Text>
            <Text style={[PoStyles.grayText, {marginTop: 4}]}>{location}</Text>
          </View>
        </View>

        {status && (
          <View className="px-[14px]">
            <View
              style={
                (status === "Delivered" && PoStyles.delivered) ||
                (status === "Cancelled" && PoStyles.cancel) ||
                (status === "Reviewing" && PoStyles.review)
              }
            >
              <Text
                style={
                  (status === "Delivered" && PoStyles.deliveredText) ||
                  (status === "Cancelled" && PoStyles.cancelText) ||
                  (status === "Reviewing" && PoStyles.reviewText)
                }
              >
                {status}
              </Text>
            </View>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  logo: {
    height: 43,
    width: 43,
    borderRadius: 12,
    resizeMode: "contain",
  },
  positionText: {
    fontSize: 14,
    fontFamily: "Inter_600SemiBold",
  },
  grayText: {
    color: "#0D0D26",
    fontSize: 13,
    fontFamily: "Inter_300Light",
  },
  salaryText: {
    fontSize: 12,
    fontFamily: "Inter_500Medium",
  },
});

export default PopularJobs;
