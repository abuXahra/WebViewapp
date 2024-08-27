
// SplashScreen.js
import React from 'react';
import { View, Text, StyleSheet, Image, ActivityIndicator } from 'react-native';
import logo  from '../assets/images/logo.png'

const Loader = () => {
  return (
    <View style={styles.container}>
      {/* <ActivityIndicator size="large" color="#fff" /> */}
      <Image
        source={logo} // Use the imported image
        style={styles.image}
      /> 
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1000,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#006600', // Or your preferred background color
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: "black"
  },
  image:{
    width: 160,
    resizeMode:"contain",
  }
});

export default Loader;
