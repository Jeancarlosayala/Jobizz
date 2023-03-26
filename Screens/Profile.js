import {  Text, SafeAreaView, TouchableOpacity } from 'react-native'
import * as ImagePicker from 'expo-image-picker';
import { HOST_BACKEND, BOUNDARY } from "@env";


const Profile = () => {

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

    if (!result.canceled) {
      // Aquí puedes hacer algo con la imagen seleccionada, como enviarla a un servidor.
      fetch(`http://${HOST_BACKEND}:4000/api/jobizz/user/`, {
        method: 'PUT',
        headers: {
          'Content-Type': `multipart/form-data; boundary=${BOUNDARY}`
        },
        body: formData
      })
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