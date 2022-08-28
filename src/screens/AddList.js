import React, { useRef } from 'react'
import { TouchableOpacity } from 'react-native';
import { View, Text, FormControl, Stack, Input, Select, CheckIcon, TextArea } from 'native-base'

export default function AddList() {
    const ref = useRef()
    const [service, setService] = React.useState("");

    return (
        <View style={{padding: 20}}>
            <Text style={{marginBottom: 22, fontSize: 25, fontWeight: 800}}>AddList</Text>
            <FormControl>
                <Stack>
                    <Input variant="outline" placeholder="Name" />
                    <Select selectedValue={service} width="100%" accessibilityLabel="Choose Service" placeholder="Category" _selectedItem={{bg: "teal.600", endIcon: <CheckIcon size="5" />}} mt={13} onValueChange={itemValue => setService(itemValue)}>
                        <Select.Item label="Study" value="study" />
                        <Select.Item label="Home Work" value="home-work" />
                        <Select.Item label="Workout" value="workout" />
                    </Select>
                    <Input type="date" mt={13} color="gray" ref={ref} onChange={(e) => console.log(e.target.value)} onFocus={() => (ref.current.type = "date")} onBlur={() => (ref.current.type = "date")} />
                    <TextArea h={20} mt={13} placeholder="Text Area Placeholder" w="100%"/>
                </Stack>

                <TouchableOpacity onPress={() => navigation.navigate('Home')}style={{backgroundColor: '#FF5555', height: 40, width: "100%", marginTop: 52, borderRadius: 5, justifyContent: 'center'}}>
                    <Text style={{color: '#FFF', fontWeight: 'bold', borderRadius: 5, textAlign: 'center',}}>Add Category</Text>
                </TouchableOpacity>
            </FormControl>
        </View>
    
  )
}
