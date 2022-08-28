import * as React from 'react'
import { Text } from 'react-native'
import { Pressable, View } from 'react-native'

function Button(props) {
    if(props.style == "isPrimary") {
        return props.style = {backgroundColor: '#FF5555', height: 40, width: 310, borderRadius: 5,justifyContent: 'center'}
    } else {
        if(props.style == "isSecondary") {
            return {backgroundColor: '#0000004F', marginTop: 11, height: 40, width: 310, borderRadius: 5, justifyContent: 'center'}
        } 
    }

    

    return(
        <View>
             <Pressable onPress={props.onPress} style={props.style}>
                <Text style={props.styleText}>{props.text}</Text>
             </Pressable>
        </View>
    )
}
export default Button