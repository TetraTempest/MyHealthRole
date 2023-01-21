import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Clinics from "../pages/Clinics";
import Settings from "../pages/Settings";
import AntDesign from "react-native-vector-icons/AntDesign";
import Fontisto from "react-native-vector-icons/Fontisto";
import { styles } from "../GlobalCSS";
import { View } from "react-native";
import MyAppointments from "../pages/MyAppointments";

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <View
      style={{
        position: "relative",
        paddingTop: 20,
        height: 60,
        flex: 1,
        width: "100%",
      }}
    >
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            ...styles.tabNavigationStyle,
            ...styles.primaryColor,
          },
        }}
      >
        <Tab.Screen
          name="Home"
          options={{
            tabBarLabel: "",
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <View style={styles.viewIconStyle}>
                <AntDesign
                  name="home"
                  size={30}
                  color={focused ? "#FFFFFF" : "#000000"}
                />
              </View>
            ),
          }}
          component={Clinics}
        />

        <Tab.Screen
          name="MyAppointments"
          options={{
            tabBarLabel: "",
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <View style={styles.viewIconStyle}>
                <Fontisto
                  name="prescription"
                  size={30}
                  color={focused ? "#FFFFFF" : "#000000"}
                />
              </View>
            ),
          }}
          component={MyAppointments}
        />

        <Tab.Screen
          name="Settings"
          options={{
            tabBarLabel: "",
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <View style={styles.viewIconStyle}>
                <AntDesign
                  name="setting"
                  size={30}
                  color={focused ? "#FFFFFF" : "#000000"}
                />
              </View>
            ),
          }}
          component={Settings}
        />
      </Tab.Navigator>
    </View>
  );
};

export default BottomNavigation;
