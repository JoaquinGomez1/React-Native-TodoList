import React from "react";

import { StyleSheet, Text, View } from "react-native";

const ActionBar = () => (
  <View>
    <Text>Action Bar</Text>
  </View>
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

export default ActionBar;
