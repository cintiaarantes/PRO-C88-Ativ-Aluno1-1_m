import React, { Component } from 'react';
import { Text, View, StyleSheet, SafeAreaView, Platform, StatusBar } from 'react-native';

//Desafio 01: Importar o componente dos botões. 
//Desafio 04: Criar dentro os 3 botões
 
export default class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
        <View style={styles.titleBar}>
          <Text style={styles.titleText}>App Rastreador EEI</Text>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { //Estilização da tela 
    flex: 1,
  },
  droidSafeArea: { //Estilização da barra de status, analisando o sistema operacional do dispositivo 
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  titleBar: { //Estilização do espaço destinado para o título do App
    flex: 0.15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: { //Estilização do título do App
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
  //Desafio 02 e 03: Criar o objeto de estilo do formato do botão e do texto do botão

});
