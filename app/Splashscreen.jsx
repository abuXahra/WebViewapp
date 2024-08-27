
// SplashScreen.js
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, ActivityIndicator } from 'react-native';
import logo  from '../assets/images/logo.png'
import { useRouter } from 'expo-router';

const SplashScreen = () => {
  const router = useRouter();

  useEffect(() => {
    // Simulate loading process
    const timer = setTimeout(() => {
      router.replace('/webview'); // Navigate to the index screen after splash
    }, 2000); // Duration of the splash screen

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, [router]);


  return (
    <View style={styles.container}>
      <Image
        source={logo} // Use the imported image
        style={styles.image}
       /> 
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#006600', // Or your preferred background color
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: "contain",
    
  },
});

export default SplashScreen;



    
              {/* <ActivityIndicator size="large" color="#fff" />
              <Text>Checking internet connection...</Text> */}