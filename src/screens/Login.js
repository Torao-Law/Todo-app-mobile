import * as React from 'react'
import { StatusBar } from "expo-status-bar";
import { View, StyleSheet, Text, TextInput, TouchableOpacity, Image } from "react-native";
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

import IconLogin from '../../assets/images-private/login.png'

export default function Login({ navigation }) {
  const [isLogin, setIsLogin] = React.useState(false)
  const [login, setLogin] = React.useState({
    email: "",
    password: ""
  })

  const handleChanges = (title, value) => {
    setLogin({
      ...login,
      [title]: value
    })
  }

  console.log(login);

  const handlelogin = async () => {
    try {
      const config = {
          headers: {
              'Content-type': 'application/json',
          },
      };

      const body = JSON.stringify(login);

      setIsLogin(true)
      const response = await axios.post('https://api.kontenbase.com/query/api/v1/14e96dca-e8c4-4893-94b7-44725aebf22c/auth/login', body, config)
      console.log(response);
      setIsLogin(false)
      if (response){
          await AsyncStorage.setItem('token', response.data.token);
      }
      const value = await AsyncStorage.getItem('token');
      if (value !== null) {
          console.log(value);
          navigation.navigate("Home")
      }
      console.log(value);
    } catch (error) {
      console.log(error);
      alert(error.response.data.message);
    }
  }


  return (
    <View style={style.container}>
      <StatusBar style="auto"/>
      <View style={style.image}>
        <Image source={IconLogin} style={{height: "100%", width: "100%"}}/>
      </View>

      <Text style={style.header}>Sign In</Text>

      <TextInput placeholder="email" onChangeText={(value) => handleChanges("email", value)} style={style.textInput}/>

      <TextInput secureTextEntry={true} placeholder="password" onChangeText={(value) => handleChanges("password", value)} style={style.textInput}/>

      <View>
        <TouchableOpacity onPress={handlelogin}style={style.button}>
          <Text style={style.textButton}>Login</Text>
        </TouchableOpacity>

        <Text style={{marginTop: 20, textAlign: "center"}}>New Users ? <Text onPress={() => navigation.navigate("Register")} style={{color: "#FF5555", fontWeight: 800}}>Register</Text></Text>
      </View>
    </View>
  );
}

// Create Variable for CSS
const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  header: {
    fontSize: 25,
    marginTop: 48,
    textAlign: 'left',
    fontWeight: '800',
    marginBottom: 22
  },
  labelText: {
    color: 'grey',
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 5
  },

  image: {
    width: 228, 
    height: 258, 
    marginTop: 89
  },

  textInput: {
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    color: 'grey',
    width: 310,
    padding: 10,
    borderColor: 'grey'
  },
  button: {
    backgroundColor: '#FF5555',
    height: 40,
    width: 310,
    marginTop: 25,
    borderRadius: 5,
    justifyContent: 'center',
  },
  textButton: {
    color: '#FFF',
    fontWeight: 'bold',
    borderRadius: 5,
    textAlign: 'center',
  }

})
