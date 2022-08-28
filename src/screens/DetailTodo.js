import React from "react";
import { View, Text, Image } from "react-native";

export default function DetailList() {

return (
    <View style={{padding: 20}}>
        <View style={{backgroundColor: "#DAEFFF", padding: 10, height: "100%"}}>
            <View style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                <View>
                    <Text style={{marginBottom: 22, fontSize: 25, fontWeight: 800}}>Study - Golang</Text>
                </View>
                <View style={{alignItems: "center"}}>
                    <Text style={{fontWeight: 800, color: "white", paddingHorizontal: 10, paddingVertical: 3, borderRadius: 5, marginRight: 5, backgroundColor: "#81C8FF", marginBottom: 10}}>Study</Text>
                    <Image source={{uri:'https://res.cloudinary.com/alfiancloud/image/upload/v1661524163/waystodo/Vector_slaxjp.png'}} style={{width:30,height:30}}/>
                </View>   
            </View>
            <View style={{marginTop: 23}}>
                <Text>
                This guide covers the various navigation components available in React Native. If you are getting started with navigation, you will probably want to use React Navigation. React Navigation provides a straightforward navigation solution, with the ability to present common stack navigation and tabbed navigation patterns on both Android and iOS.
                </Text>
            </View>
        </View>
    </View>
    );
}