import React, {useState} from 'react'
import { StatusBar } from "expo-status-bar";
import { View, StyleSheet, Text,  TouchableOpacity, Image, TextInput } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
// import { FormControl, Input } from "native-base";

import IconLogin from '../../assets/images-private/login.png'
import axios from 'axios';

export default function Register({ navigation }) {
  let [register, setRegister] = useState({
    firstName: "",
    email: "",
    password: ""
  })

  const handleChanges = (title, value) => {
    setRegister({
      ...register,
      [title]: value
    })
  }
  console.log(register)


  const handleRegister = async () => {
    try {
      const config = {
          headers: {
              'Content-type': 'application/json',
          },
      };

      const body = JSON.stringify(register);

      const response = await axios.post('https://api.kontenbase.com/query/api/v1/14e96dca-e8c4-4893-94b7-44725aebf22c/auth/register', body, config)
      console.log(response);

      if (response){
          await AsyncStorage.setItem('token', response.data.token);
      }
      const value = await AsyncStorage.getItem('token');
      if (value !== null) {
          console.log(value);
          navigation.navigate("Login")
      }
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

      <Text style={style.header}>Register</Text>
        <View>
            <TextInput 
                    placeholder="Name" 
                    onChangeText={(value) => handleChanges('firstName', value)}
                    value={register.firstName} style={style.textInput}/>
            <TextInput 
                    placeholder="Name" 
                    onChangeText={(value) => handleChanges('email', value)}
                    value={register.email} style={style.textInput}/>
            <TextInput 
                    placeholder="Name" 
                    onChangeText={(value) => handleChanges('password', value)}
                    value={register.password} style={style.textInput}/>
                    
        </View>
          <TouchableOpacity onPress={handleRegister} style={style.button}>
            <Text style={style.textButton}>Register</Text>
          </TouchableOpacity>

        <Text style={{marginTop: 20, textAlign: "center"}}>Joined us before? 
          <Text onPress={() => navigation.navigate("Login")} style={{color: "#FF5555", fontWeight: 800}}> Login</Text>
        </Text>
      </View>
  );
}

// Create Variable for CSS
const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20
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
  image: {
    width: 228, 
    height: 258, 
    marginTop: 89
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
