import React, { useState } from 'react';
import { View, Text, StyleSheet,TextInput,Button } from 'react-native';



const ConnexionPage =(props)=>{
    return (
        <View style={styles.container}>
            
            <Text >nom </Text>
            <TextInput
                style={styles.input}
                placeholder="Username"
            />
            <Text> email </Text>
            <TextInput
                style={styles.input}
                placeholder="Password"

            />
            <Text> Password </Text>
            <TextInput
                style={styles.input}
                placeholder="Password"
            />
            <Button
            title='Sign In '
            onPress={()=> props.navigation.navigate('ProfilPage')}
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