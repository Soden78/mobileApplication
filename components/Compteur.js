import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Compteur = ({ count }) => {
  return (
    <View style={styles.container}>
      <Text>Compteur : {count}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Compteur;
