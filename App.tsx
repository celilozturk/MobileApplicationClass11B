/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
let ad="Ege";
let soyad="AYDIN";

let mesaj=`Merhaba, benim adim ${ad} soyadim ${soyad}`;
console.log(mesaj);


function App(): JSX.Element {


  return (
    <SafeAreaView >
      <View>
        <Text style={styles.metin}>Merhaba Dunya</Text>
      </View>
    </SafeAreaView>
  );
}

const styles=StyleSheet.create({
  mesaj:{
    color:'red',
    backgroundColor:'gray',
  },
  mesaj2:{
    color:'green',
    backgroundColor:'yellow',
  },
  metin:{
    textAlign:'center',
    color:'red',
    backgroundColor:'Black'
  }

})


export default App;
