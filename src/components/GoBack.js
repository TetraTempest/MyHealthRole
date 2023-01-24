import { View, Text, TouchableOpacity, SafeAreaView } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { styles } from "../GlobalCSS";

const GoBack = ({ navigation, text }) => {
  return (
    <SafeAreaView style={styles.secondaryColor}>
      <View
        style={{
          ...styles.ButtonGoBackContainer,
          flexDirection: "row",
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View style={styles.IconContainer}>
            <Text>
              <Text styles={styles.Icon}>
                <Icon name={"angle-left"} size={20} color="#000" />
              </Text>
            </Text>
          </View>
        </TouchableOpacity>
        <View style={styles.iconView}>
          <Text style={styles.hospitalsAppTopStyleText}>{text}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default GoBack;
