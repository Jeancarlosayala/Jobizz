import { StyleSheet } from "react-native";

export const JdStyle = StyleSheet.create({
    logoContainer: {
      backgroundColor: '#fff',
      height: 80,
      width: 80,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 1000,
    },
    logo: {
      width: 40,
      height: 40,
      resizeMode: 'contain'
    },
    category: {
      backgroundColor: 'rgba(255, 255, 255, 0.15)',
      height: 26,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 16,
      borderRadius: 164
    },
    icon: {
      width: 24,
      height: 24,
      resizeMode: 'contain'
    },
    apply:{
      width: 327,
      height: 56,
      backgroundColor: '#356899',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 5
    },
    applyText:{
      color: '#fff',
      fontFamily: 'Inter_500Medium',
      fontSize: 16
    }
  })