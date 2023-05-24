import React from 'react';
import {
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';

function App(): JSX.Element {
  return (
    <View style={styles.container}>
      <Image source={require('./assets/nowifi.png')} />
      <Text style={styles.text}>No internet Connection</Text>
      <Text style={styles.text2}>Your internet connection is currently not available. Please check or try again.</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Click Me</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
    marginVertical: 10,
  },
  text2: {
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 10,
  },
  button: {
    backgroundColor: 'green',
    paddingVertical: 25,
    paddingHorizontal: 150,
    borderRadius: 30,
    marginVertical: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default App;
