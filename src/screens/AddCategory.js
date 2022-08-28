import React, { useState,useEffect } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Input, Stack, FormControl } from 'native-base';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function AddCategory({ navigation }) {
    const [category, setCategory] = useState([])
    const [addCategory, setAddCategory] = useState({
        name: ""
    })

    const handleChanges = (name, value) => {
        setAddCategory({
            ...addCategory,
            [name]: value
        })
    }

    const fetchData = async() =>{
        try {
            const token = await AsyncStorage.getItem('token');
            if (token === null) {
                navigation.navigate("Login")
            }

            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + token
                },
            };

            const response = await axios.get('https://api.kontenbase.com/query/api/v1/14e96dca-e8c4-4893-94b7-44725aebf22c/categories', config);
            
            setCategory(response.data)

        } catch (error) {
            console.log(error);
        }
    }

    // mounting data from kontenbase
    useEffect(()=> {
        fetchData()
    },[])

    useEffect(() => {
        fetchData()
    },[addCategory])

    //post category by input text
    const handleSubmit = async () => {
        try {
            const token = await AsyncStorage.getItem('token');
                if (token === null) {
                    navigation.navigate("Login")
                }
            const config = {
                headers: {
                    'Content-type': 'application/json',
                    Authorization: 'Bearer ' + token
                },
            };
      
            const body = JSON.stringify(addCategory);

            const response = await axios.post('https://api.kontenbase.com/query/api/v1/14e96dca-e8c4-4893-94b7-44725aebf22c/categories', body, config)
            console.log(response);
            
            if (response){
                await AsyncStorage.setItem('token', response.data.token);
            }
            console.log(response);
            const value = await AsyncStorage.getItem('token');
            if (value !== null) {
                navigation.navigate("AddCategory")
            }
            console.log(value);
          } catch (error) {
            console.log(error);
            alert(error.response.data.message);
          }
    }

    return (
    <View style={{padding: 20}}>
        <View>
            <Text style={{marginBottom: 22, fontSize: 25, fontWeight: 800}}>Add Category</Text>
            <FormControl style={{alignItems: "center"}}>
                <Stack space={5}>
                    <Stack>
                    <Input variant="outline" onChangeText={(value) => handleChanges("name", value)} placeholder="Add Category" width={310} />
                    </Stack>
                </Stack>

                <TouchableOpacity onPress={handleSubmit} style={{backgroundColor: '#FF5555', height: 40, width: 310, marginTop: 25, borderRadius: 5, justifyContent: 'center'}}>
                    <Text style={{color: '#FFF', fontWeight: 'bold', borderRadius: 5, textAlign: 'center',}}>Add Category</Text>
                </TouchableOpacity>
            </FormControl>
        </View>

        <View style={{marginTop: 68}}>
            <Text style={{marginBottom: 22, fontSize: 25, fontWeight: 800}}>List Category</Text>
            <View style={{marginTop:20, flexDirection: "row"}}>
                {category.map((item, index) => {
                    return(
                        <Text key={item._id} style={{fontWeight: 800, color: "white", paddingHorizontal: 10, paddingVertical: 3, borderRadius: 5, marginRight: 5, backgroundColor: "#81C8FF"}}>{item?.name}</Text>
                    )
                })}
            </View>
        </View>
    </View>
    )
}
