import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import ProfilPage from './ProfilPage';

const Login = (props) => {
  return (
    <View style={styles.container}>
      <Text>Nom</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
      />
      <Text> Password </Text>
      <TextInput
        style={styles.input}
        placeholder="Password"
      />
      <Button
        title='Log in '
        onPress={() => props.navigation.navigate('ProfilPage')}
      />
      <Button
        title='Sign In '
        onPress={() => props.navigation.navigate('SignIn')}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
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
});

export default Login;