import React from "react";

import { StyleSheet, TouchableOpacity, Text } from "react-native";

const Button = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  appButtonContainer: {
    paddingHorizontal: 30,
    paddingVertical: 10,
    backgroundColor: "#42f59e",
    borderRadius: 8,
    elevation: 8,
  },
  appButtonText: { fontSize: 15 },
});

export default Button;
