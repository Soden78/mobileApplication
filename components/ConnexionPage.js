import React, { useState } from 'react';
import { View, Text, StyleSheet,TextInput,Button } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';



const ConnexionPage =(props)=>{
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleNomChange = (text) => {
    setUsername(text);
    console.log('Nom d\'utilisateur:', text);
  };

  const handleEmailChange = (text) => {
    setEmail(text);
    console.log('Email:', text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
    console.log('Mot de passe:', text);
  };

    return (
        <View style={styles.container}>
            
            <Text >nom </Text>
            <TextInput
                style={styles.input}
                placeholder="Username"
                onChangeText={handleNomChange}

            />
            <Text> email </Text>
            <TextInput
                style={styles.input}
                placeholder="Email"
                onChangeText={handleEmailChange}


            />
            <Text> Password </Text>
            <TextInput
                style={styles.input}
                placeholder="Password"
                onChangeText={handlePasswordChange}

            />
            <Button
            title='Sign In'
            onPress={() => props.navigation.navigate('Page de Profil')}
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
  export default ConnexionPage;