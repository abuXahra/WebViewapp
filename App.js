import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { ExpoRoot, SplashScreen, Stack } from "expo-router";

function App() {
  return <SplashScreen />;
}

export default App;

// Stack>
//       <Stack.Screen
//         name="WebviewPage"
//         component={WebviewPage}
//         options={{ headerShown: false }}
//       />
//     </Stack>
