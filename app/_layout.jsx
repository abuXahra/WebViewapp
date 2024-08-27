
import { View, Text } from 'react-native'
import React from 'react'

import { Stack } from 'expo-router';
import Index from '.';
import WebViewScreen from './webview';

export default function Layout() {
  return (
    <Stack>
        <Stack.Screen name="Splashscreen" options={{headerShown: false}} />
        <Stack.Screen name="index" options={{headerShown: false}} />
        <Stack.Screen name="webview" options={{headerShown: false}} />
    </Stack>
  );
}