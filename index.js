import * as React from 'react'
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
// screens
import Auth from './src/screens/Auth';
import Login from './src/screens/Login';
import Register from './src/screens/Register';
import AddList from './src/screens/AddList.js';
import AddCategory from './src/screens/AddCategory';
import Home from './src/screens/Home';
import DetailTodo from './src/screens/DetailTodo';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator()

function ButtonTab(){
  return(
  <Tab.Navigator screenOptions={({route})=> ({ headerMode: 'screen', headerTintColor: 'white', headerStyle: {backgroundColor: "#FFF333"},
    tabBarIcon: ({focused}) => {
      let iconName;
      if(route.name == "Home"){
        iconName = focused ? "home" : "home-outline" 
        } else if(route.name == "AddList"){
          iconName = focused ? "list" : "list-outline" 
        } else if(route.name == "AddCategory"){
          iconName = focused ? "bookmarks" : "bookmarks-outline"
        }
        return <Ionicons name={iconName} size={20} color="navy" />
        },
        tabBarActiveTintColor: "#FF5555",
        tabBarInactiveTintColor: "grey"})} >

    <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
    <Tab.Screen name="AddList" component={AddList} />
    <Tab.Screen name="AddCategory" component={AddCategory}/>
  </Tab.Navigator>
  )
}

export default function App() {

  return (
      <NavigationContainer>
        <StatusBar style="auto" />
          <Stack.Navigator>
            <Stack.Screen name="Auth" component={Auth} options={{headerShown: false}}/>
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="Register" component={Register}/>
            <Stack.Screen name="DetailTodo" component={DetailTodo} options={{headerShown: false}}/>
            <Stack.Screen name="Home" component={ButtonTab} options={{headerShown: false, headerTintColor:"white",
                headerMode: 'screen'}}/>
          </Stack.Navigator>
      </NavigationContainer>
  );
}