import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ButtonContext } from './ButtonContext';

const ProfilPage = (props)=>{
  const { isOn, toggleButton } = useContext(ButtonContext);
  if (isOn) {
    return (
      <View style={stylesDark.container}>
        <Text  style={stylesDark.title}>Profil</Text>
        <Text style={stylesDark.textColor}>Nom: </Text><Text style={stylesDark.texte}>Demoineret</Text>
        <Text style={stylesDark.textColor}>Prénom: </Text><Text style={stylesDark.texte}>Denis</Text>
        <Text style={stylesDark.textColor}>Email: </Text><Text style={stylesDark.texte}>Demoineret.Denis78@gmail.com</Text>
      </View>
    );
  }
  else{
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Profil</Text>
        <Text>Nom: </Text><Text style={styles.texte}>Demoineret</Text>
        <Text>Prénom: </Text><Text style={styles.texte}>Denis</Text>
        <Text>Email: </Text><Text style={styles.texte}>Demoineret.Denis78@gmail.com</Text>
      </View>
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    marginBottom: 16,
  },
  texte: {
    fontSize: 24,
    color: 'blue'
  }
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
    color: 'white'
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
  },
  texte: {
    fontSize: 24,
    color: 'blue'
  }
});
export default ProfilPage;