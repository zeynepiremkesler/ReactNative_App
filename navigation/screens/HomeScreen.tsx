import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const HomeScreen = () => {
  const onPress = () => {
    fetch('http://10.0.2.2:3000/runscript', {
      method: 'GET',
      //Request Type
    })
      .then(response => response.json())
      //If response is in json then in success
      .then(responseJson => {
        //Success
        console.log(responseJson);
      })
      //If response is not in json then in error
      .catch(error => {
        //Error
        console.error(error);
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.countContainer}>
        <Text>Count:</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text>Press Here</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
  countContainer: {
    alignItems: 'center',
    padding: 10,
  },
});

export default HomeScreen;
