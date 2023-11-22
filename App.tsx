/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
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
        <Text>{mesaj2}</Text>
      </View>
    </SafeAreaView>
  );
}


export default App;
