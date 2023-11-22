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

let marka="Ford";
let model="Mustang";
let renk="Gri";

let mesaj2=`Benim ${marka} marka ${model} model ${renk} bir arabam var`;

function App(): JSX.Element {


  return (
    <SafeAreaView >
      <View>
        <Text style={styles.mesaj}>{mesaj}</Text>
        <Text style={styles.mesaj2}>{mesaj2}</Text>
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
