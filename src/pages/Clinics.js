import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";
import React, { useState } from "react";
import { styles } from "../GlobalCSS";
import { useNavigation } from "@react-navigation/native";

const Clinics = ({ route }) => {
  const navigation = useNavigation();
  //   const { hospitalName } = route.params;

  const [clinics, setClinics] = useState([
    {
      name: "Clinic 1",
      id: 1,
    },
    {
      name: "Clinic 2",
      id: 2,
    },
    {
      name: "Clinic 3",
      id: 3,
    },

    {
      name: "Clinic 4",
      id: 4,
    },
  ]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView nestedScrollEnabled={true}>
        <View style={styles.hospitalsTopStyle}>
          <TouchableOpacity>
            <Text style={styles.hospitalsTopStyleText}>hospitalName</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.ClinicsContainer}>
          {clinics.map((clinic) => (
            <TouchableOpacity
              style={styles.clinicsGridContainer}
              key={clinic.id}
            >
              <View>
                <Text style={styles.clinicsFlexText}>{clinic.name}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Clinics;
