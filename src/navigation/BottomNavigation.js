import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Clinics from "../pages/Clinics";
import AntDesign from "react-native-vector-icons/AntDesign";
import { styles } from "../GlobalCSS";
i;

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          bottom: 0,
          left: 0,
          height: 60,
          right: 0,
          elevation: 0,
          paddingTop: 10,
          backgroundColor: "#104728",
        },
      }}
    >
      <Tab.Screen
        name="Clinics"
        options={{
          tabBarLabel: "",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={styles.viewIconStyle}>
              <AntDesign
                name="home"
                size={30}
                color={focused ? "#FFFFFF" : "#748c94"}
              />
            </View>
          ),
        }}
        component={Clinics}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;
