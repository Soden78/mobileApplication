
import MainPage from './components/MainPage';
import PokemonApi from './components/PokemonApi';
import MyCarousel from './components/Carousel';
import ProfilPage from './components/ProfilPage';
import ConnexionPage from './components/ConnexionPage';
import Login from './components/Login';
import React, { useState } from 'react';
import { NavigationContainer, useFocusEffect } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Compteur from './components/Compteur';

const Tab = createBottomTabNavigator();

function CompteurTabScreen() {
  const [count, setCount] = useState(0);

  useFocusEffect(
    React.useCallback(() => {
      setCount((prevCount) => prevCount + 1);
    }, [])
  );

  return (
    <Compteur count={count} />
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Accueil" component={MainPage} />
        <Tab.Screen name="Login" component={Login} />
        <Tab.Screen name='Page de Profil' component={ProfilPage} />
        <Tab.Screen name='Sign In' component={ConnexionPage} />
        <Tab.Screen name="MyCarousel" component={MyCarousel} />
        <Tab.Screen name="Pokémons" component={PokemonApi} />
        <Tab.Screen name="Compteur" component={CompteurTabScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


