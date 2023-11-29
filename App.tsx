/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, Button, Alert, TouchableOpacity } from 'react-native';
let ad = "Emir";
let soyad = "ORHAN";
let sinif = "11B";
let ders = "Mobile Uygulamalar";
let mesaj = `Hosgeldin ${ad}`;
let yil = 2023;



function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={{ uri: "https://picsum.photos/200/300" }} style={{ width: 200, height: 200 ,marginTop:10}} />
      <Text>Image from url</Text>

      <Image source={require("./Assets/Pictures/tree.jpg")} style={{ width: 100, height: 150 }} />
      <Text>Image from local sources</Text>

      <Button onPress={() => Alert.alert("pressed!")}
        title="Click"
        color="hsl(196, 100%, 50%)"
        accessibilityLabel="Learn more about this purple button"
      />

      <TouchableOpacity style={styles.touchableOpacityComponentStil} onPress={()=>Alert.alert("Clicked TOC")}>
        <Text style={{color:"white"}}>Click</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1, padding: 10,
    alignItems:"center",
    justifyContent:"center"
  },
  touchableOpacityComponentStil:{
     borderRadius:20,
     width:50,
     height:30,
     backgroundColor:"hsl(196, 51%, 50%)",
     alignItems:"center",
     justifyContent:"center",
     marginTop:30
  }

})


export default App;
