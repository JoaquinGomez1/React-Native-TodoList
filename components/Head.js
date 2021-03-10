import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { useFonts, Nunito_400Regular } from "@expo-google-fonts/nunito";

function getFormatedDate() {
  const date = new Date();

  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const month = monthNames[date.getMonth()];
  const dayName = dayNames[date.getDay()];
  const dayNumber = date.getDate();
  const year = date.getFullYear();
  return { year, dayName, dayNumber, month };
}

export default function Head() {
  const [date] = useState(getFormatedDate());
  let [fontsLoaded] = useFonts({
    Nunito_400Regular,
  });

  if (!fontsLoaded) return <Text>Loading fonts</Text>;

  return (
    <View style={styles.root}>
      <View style={styles.container}>
        <View style={styles.dateInfoContainer}>
          <Text style={styles.dayNumber}>{date.dayNumber}</Text>
          <View style={styles.monthAndYear}>
            <Text style={styles.dayMonth}>{date.month}</Text>
            <Text style={styles.year}>{date.year}</Text>
          </View>
        </View>
        <Text style={styles.dayName}>{date.dayName}</Text>
      </View>
    </View>
  );
}

const colors = {
  text: "#525252",
};

const styles = StyleSheet.create({
  root: {
    display: "flex",
    alignItems: "center",
    fontFamily: "Nunito",
  },
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 300,
  },
  dateInfoContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  monthAndYear: { textTransform: "uppercase" },
  dayName: {
    textTransform: "uppercase",
    fontWeight: "bold",
    color: colors.text,
    fontFamily: "Nunito_400Regular",
  },
  dayNumber: {
    fontSize: 40,
    fontWeight: "bold",
    color: colors.text,
    marginRight: 8,
    fontFamily: "Nunito_400Regular",
  },
  dayMonth: {
    fontWeight: "bold",
    color: colors.text,
    fontFamily: "Nunito_400Regular",
  },
  dayYear: {
    fontFamily: "Nunito_400Regular",
  },
});
