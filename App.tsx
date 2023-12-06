/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';


function App(): JSX.Element {
  const [text, onChangeText] = React.useState('');
  const [sifre, onChangeSifre] = React.useState('');
  console.log(text+" "+sifre);

  return (
    <SafeAreaView style={{flex:1}}>
    <View style={styles.header}>
       <TextInput
           style={styles.input}
           onChangeText={onChangeText}
           value={text}
           placeholder="Kullanıcı Adı"
         />
       <TextInput
       value={sifre}
       onChangeText={onChangeSifre}
       style={styles.input}
       placeholder="Şifre"
       keyboardType='visible-password'
      //  secureTextEntry='true'
       />
     </View>

     <View style={styles.body}>
       <TouchableOpacity  onPress={()=>console.log("Giriş Yapıldı")}>
         <View style={styles.buttonStil}>
           <Text style={styles.textStyle}>Giriş Yap</Text>
         </View>
       </TouchableOpacity>

       <TouchableOpacity  onPress={()=>console.log("Kayıt")} >
           <View style={styles.buttonStil} >
               <Text  style={styles.textStyle}>Kayıt Ol</Text>
           </View>
       </TouchableOpacity>
     </View>

     <View style={styles.footer}>
       <Text style={styles.textStyle}>Made By Class 11/B</Text>
     </View>

 </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor:'white',
    color:'orange'
  },
  header:{
    flex:0.5,
    backgroundColor:'orange',
    justifyContent:'center',
    alignItems:'center',
    borderWidth:3,
    borderColor:'black',
    borderBottomLeftRadius:20,
    borderBottomRightRadius:20,
    padding:15,
    margin:15,
  },
  body:{
    flex:0.4,
    flexDirection:'row',
    backgroundColor:'azure',
    justifyContent:'center',
    alignItems:'center',
    borderWidth:3,
    borderColor:'black',
    borderRadius:20,
    padding:15,
    margin:15,
  },
  buttonStil:{
    height:50,
    width:75,
    backgroundColor:'#527853',
    color:'azure',
    margin:5,
    justifyContent:'center',
    alignItems:'center',
     borderRadius:20,
  },
  footer:{
    flex:0.1,
    backgroundColor:'orange',
     borderWidth:3,
    borderColor:'black',
    borderTopRightRadius:20,
    borderTopLeftRadius:20,
    padding:2,
    margin:10,
    justifyContent:'center',
  },
  textStyle:{
    color:'#6B240C',
  }

})


export default App;
