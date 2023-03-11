import { useState } from 'react'
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import * as ImagePicker from 'expo-image-picker';


const Profile = () => {
  const [image, setImage] = useState('')

  const selectFile = async () => {
    const formData = new FormData();
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    formData.append('image', {
      uri: result.assets[0].uri,
      name: 'image.jpg',
      type: 'image/jpeg',
    });

    formData.append('des', 'test')

    if (!result.canceled) {
      // Aquí puedes hacer algo con la imagen seleccionada, como enviarla a un servidor.
      fetch('http://192.168.1.4:4000/api/jobizz/images/', {
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data; boundary=----MyCustomBoundary123'
        },
        body: formData
      })

      setImage(result.assets[0].uri);
    }
  }

  return (
    <SafeAreaView>
      <TouchableOpacity onPress={selectFile}>
        <Text>Subir archivo</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Profile