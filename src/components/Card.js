import React from 'react';
import {Text, View} from 'react-native'
import { VStack, Box, Divider } from 'native-base';

// assets
// import icCalendar from '../../assets/images-private/icon-calendar.png'

export default function Card() {
  return (
    <Box border="1" borderRadius="md">
      <VStack space="4" divider={<Divider />}>
        <Box style={{ width: "100%", backgroundColor: "#DAEFFF", paddingHorizontal: 17, paddingVertical: 9}}>
            <View>
                <View>
                    <Text style={{fontWeight: 800}}>Study - Golang</Text>
                    <Text>Learn Golang to improve fundamentals and familiarize with coding.</Text>
                </View>
                <Text>19 July 2022</Text>
            </View>
            <View>
                <Text>Check</Text>
            </View>
        </Box>
      </VStack>
    </Box>
  );
}