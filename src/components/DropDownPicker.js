import React, { useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import { styles } from "../GlobalCSS";
import { View } from "react-native";
import { useSelector } from "react-redux";

const DropDownPickerComponent = ({ value, setValue }) => {
  const hospitalsData = useSelector((state) => state.hospitals.hospitals);

  const hospitalName = hospitalsData?.map((item) => ({
    label: item.name,
    value: item.name,
  }));

  const [isOpen, setIsOpen] = useState(false);
  return (
    <View>
      <DropDownPicker
        open={isOpen}
        value={value}
        items={hospitalName}
        setValue={setValue}
        setOpen={setIsOpen}
        style={styles.input}
        listMode="SCROLLVIEW"
      />
    </View>
  );
};

export default DropDownPickerComponent;
