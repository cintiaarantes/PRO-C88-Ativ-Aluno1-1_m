import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//Desafio 01: Importar as telas criadas 
import HomeScreen from "./screens/Home";
import IssLocationScreen from "./screens/IssLocation";
import MeteorScreen from "./screens/Meteors";
import UpdateScreen from "./screens/Updates";

//Desafio 02: Criar uma função createStackNavigator e armazenar em uma constante chamada Stack
const Stack = createStackNavigator();

export default function App() {
  return (
    //Desafio 03: Usar o componente NavigationContainer e dentro dele adicionar as telas. 
    <NavigationContainer>
      <Stack.Navigator initialRouteName = "Home" screenOptions = {{headerShown: false}}>
        <Stack.Screen name = "Home" component = {HomeScreen}/>
        <Stack.Screen name = "IssLocation" component = {IssLocationScreen}/>
        <Stack.Screen name = "Meteors" component = {MeteorScreen}/>
        <Stack.Screen name = "Updates" component = {UpdateScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}