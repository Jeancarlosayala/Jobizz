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
  logo: {
    height: 44,
    width: 44,
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
  delivered: {
    backgroundColor: "#EDF3FC",
    width: 114,
    height: 33,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 52,
  },
  deliveredText: {
    fontFamily: "Inter_500Medium",
    color: "#5386E4",
    fontSize: 13,
  },
  review: {
    backgroundColor: "#E8FDF2",
    width: 114,
    height: 33,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 52,
  },
  reviewText: {
    fontFamily: "Inter_500Medium",
    color: "#0E9D57",
    fontSize: 13,
  },
  cancel: {
    backgroundColor: "#FFEDED",
    width: 114,
    height: 33,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 52,
  },
  cancelText: {
    fontFamily: "Inter_500Medium",
    color: "#DC312D",
    fontSize: 13,
  },
  menuText: {
    fontFamily: "Inter_600SemiBold",
    fontSize: 16,
  },
  active: {
    backgroundColor: '#356899',
    height: 37,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    borderRadius: 97
  },
  normal: {
    backgroundColor: '#fff',
    height: 37,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    borderColor: '#95969D',
    borderWidth: 1,
    borderRadius: 97
  },
  activeText: {
    color: '#fff',
    fontFamily: 'Inter_500Medium',
    fontSize: 14
  },
  normalText: {
    color: '#95969D',
    fontFamily: 'Inter_500Medium',
    fontSize: 14
  }
});
