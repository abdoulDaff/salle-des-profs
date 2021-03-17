import { StatusBar } from 'expo-status-bar';
import React from "react";
import { ImageBackground, StyleSheet, Text, View, Image } from "react-native";

import logo from "../assets/logo.jpg";
import bgImg from "../assets/bgImg.png";


const AdminScreen = ({ navigation }) => {
  return (
      <View style={styles.container}>
          <View style={styles.logoContainer}>
             <Image source={logo} style={styles.logo}/>
           <Text style={styles.logoText}>BIENVENUE À LA SALLE DES PROFS</Text>
        </View>
      <Text>AdminScreen</Text>
    </View>
);
}

export default AdminScreen;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#368489',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
logoContainer:{
    alignItems: "center",
    marginTop:10,
    marginBottom: 50,

  },
  logo: {
     width: 120,
     height: 120,
  },
  logoText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
 
  },
});