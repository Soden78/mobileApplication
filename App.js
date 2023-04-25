import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button } from 'react-native';
import Login from './components/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProfilPage from './components/ProfilPage';
import ConnexionPage from './components/ConnexionPage';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainPage from './components/MainPage';
import PokemonApi from './components/PokemonApi';
const Tab = createBottomTabNavigator();
const {Navigator,Screen} = createStackNavigator();



export default function App() {
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Accueil" component={MainPage}/>
          <Tab.Screen name="Login" component={Login} />
          <Tab.Screen name='Page de Profil' component={ProfilPage}/>
          <Tab.Screen name='Sign In' component={ConnexionPage}/>
          <Tab.Screen name="Pokémons" component={PokemonApi} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#gold',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
