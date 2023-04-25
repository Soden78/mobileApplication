import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet,Button,Image } from 'react-native';

const MainPage =(props)=> {

  return (
    <View style={styles.container}>
        <Text style={styles.title}>Bienvenue sur mon application !</Text>
        <Text style={styles.texte}>Vous pouvez vous connecter ou aller voir la liste des pokémons</Text>
    </View>

  );
}
const styles = StyleSheet.create({
  image:{
      width:150,
      height:150,
      marginBottom:20,
      marginTop:50,
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

export default MainPage;