import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Image,
} from "react-native";
import React, { useState } from "react";
import { styles } from "../GlobalCSS";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import { useNavigation } from "@react-navigation/native";


const CreateAppointment = () => {
  const navigation = useNavigation();
  const [appointoments, setAppointoments] = useState([
    {
      name: "1",
      id: 1,
    },
    {
      name: "2",
      id: 2,
    },
    {
      name: "3",
      id: 3,
    },
  ]);

  const handleConfirmationModal = () => {
    // navigation.navigate("Modal");
  }

  const [isApproved, setIsApproved] = useState(true);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView nestedScrollEnabled={true}>
        <View style={styles.hospitalsAppointmentStyle}>
          <Text style={styles.hospitalsAppTopStyleText}>My Health Role</Text>
        </View>
        <View style={styles.mapContainer}>
          <MapView
            provider={PROVIDER_GOOGLE} // remove if not using Google Maps
            style={styles.map}
            enableZoomControl={false}
            showsUserLocation={true}
            showsMyLocationButton={true}
            zoomEnabled={false}
            pitchEnabled={false}
            rotateEnabled={false}
            scrollEnabled={false}
            region={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121,
            }}
          >
            <Marker coordinate={{ latitude: 37.78825, longitude: -122.4324 }}>
              <Image
                source={require("../../assets/marker.png")}
                style={styles.mapImage}
              />
            </Marker>
          </MapView>
        </View>
        <View style={styles.appointmentContainer}>
          {appointoments.map((appointoment) => (
            <View
              style={{
                ...styles.appointmentGridBox,
                backgroundColor:
                  isApproved && appointoment.id == 1 ? "green" : "#4B91F1",
              }}
              key={appointoment.id}
            >
              <View>
                <Text style={styles.appointmentFlexText}>
                  {appointoment.name}
                </Text>
              </View>
            </View>
          ))}
        </View>

        <View style={styles.cancelContainer}>
          <TouchableOpacity 
           style={styles.cancelButton}
           onPress={handleConfirmationModal}
          >
            <Text style={styles.cancelText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CreateAppointment;
