import { StyleSheet } from "react-native";

export const applicationsStyle = StyleSheet.create({
  headerText: {
    fontFamily: "Inter_600SemiBold",
    fontSize: 24,
  },
  userImage: {
    height: 50,
    width: 50,
    borderRadius: 1000,
  },
  menuText: {
    fontFamily: "Inter_600SemiBold",
    fontSize: 16,
  },
  active: {
    backgroundColor: "#356899",
    height: 37,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    borderRadius: 97,
  },
  normal: {
    backgroundColor: "#fff",
    height: 37,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    borderColor: "#95969D",
    borderWidth: 1,
    borderRadius: 97,
  },
  activeText: {
    color: "#fff",
    fontFamily: "Inter_500Medium",
    fontSize: 14,
  },
  normalText: {
    color: "#95969D",
    fontFamily: "Inter_500Medium",
    fontSize: 14,
  },
});
