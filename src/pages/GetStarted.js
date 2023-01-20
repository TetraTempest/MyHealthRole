import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React from "react";
import { styles } from "../GlobalCSS";
import { useNavigation } from "@react-navigation/native";

const GetStarted = ({ font }) => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image
          style={styles.LogoImage}
          source={require("../../assets/logo.png")}
        />
      </View>

      <View style={styles.spacePadding}>
        <Text style={styles.headerTitle}>My Health Role</Text>
      </View>

      <View style={styles.spacePadding}>
        <Text style={styles.text}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry typesetting industry dummy text of the printing dummy text of
          the printing. Lorem Ipsum is simply dummy text of the printing and
          typesetting industry typesetting industry dummy text of the printing
          dummy text of the printing.
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.spacePadding}>
        <Text style={styles.click}>
          By clicking Get Started, Continue with HealthRole, you agree to our
          {/* <TouchableOpacity style={styles.terms}> */}
          <Text style={styles.terms}> Terms and Conditions </Text>
          {/* </TouchableOpacity> */}
          and
          {/* <TouchableOpacity> */}
          <Text style={styles.terms}> Privacy Statement.</Text>
          {/* </TouchableOpacity> */}
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default GetStarted;
