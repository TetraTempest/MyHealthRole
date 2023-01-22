import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  // Blue
  primaryColor: {
    backgroundColor: "#4B91F1",
  },

  // White
  secondaryColor: {
    backgroundColor: "#FFFFFF",
  },

  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },

  LogoImage: {
    width: 200,
    height: 230,
    alignSelf: "center",
    marginTop: "30%",
  },

  headerTitle: {
    fontSize: 27,
    fontWeight: "bold",
    color: "#4B91F1",
    textAlign: "center",
  },

  spacePadding: {
    padding: 20,
  },

  text: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000000",
    letterSpacing: 1,
    lineHeight: 20,
  },

  buttonContainer: {
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },

  button: {
    backgroundColor: "#ffffff",
    width: 250,
    height: 60,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#ffffff",
    backgroundColor: "#4B91F1",
  },

  buttonText: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "bold",
  },

  terms: {
    color: "#4B91F1",
  },

  input: {
    borderRadius: 10,
    borderColor: "#4B91F1",
    borderWidth: 1,
    width: "100%",
    height: 45,
    paddingLeft: 20,
  },

  textLabel: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#4B91F1",
    paddingBottom: 3,
  },

  inputContainer: {
    padding: 20,
  },

  hospitalsTopStyle: {
    borderRadius: 5,
    borderColor: "#4B91F1",
    borderWidth: 1,
    marginTop: 50,
    width: "80%",
    height: 45,
    alignSelf: "center",
    backgroundColor: "#ffffff",
    justifyContent: "center",
  },

  hospitalsTopStyleText: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    color: "#4B91F1",
  },

  hospitalsAppointmentStyle: {
    marginTop: 40,
    marginBottom: 20,
    width: "100%",
    alignSelf: "center",
  },

  hospitalsAppTopStyleText: {
    fontSize: 27,
    fontWeight: "bold",
    textAlign: "center",
    color: "#4B91F1",
  },

  ClinicsContainer: {
    flex: 1,
    backgroundColor: "#ffffff",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },

  clinicsGridContainer: {
    width: "38%",
    height: 130,
    margin: 10,
    borderRadius: 5,
    backgroundColor: "#4B91F1",
    borderWidth: 1,
    borderColor: "#4B91F1",
    justifyContent: "center",
  },

  clinicsFlexText: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    color: "#ffffff",
  },

  viewIconStyle: {
    height: 100,
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  tabNavigationStyle: {
    bottom: 0,
    left: 0,
    height: 60,
    right: 0,
    elevation: 0,
    paddingTop: 10,
  },

  mapContainer: {
    height: 300,
    width: 410,
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: 10,
  },

  map: {
    ...StyleSheet.absoluteFillObject,
  },

  mapImage: {
    height: 35,
    width: 22,
  },

  appointmentContainer: {
    flex: 1,
    backgroundColor: "#ffffff",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 50,
  },

  appointmentGridBox: {
    width: "30%",
    height: 100,
    margin: 10,
    borderRadius: 5,
    backgroundColor: "#4B91F1",
    justifyContent: "center",
  },

  appointmentFlexText: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    color: "#ffffff",
  },

  cancelContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },

  cancelButton: {
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "red",
    alignItems: "center",
    padding: 15,
    width: 300,
    borderRadius: 5,
  },

  cancelText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "red",
  },
});
