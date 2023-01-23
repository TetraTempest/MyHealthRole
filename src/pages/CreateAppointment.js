import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Image,
  Animated,
} from "react-native";
import React, { useState, useRef, useEffect } from "react";
import { styles } from "../GlobalCSS";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import CloseModal from "../components/CloseModal";

const CreateAppointment = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const [appointoments, setAppointoments] = useState([
    {
      name: "1",
      id: 1,
      status: "Processing",
    },
    {
      name: "2",
      id: 2,
      status: "Pending",
    },
    {
      name: "3",
      id: 3,
      status: "Pending",
    },
  ]);

  const [isApproved, setIsApproved] = useState(true);

  const FadeInView = (props) => {
    const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

    useEffect(() => {
      const intervalId = setInterval(() => {
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 2000,
          useNativeDriver: true,
        }).start(() => {
          fadeAnim.setValue(0);
        });
      }, 2000);
      return () => clearInterval(intervalId);
    }, []);

    return (
      <Animated.View // Special animatable View
        style={{
          ...props.style,
          opacity: fadeAnim, // Bind opacity to animated value
        }}
      >
        {props.children}
      </Animated.View>
    );
  };
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
            <View style={styles.appointmentGridBox} key={appointoment.id}>
              {isApproved && appointoment.id == 1 ? (
                <View>
                  <Text style={styles.appointmentStatus}>
                    {appointoment.status}
                  </Text>
                  <FadeInView>
                    <View>
                      <Text style={styles.appointmentFlexText}>
                        {appointoment.name}
                      </Text>
                    </View>
                  </FadeInView>
                </View>
              ) : (
                <View>
                  <Text style={styles.appointmentStatus}>
                    {appointoment.status}
                  </Text>
                  <Text style={styles.appointmentFlexText}>
                    {appointoment.name}
                  </Text>
                </View>
              )}
            </View>
          ))}
        </View>

        <View style={styles.cancelContainer}>
          <TouchableOpacity
            style={styles.cancelButton}
            onPress={() => setModalVisible(!modalVisible)}
          >
            <Text style={styles.cancelText}>Cancel</Text>
          </TouchableOpacity>
        </View>

        <CloseModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default CreateAppointment;
