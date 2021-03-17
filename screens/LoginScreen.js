import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  ImageBackground, 
  Image, 
  Button, 
  Dimensions,
  TouchableOpacity } from "react-native";
import { MaterialCommunityIcons, EvilIcons } from '@expo/vector-icons';

import logo from "../assets/logo.jpg";
import bgImg from "../assets/bgImg.png";


const { width: WIDTH} = Dimensions.get("window")

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(
    [
       {
        "id": 1,
        "username": "abdoul",
        "password":"abdoul",
        "role": "admin"
      },
      {
        "id": 2,
        "username": "daff",
        "password":"daff",
        "role": "prof"
      },
      {
        "id": 3,
        "username": "doul",
        "password":"doul",
        "role": "parent"
      }
    ]
  );

  // useEffect(() => {
  //    signIn();
  // },[]);

  const signIn = () => {
    user.map((user) => {
      if((username === user.username)&&(password===user.password)){
              if (user.role==="admin"){ 
                    navigation.navigate("Admin");
                    }
              else if (user.role==="prof"){ 
                  navigation.navigate("Prof");
                  }
                  
              else if (user.role==="parent"){ 
                  return navigation.navigate("Parent");
                  }
                  setUsername("");
                  setPassword("");
        
        }});
  };

  return (
        <ImageBackground source={bgImg} style={styles.backgroundContainer}>
              <View style={styles.logoContainer}>
                    <Image source={logo} style={styles.logo}/>
                    <Text style={styles.logoText}>BIENVENUE À LA SALLE DES PROFS</Text>
                </View>
                <View style={styles.inputContainer}>
                    <MaterialCommunityIcons name="account-outline" size={24} color="rgba(25, 25, 255, 0.7)" style={styles.inputIcon} />
                    <TextInput
                    value={username}
                  onChangeText={(text) => setUsername(text)}
                      style={styles.input}
                      placeholder="Username"
                      placeholderTextColor={"rgba(25, 25, 255, 0.7)"}
                      underlineColorAndroid="transparent"
                    />
                </View>
                <View style={styles.inputContainer}>
                                    <EvilIcons name="unlock" size={24} color="rgba(25, 25, 255, 0.7)" style={styles.inputIcon}  />
                    <TextInput
                    value={password}
                  onChangeText={(text) => setPassword(text)}
                      style={styles.input}
                      placeholder="*********"
                      secureTextEntry
                      placeholderTextColor={"rgba(25, 25, 255, 0.5)"}
                      underlineColorAndroid="transparent"
                  
                    />
                    </View>
                    <TouchableOpacity style={styles.btnLogin} onPress={signIn}>
                      <Text style={styles.text}>CONNEXION</Text>
                    </TouchableOpacity>
          </ImageBackground>
);
};


export default LoginScreen;

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    resizeMode: "cover",
    alignItems: "center",
    justifyContent: "center",
   
  },
  logoContainer:{
    alignItems: "center",
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
  inputContainer:{
    marginTop: 10,
  },
  input: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    fontSize: 16,
    paddingLeft: 45,
    backgroundColor: "rgba(82, 181, 187, 0.35)",
    color: "rgba(25, 25, 255, 0.7)",
    marginHorizontal: 25,

  },
  inputIcon:{
    position: "absolute",
    top: 8,
    left: 37,
  },
  btnLogin:{
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    justifyContent: "center",
    marginTop: 20,

  },
  text:{
    color: "rgba(25, 25, 255, 0.7)",
    fontSize: 16,
   textAlign:"center",

  },
});





