import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  ScrollView,
} from "react-native";
import { styles } from "../GlobalCSS";
import { useNavigation } from "@react-navigation/native";
import DropDownPickerComponent from "../components/DropDownPicker";

const Login = () => {
  const navigation = useNavigation();

  const [name, setName] = useState("");
  const [nationalNumber, setNationalNumber] = useState("");
  const [value, setValue] = useState(null);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView nestedScrollEnabled={true}>
        <View>
          <Image
            style={styles.LogoImage}
            source={require("../../assets/logo.png")}
          />
        </View>

        <View style={styles.spacePadding}>
          <Text style={styles.headerTitle}>Create Account</Text>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.textLabel}>Full Name:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your name"
            onTextChange={(text) => setName(text)}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.textLabel}>National number:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your national number"
            onTextChange={(text) => setNationalNumber(text)}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.textLabel}>Choose Hospital </Text>
          <DropDownPickerComponent value={value} setValue={setValue} />
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Continue</Text>
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
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
