

// app/index.jsx
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import SplashScreen from './Splashscreen';

export default function Index() {
  return (
    <SplashScreen/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonContainer: {
    width: '100%',
    maxWidth: 400,
  },
});
