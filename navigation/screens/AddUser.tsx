/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {StyleSheet, Text, View, Button} from 'react-native';
import {useRef, useEffect, useState, StatusBar, useCallback} from 'react';
import axios from 'axios';
import {RNCamera} from 'react-native-camera';
import {useCamera} from 'react-native-camera-hooks';

const AddUser = () => {
  const [count, setCount] = useState(1);
  const [{cameraRef}, {takePicture}] = useCamera(null);

  if (count === undefined) {
    return <Text>Requesting Permissions...</Text>;
  } else if (!count) {
    return (
      <Text>Permission for camera not granted. Change this in settings.</Text>
    );
  }
  let takePic = async () => {
    const name = 'Mehmet';
    const formdata = new FormData();
    formdata.append(name);
    let options = {
      quality: 1,
      base64: true,
      exif: false,
    };
    try {
      const data = await takePicture(options);
      //console.log(data.base64);
      formdata.append(data.base64);
    } catch (error) {
      console.log(error);
    }
    formdata.append(count);
    console.log(formdata);
    fetch('http://10.0.2.2:3000/sendbase', {
      method: 'post',
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      body: formdata,
    });
    setCount(count + 1);

    /* let options = {
      quality: 1,
      base64: true,
      exif: false,
    };
    const name = 'Mehmet';
    //let photo = await camera.current.takePhoto(options);
    //    console.log(newPhoto.base64);

    // Yeni kullanıcı adı için input yapılacak
    if (count < 31) {
      axios({
        method: 'post',
        url: 'http://localhost:3000/sendbase',
        data: photo,
        headers: {'Content-Type': 'multipart/form-data'},
      })
        .then(function (response) {
          //Olumlu onay
          //console.log(response);
        })
        .catch(function (response) {
          //Olası hata
          //console.log(response);
        });
      setCount(count + 1);
    } else {
      console.log('Done !!!');
    } */
  };

  return (
    <View style={styles.container}>
      <RNCamera
        ref={cameraRef}
        type={RNCamera.Constants.Type.front}
        style={styles.preview}>
        <View style={styles.buttonContainer}>
          <Button title="Take Pic" onPress={takePic} />
        </View>
      </RNCamera>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    backgroundColor: '#fff',
    alignSelf: 'flex-end',
  },
  preview: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});

export default AddUser;
