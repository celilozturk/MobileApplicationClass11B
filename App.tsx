/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React,{useState,useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';


function App(): JSX.Element {

// const [todos,setTodos]=useState<any[]>([]);
const [todos,setTodos]=useState([]);
const [sayilar,setSayilar]=useState([0,1,2,3,4,5,6,7,8,9])

useEffect(()=>{
  fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response)=>response.json())
  .then(json=>setTodos(json))
},[])
  return (
    <SafeAreaView >
      {
        todos.map((todo,index)=>(
          <Text>{todo["id"]} - {todo['title']}</Text>
        ))
      }
      <View >
    {
      sayilar.map((sayi,index)=>(
        <Text>{sayi} </Text>
      ))
    }
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
