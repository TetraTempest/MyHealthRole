import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GetStarted from "../pages/GetStarted.js";
import Login from "../pages/Login.js";
import BottomNavigation from "./BottomNavigation";
import CreateAppointment from "../pages/CreateAppointment";

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

        <Stack.Screen
          name="Clinics"
          component={BottomNavigation}
          options={{ header: () => null }}
        />

        <Stack.Screen
          name="CreateAppointment"
          component={CreateAppointment}
          options={{ header: () => null }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
