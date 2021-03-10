import React from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function Todos({ state, dispatch }) {
  return (
    <ScrollView style={styles.todoContainer}>
      {state.displayTodos.map((todo, index) => (
        <TouchableOpacity
          style={styles.todoItem}
          key={todo.text}
          onLongPress={() => dispatch({ type: "deleteTodo", payload: index })}
          onPress={() => dispatch({ type: "checked", payload: index })}
        >
          <Text
            style={
              todo.checked
                ? { ...styles.todoText, color: "#d8d8e6" }
                : { ...styles.todoText, color: "#000" }
            }
          >
            {todo.text}
          </Text>
          <Icon
            name={todo.checked ? "check-circle" : "circle"}
            size={20}
            color="#d8d8e6"
            style={
              todo.checked
                ? { ...styles.todoText, color: "#42f59e" }
                : { ...styles.todoText, color: "#000" }
            }
          />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  todoContainer: {
    display: "flex",
    padding: 8,
    textAlign: "left",
    maxHeight: 360,
    marginVertical: 20,
    width: 250,
  },
  todoItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  todoText: {
    paddingHorizontal: 3,
    fontSize: 25,
    marginVertical: 5,
    borderRadius: 8,
  },
});
