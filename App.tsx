/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, } from 'react-native';
let ad = "Emir";
let soyad = "ORHAN";
let sinif = "11B";
let ders = "Mobile Uygulamalar";
let mesaj = `Hosgeldin ${ad}`;
let year = 2023;



function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.box1}>
        <Text style={styles.mesaj}>{mesaj}</Text>
      </View>
      <View style={styles.box2}>
          <Text style={styles.textStyle}>Ad: {ad}</Text>
          <Text style={styles.textStyle}>Soyad: {soyad}</Text>
          <Text style={styles.textStyle}>Sinif: {sinif}</Text>
          <Text style={styles.textStyle}>Ders: {ders}</Text>
      </View>
      <View style={styles.box3}>
        <Text style={styles.textStyle}> {year}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  mesaj: {
    textAlign: 'center',
    color: 'red',
    backgroundColor: 'black'
  },
  container: {
    flex: 1, padding: 10
  },
  box1: {
    flex: 1,
    backgroundColor: 'red',
    justifyContent: 'center'
  },
  box2: {
    flex: 4,
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center'

  },
  box3: {
    flex: 1,
    backgroundColor: 'green',
    alignItems:'center',
    justifyContent:'center'
  },
  textStyle: {
    fontSize: 18,
    fontWeight: 'bold'
  }

})


export default App;
