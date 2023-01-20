import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GetStarted from "../pages/GetStarted.js";
import Login from "../pages/Login.js";
const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="GetStarted" options={{ headerShown: false }}>
          {() => <GetStarted />}
        </Stack.Screen>
        <Stack.Screen name="Login" options={{ headerShown: false }}>
          {() => <Login />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
