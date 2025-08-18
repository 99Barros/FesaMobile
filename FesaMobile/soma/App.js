import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {

  const [valor1, setValor1] = useState(0);
  const [valor2, setValor2] = useState(0);
  const [resultado, setResultado] = useState(0);

  function somar() 
  {
    if(valor1 === '' || valor2 === '') 
      {
        Alert.alert('Preencha os campos na tela!' );
        return;
      }
    let soma = Number.parseFloat(valor1.replace(',', '.')) +
               Number.parseFloat(valor2.replace(',', '.'));
    setResultado(soma);

  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Meu primeiro APP Mobile !</Text>
      <Text style={styles.titulo}>Calculadora +</Text>

      <Text style={styles.labelCampo}>Digite o primeiro valor:</Text>
      <TextInput style={styles.caixaTexto}
      keyboardType='decimal-pad'
      onChangeText={(text)=> setValor1(text)}
      />

      <Text> {valor1} </Text>

      <Text style={styles.labelCampo}>Digite o segundo valor:</Text>
      <TextInput style={styles.caixaTexto}
      keyboardType='decimal-pad'
      onChangeText={(text)=> setValor2(text)}
      />

      <Text> {valor2} </Text>
      
      <TouchableOpacity style={styles.botaoSoma}
        onPress={() => somar()}
      >
      <Text style={styles.textoBotao}>Somar</Text>
      </TouchableOpacity>
      <Text style={styles.labelCampo}>
        Resultado: {resultado}
      </Text>
      <Text style={styles.rodape}>Desenvolvido por João Barros</Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontsize: 30,
    borderColor: '#000',
    borderWidth: 2,
    padding: 20,
    marginBottom: 15,
    color: "blue",
  },
  caixaTexto: {
    fontSize: 20,
    backgroundColor: '#94ebb4',
    borderBottomColor: '#15261b',
    borderBottomWidth: 3,
    width: '50%',
    borderRadius: 10,
  },
  labelCampo: {
    fontSize: 20,
    color: 'red',
    marginBottom: 10,
    marginTop: 15,
  },
  botaoSoma: {
    width: '40%',
    backgroundColor: '#c5ddeb',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    marginTop: 20,
    fontSize: 30,
  },
  textoBotao: {
    fontSize: 25,
  },
  rodape: {
    fontSize: 20,
    color: 'blue',
    marginTop: 100,
  },
});
