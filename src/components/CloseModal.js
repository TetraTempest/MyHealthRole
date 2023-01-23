import { View, Text, Modal, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { styles } from "../GlobalCSS";

const CloseModal = ({ setModalVisible, modalVisible }) => {
  const handelConfirm = () => {
    setModalVisible(!modalVisible);
  };
  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.ModalStyle}>
          <View style={styles.ModalViewStyle}>
            <TouchableOpacity
              style={styles.ModalCloseButtonStyle}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.ModalCloseButtonTextStyle}>X</Text>
            </TouchableOpacity>

            <View style={styles.ModalImageStyle}>
              <View style={styles.ModalImageTextStyle}>
                <Text style={styles.ModalImageText}>
                  Are You sure you want to{" "}
                  <Text style={{ color: "red" }}>Cancel</Text> the Appointment?
                </Text>
              </View>

              <TouchableOpacity
                style={styles.confirmCancelBtn}
                onPress={handelConfirm}
              >
                <Text style={styles.confirmCancel}>Yes</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default CloseModal;
