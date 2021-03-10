import { StatusBar } from "expo-status-bar";
import React, { useReducer } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import Button from "./components/Button";
import reducer from "./reducers/todosReducer";
import Head from "./components/Head";
import Todos from "./components/Todos";

const initialState = {
  inputField: "",
  todos: [],
  displayTodos: [],
  showChecked: false,
};

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <View style={styles.container}>
      <Head />
      <Text style={styles.logo}>Todoist</Text>
      <Todos state={state} dispatch={dispatch} />
      <TextInput
        style={{
          height: 40,
          minWidth: 280,
          borderRadius: 8,
          borderColor: "gray",
          borderWidth: 1,
          padding: 8,
          marginBottom: 20,
        }}
        onChangeText={(text) => dispatch({ type: "changeText", payload: text })}
        value={state.inputField}
      />

      <View style={styles.buttonContainer}>
        <Button
          style={{ padding: 8 }}
          title="Add"
          onPress={() => dispatch({ type: "add" })}
        />
      </View>
      <View styles={styles.buttonContainer}>
        <Button
          title={state.showChecked ? "Show all" : "Show not completed"}
          styles={styles.appButtonContainer}
          onPress={() => dispatch({ type: "showChecked" })}
        />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  logo: { fontSize: 40, marginBottom: 32 },

  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingVertical: 80,
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  count: {
    fontSize: 40,
    fontWeight: "bold",
  },
});
