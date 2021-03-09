import { StatusBar } from "expo-status-bar";
import React, { useReducer } from "react";
import { StyleSheet, Text, View, TextInput, ScrollView } from "react-native";
import Button from "./components/Button";
import reducer from "./reducers/todosReducer";

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
      <Text style={styles.logo}>Todoist</Text>
      <TextInput
        style={{
          height: 40,
          minWidth: 180,
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
      <ScrollView style={styles.todoContainer}>
        {state.displayTodos.map((todo, index) => (
          <Text
            style={
              todo.checked
                ? { ...styles.todo, color: "#0f0" }
                : { ...styles.todo, color: "#000" }
            }
            key={todo.text}
            onLongPress={() => dispatch({ type: "deleteTodo", payload: index })}
            onPress={() => dispatch({ type: "checked", payload: index })}
          >
            {todo.text}
          </Text>
        ))}
      </ScrollView>
      <View styles={styles.buttonContainer}>
        <Button
          title={state.showChecked ? "Show all" : "Show checked"}
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
    justifyContent: "center",
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
  todoContainer: {
    display: "flex",
    padding: 8,
    textAlign: "left",
    maxHeight: 160,
    marginVertical: 20,
  },
  todo: {
    paddingHorizontal: 3,
    fontSize: 25,
    marginVertical: 10,
    backgroundColor: "#fafaf6",
    borderRadius: 8,
  },
});
