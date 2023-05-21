import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity, Modal } from 'react-native';

const PokemonApi = () => {
    // Déclaration des états
  const [pokemonList, setPokemonList] = useState([]); // Const qui stocke la liste des Pokémons
  const [selectedPokemon, setSelectedPokemon] = useState(null); // Cela stocke le Pokémon sélectionné

  useEffect(() => {
    // Effectue une action au chargement du composant
    const fetchPokemonList = async () => {
      // Fonction pour récupérer la liste des 150 premiers Pokémons
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=150');
        const data = await response.json();
        setPokemonList(data.results); // Met à jour la liste des Pokémons
        fetchPokemonSprites(data.results); // Récupère les sprites des Pokémons
      } catch (error) {
        console.error(error);
      }
    };

    fetchPokemonList(); // Appelle la fonction pour récupérer la liste des Pokémon
  }, []);

  const fetchPokemonSprites = async (pokemonList) => {
    const updatedPokemonList = await Promise.all(
      pokemonList.map(async (pokemon) => {
        const sprite = await fetchPokemonSprite(pokemon.name); //récupère le sprite du Pokémon
        const type = await fetchPokemonType(pokemon.name); //récupère le type du Pokémon
        return { ...pokemon, sprite, type }; //on créer l'objet avec les informations du Pokémon
      })
    );
    setPokemonList(updatedPokemonList); //Puis on met à jour la liste des Pokémon
  };

  const fetchPokemonSprite = async (pokemonName) => {
    try {
      // Fonction pour récupérer le sprite d'un Pokémon
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
      const data = await response.json();
      return data.sprites.front_default;
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  const fetchPokemonType = async (pokemonName) => {
    try {
      //Récupère le type d'un Pokémon
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
      const data = await response.json();
      const types = data.types.map((type) => type.type.name);
      return types.join(', ');
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  const handlePokemonPress = (pokemon) => {
    setSelectedPokemon(pokemon); //permet de sélectionner un Pokémon (lorsque l'utilisateur clique sur un Pokémon)
  };

  const closeModal = () => {
    setSelectedPokemon(null); //ferme la modal
  };

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {pokemonList.map((pokemon, index) => (
        <TouchableOpacity
          key={index}
          style={styles.pokemonContainer}
          onPress={() => handlePokemonPress(pokemon)}
        >
          {pokemon.sprite ? (
            <Image source={{ uri: pokemon.sprite }} style={styles.pokemonImage} />
          ) : (
            <View style={styles.placeholderImage} />
          )}
          <View style={styles.pokemonInfo}>
            <Text style={styles.pokemonName}>{capitalizeFirstLetter(pokemon.name)}</Text>
          </View>
        </TouchableOpacity>
      ))}

      <Modal visible={selectedPokemon !== null} animationType="slide" transparent>
        <View style={styles.modalContainer}>
          {selectedPokemon && (
            <View style={styles.modalContent}>
              {selectedPokemon.sprite ? (
                <Image source={{ uri: selectedPokemon.sprite }} style={styles.modalPokemonImage} />
              ) : (
                <View style={styles.modalPlaceholderImage} />
              )}
              <Text style={styles.modalPokemonName}>
                {selectedPokemon.name}
              </Text>
              <Text style={styles.modalPokemonType}>Type: {selectedPokemon.type}</Text>
              <TouchableOpacity style={styles.modalCloseButton} onPress={closeModal}>
                <Text style={styles.modalCloseButtonText}>Close</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'flex-start',
    paddingVertical: 20,
  },
  pokemonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  pokemonImage: {
    width: 100,
    height: 100,
    marginRight: 10,
  },

  //pour montrer que l'image charge
  placeholderImage: {
    width: 100,
    height: 100,
    marginRight: 10,
    backgroundColor: 'lightgray',
  },
  pokemonInfo: {
    flex: 1,
  },
  pokemonName: {
    fontSize: 16,
    textTransform: 'capitalize', // rend la première lettre majuscule
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 20,
    alignItems: 'center',
  },
  modalPokemonImage: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
  //pour voir que l'image charge
  modalPlaceholderImage: {
    width: 200,
    height: 200,
    marginBottom: 10,
    backgroundColor: 'lightgray',
  },

  modalPokemonName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textTransform: 'capitalize', // rend la première lettre majuscule
  },

  modalPokemonType: {
    fontSize: 16,
    marginBottom: 20,
  },
  modalCloseButton: {
    backgroundColor: 'lightgray',
    padding: 10,
    borderRadius: 4,
  },
  modalCloseButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default PokemonApi;
