import React, { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import ProfilPage from './ProfilPage';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ButtonContext } from './ButtonContext';

const Login = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { isOn, toggleButton } = useContext(ButtonContext);
  const handleUsernameChange = (text) => {
    setUsername(text);
    console.log('Nom d\'utilisateur:', text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
    console.log('Mot de passe:', text);
  };


  if (isOn) {
    return (
    <View style={stylesDark.container}>
      <Icon name="user" size={30} color="white" />
      <Text style={stylesDark.textColor}> Nom </Text>
      <TextInput
        style={stylesDark.input}
        placeholder="Username" placeholderTextColor="gray"
        onChangeText={handleUsernameChange}

      />
      <Text style={stylesDark.textColor}> Password </Text>
      <TextInput
        style={stylesDark.input}
        placeholder="Password" placeholderTextColor="gray"
        onChangeText={handlePasswordChange}

      />
      <Button
        title='Log in '
        onPress={() => props.navigation.navigate('Page de Profil')}
      />
     <Button
        title='Sign In '
        onPress={() => props.navigation.navigate('Sign In')}
      />

    </View>
  );
}
else {
  return (
    <View style={styles.container}>
      <Icon name="user" size={30} color="#000" />
      <Text>Nom</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={handleUsernameChange}

      />
      <Text> Password </Text>
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={handlePasswordChange}

      />
      <Button
        title='Log in '
        onPress={() => props.navigation.navigate('Page de Profil')}
      />
     <Button
        title='Sign In '
        onPress={() => props.navigation.navigate('Sign In')}
      />
    </View>
  );
}
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
export default Login;