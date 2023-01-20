import React, { useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import { styles } from "../GlobalCSS";
import { View } from "react-native";

const DropDownPickerComponent = ({ value, setValue }) => {
  const [items, setItems] = useState([
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
  ]);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <View>
      <DropDownPicker
        open={isOpen}
        value={value}
        items={items}
        setValue={setValue}
        setItems={setItems}
        setOpen={setIsOpen}
        style={styles.input}
      />
    </View>
  );
};

export default DropDownPickerComponent;
