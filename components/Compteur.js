import React, {useContext} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ButtonContext } from './ButtonContext';


const Compteur = ({ count }) => {

    const { isOn, toggleButton } = useContext(ButtonContext);

      if (isOn) {

  return (
    <View style={stylesDark.container}>
      <Text style={stylesDark.textColor}>Compteur : {count}</Text>
    </View>
  );
}
else{
  return (
    <View style={styles.container}>
      <Text>Compteur : {count}</Text>
    </View>
  );
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const stylesDark = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    color:'white',
  },
  title: {
    fontSize: 32,
    marginBottom: 16,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 8,
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 12,
    borderRadius: 4,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textColor: {
    color: 'white',
  }
});

export default Compteur;
