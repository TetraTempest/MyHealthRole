import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";
import React from "react";
import { styles } from "../GlobalCSS";

const CreateAppointment = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView nestedScrollEnabled={true}>
        <View style={styles.hospitalsTopStyle}>
          <Text style={styles.hospitalsTopStyleText}>hospitalName</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CreateAppointment;
