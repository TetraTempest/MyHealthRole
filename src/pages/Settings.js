import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
  Switch,
} from "react-native";
import React, { useState } from "react";
import { styles } from "../GlobalCSS";
import Icon from "react-native-vector-icons/Ionicons";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";

const Settings = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
  }
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView nestedScrollEnabled={true}>
        <View>
          <Text style={styles.settingHeader}>Settings</Text>
        </View>
        <View style={styles.settingContainer}>
          <View style={styles.editContainer}>
            <Image
              style={styles.settingImage}
              source={require("../../assets/user.png")}
            />

            <TouchableOpacity style={styles.editProfileBtn}>
              <View style={styles.profileNameContainer}>
                <Text style={styles.profileName}>Amy Jasmine</Text>
                <Text style={styles.editDetails}>Edit personal details</Text>
              </View>
              <View style={styles.profileIcon}>
                <Icon name={"chevron-forward"} size={25} color="#343541" />
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.darkModeContainer}>
            <Icon
              name={"moon"}
              size={25}
              style={{ ...styles.primaryColor, ...styles.darkMode }}
            />
            <Text style={styles.darkModeText}>Dark Mode</Text>
            <View style={styles.switchDarkIcon}>
              <Switch
                trackColor={{ false: "#767577", true: "#343541" }}
                thumbColor={isEnabled ? "#4B91F1" : "#ffffff"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            </View>
          </View>

          <View>
            <View style={styles.topicMargin}>
              <Text style={styles.topicFont}>Profile</Text>
            </View>
            <View style={styles.darkModeContainer}>
              <Icon
                name={"person"}
                size={20}
                style={{ ...styles.primaryColor, ...styles.darkMode }}
                color={"#FFFFFF"}
              />
              <Text style={styles.darkModeText}>Edit Profile</Text>
              <View style={styles.switchDarkIcon}>
                <TouchableOpacity style={styles.generalBtn}>
                  <Icon name={"chevron-forward"} size={25} color="#343541" />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View>
            <View style={styles.topicMargin}>
              <Text style={styles.topicFont}>Regional</Text>
            </View>
            <View style={styles.darkModeContainer}>
              <Icon
                name={"md-language-sharp"}
                style={{ ...styles.primaryColor, ...styles.darkMode }}
                color={"#FFFFFF"}
              />
              <Text style={styles.darkModeText}>Language</Text>
              <View style={styles.switchDarkIcon}>
                <TouchableOpacity style={styles.generalBtn}>
                  <Icon name={"chevron-forward"} size={25} color="#343541" />
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.darkModeContainer}>
              <MaterialIcon
                name={"logout"}
                size={20}
                style={{ ...styles.primaryColor, ...styles.darkMode }}
              />
              <Text style={styles.darkModeText}>Logout</Text>
              <View style={styles.switchDarkIcon}>
                <TouchableOpacity style={styles.generalBtn}>
                  <Icon name={"chevron-forward"} size={25} color="#343541" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Settings;
