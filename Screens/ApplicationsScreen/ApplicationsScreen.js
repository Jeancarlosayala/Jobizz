import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useSelector } from "react-redux";
import { getUser } from "../../Context/user";
import { useNavigation } from "@react-navigation/native";

import Back from "../../assets/icons/back_black.png";
import User from "../../assets/home/user.png";

import { applicationsStyle } from "./applicationsStyle";
import PopularJobs from "../../Components/PrimaryCard/PopularJobs";

const ApplicationsScreen = () => {
  const user = useSelector(getUser);
  const navigation = useNavigation();
  const [appliedJobs, setAppliedJobs] = useState();
  const [categoryJob, setCategoryJob] = useState("All");
  const [filterIndex, setFilterIndex] = useState(0);
  const [quantityItems, setQuantityItems] = useState(6)
  let filterJobs;

  const statusJob = ["All", "Delivered", "Reviewing", "Cancelled"];

  useEffect(() => {
    (async () => {
      if (user) {
        await fetch(
          `http://192.168.1.4:4000/api/jobizz/applied/${user.data.id}`
        )
          .then((res) => res.json())
          .then((data) => setAppliedJobs(data))
          .catch((err) => console.log(err));
      }
    })();
  }, [user]);

  if (!appliedJobs) return <Text>Loading...</Text>;

  const indexPosition = ({ idx, filter }) => {
    setFilterIndex(idx);
    setCategoryJob(filter);
  };

  if (filterIndex === 0) {
    filterJobs = appliedJobs.filter((item, idx) => item && idx < quantityItems);
  } else {
    filterJobs = appliedJobs.filter((item, idx) => item.status === categoryJob);
  }

  return (
    <View className="bg-[#FAFAFD]">
      <SafeAreaView>
        <View className="px-[24px] flex-row items-center justify-between mb-[35px]">
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              style={{ height: 24, width: 24, resizeMode: "contain" }}
              source={Back}
            />
          </TouchableOpacity>
          <Text style={applicationsStyle.menuText}>Applications</Text>
          <Image
            style={[applicationsStyle.userImage, { resizeMode: "contain" }]}
            source={user.data.image ? { uri: user.data.image } : User}
          />
        </View>

        <View className="px-[24px] mb-[40px]">
          <Text style={applicationsStyle.headerText}>You have </Text>
          <Text style={applicationsStyle.headerText}>
            {appliedJobs.length} Applications 👍
          </Text>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View className="flex-row items-center justify-evenly mb-[40px] px-[24px] space-x-[16px]">
            {statusJob.map((item, idx) => {
              return (
                <TouchableOpacity
                  style={
                    filterIndex === idx
                      ? applicationsStyle.active
                      : applicationsStyle.normal
                  }
                  onPress={() => indexPosition({ idx: idx, filter: item })}
                  key={idx}
                >
                  <Text
                    style={
                      filterIndex === idx
                        ? applicationsStyle.activeText
                        : applicationsStyle.normalText
                    }
                  >
                    {item}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </ScrollView>
      </SafeAreaView>

      <View className="items-center h-[504px]">
        <PopularJobs heightView={478} data={filterJobs} height={140} />
      </View>
    </View>
  );
};

export default ApplicationsScreen;
