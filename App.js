import { StatusBar } from 'expo-status-bar';
import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./screens/LoginScreen";
import ProfScreen from "./screens/ProfScreen";
import ParentScreen from "./screens/ParentScreen";
import AdminScreen from "./screens/AdminScreen";

import bgImg from "./assets/bgImg.png"

const Stack = createStackNavigator();

export default function App() {
 return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Prof" component={ProfScreen} />
        <Stack.Screen name="Parent" component={ParentScreen} />
        <Stack.Screen name="Admin" component={AdminScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

  // container: {
  //   flex: 1,
  //   backgroundColor: '#368489',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },

});
