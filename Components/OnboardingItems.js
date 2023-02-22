import { useFonts, Inter_600SemiBold, Inter_400Regular } from '@expo-google-fonts/inter';
import { Image, StyleSheet, Text, useWindowDimensions, View } from "react-native";

const OnboardingItems = ({item}) => {
  const { title, description, image } = item;
  const { width } = useWindowDimensions();
  const [fontsLoaded] = useFonts({
    Inter_600SemiBold,
    Inter_400Regular
  })

  if(!fontsLoaded) return null;

  return (
    <View style={[styles.container,{width}]} className='h-[100vh]'>
      <Image source={image} style={[styles.image, {width, resizeMode: 'contain'}]} />
      <View style={{flex: 0.3}}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },  
  image: {
    flex: 0.7,
    justifyContent: "center",
    marginBottom: -100
  },
  title: {
    fontSize: 28,
    textAlign: "center",
    marginBottom: 18,
    fontFamily: 'Inter_600SemiBold'
  },
  description: {
    fontWeight: '300',
    textAlign: "center",
    paddingHorizontal: 32,
    fontFamily: 'Inter_400Regular',
    color: '#95969D',
  }
})

export default OnboardingItems