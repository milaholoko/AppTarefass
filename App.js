import React from 'react';
import {NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from "@react-navigation/stack";
import Tasks from "./screens/Tasks";
import NewTask from "./screens/NewTask";
import Details from "./screens/Details";
import { StyleSheet, Text, View } from 'react-native';

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Tasks'>
        <Stack.Screen name= "task" component={Tasks}/>
        <Stack.Screen name= "newTask" component={NewTask}/>
        <Stack.Screen name= "detail" component={Details}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


