/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, TextInput } from 'react-native';


function App(): JSX.Element {
  const [text, onChangeText] = useState("Kullanici Adi");
  const [sifre, onChangeSifre] = useState('');
  console.log(text);
  console.log(sifre);
  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />

      <TextInput
        style={styles.input}
        onChangeText={onChangeSifre}
        value={sifre}
        placeholder="useless placeholder"
        keyboardType="numeric"
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1, padding: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "hsl(196, 51%, 50%)",
  },
  touchableOpacityComponentStil: {
    borderRadius: 20,
    width: 50,
    height: 30,
    backgroundColor: "hsl(196, 51%, 50%)",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30
  },
  input: {
    height: 50,
    margin: 10,
    borderWidth: 1,
    padding: 10,
  }

})


export default App;
