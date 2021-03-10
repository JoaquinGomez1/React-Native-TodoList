import React from "react";

import { StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const Button = ({ onPress, name, size = 40 }) => (
  <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
    <Icon name={name} size={size} />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  appButtonContainer: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: "#42f59e",
    borderRadius: 8,
    elevation: 8,
  },
  appButtonText: { fontSize: 15 },
});

export default Button;
