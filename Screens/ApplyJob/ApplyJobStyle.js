import { StyleSheet } from "react-native";

export const ApStyles = StyleSheet.create({
  icon: {
    height: 24,
    width: 24,
    resizeMode: "contain",
  },
  headerText: {
    fontSize: 16,
    fontFamily: "Inter_600SemiBold",
  },
  subText: {
    fontFamily: "Inter_300Light",
    color: "#95969D",
  },
  image: {
    height: 72,
    width: 72,
    borderRadius: 100,
  },
  checkbox: {
    borderRadius: 100,
    height: 20,
    width: 20,
    borderColor: "#CACBCE",
    resizeMode: "contain",
  },
  role: {
    backgroundColor: "#356899",
    height: 25,
    paddingHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,
  },
  roleText: {
    color: "#fff",
    fontSize: 12,
    fontFamily: "Inter_500Medium",
  },
  optionalText: {
    color: "#95969D",
    fontFamily: "Inter_300Light",
    fontSize: 16,
  },
  textArea: {
    height: 89,
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  whiteText: {
    color: "#fff",
    fontFamily: "Inter_500Medium",
    fontSize: 16,
  },
});
