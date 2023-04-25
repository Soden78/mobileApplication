import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import axios from 'axios';

const PokemonApi = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const getPokemons = async () => {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=100');
      const results = response.data.results;
      const newPokemons = [];

      for (let i = 0; i < results.length; i++) {
        const pokemon = await axios.get(results[i].url);
        newPokemons.push(pokemon.data);
      }
      setPokemons(newPokemons);
    };

    getPokemons();
  }, []);

  return (
    <ScrollView style={styles.container}>
      {pokemons.map((pokemon, index) => (
        <View key={index} style={styles.pokemon}>
          <Image source={{ uri: pokemon.sprites.front_default }} style={styles.image} />
          <Text style={styles.name}>{pokemon.name}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  pokemon: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default PokemonApi;