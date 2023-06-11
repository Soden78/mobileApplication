import React, { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Button, Image } from 'react-native';
import { ButtonContext } from './ButtonContext';

const MainPage = (props) => {
  const { isOn, toggleButton } = useContext(ButtonContext);
  const handleButtonClick = () => {
    console.log('Valeur du bouton :', isOn);
    toggleButton();
  };

  if (isOn) {
    return (
      <View style={stylesDark.container}>
        <Text style={stylesDark.title}>Bienvenue sur mon application !</Text>
        <Text style={stylesDark.texte}>Vous pouvez vous connecter ou aller voir la liste des pokémons</Text>
        <Button onPress={handleButtonClick} title="Toggle Button" />

      </View>
    );
  }
  else {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Bienvenue sur mon application !</Text>
        <Text style={styles.texte}>Vous pouvez vous connecter ou aller voir la liste des pokémons</Text>
        <Button onPress={handleButtonClick} title="Dark Mode" />

      </View>
    );
  }

}
const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
    marginTop: 50,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 60,
    marginBottom: 16,
  },
  texte: {
    fontSize: 25,
    marginBottom: 16,
    color: 'red',
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
});


const stylesDark = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    color: 'white',
  },
  title: {
    fontSize: 60,
    marginBottom: 16,
    color: 'white',
  },
  texte: {
    fontSize: 25,
    marginBottom: 16,
    color: 'red',
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
export default MainPage;