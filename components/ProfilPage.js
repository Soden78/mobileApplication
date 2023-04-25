import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProfilPage = (props)=>{
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profil</Text>
      <Text>Nom: </Text><Text style={styles.texte}>Demoineret</Text>
      <Text>Prénom: </Text><Text style={styles.texte}>Denis</Text>
      <Text>Email: </Text><Text style={styles.texte}>Demoineret.Denis78@gmail.com</Text>
    </View>
  );
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

export default ProfilPage;