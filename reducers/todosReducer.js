import { Keyboard } from "react-native";

const reducer = function (state, action) {
  switch (action.type) {
    case "add": {
      if (!state.inputField) return state;
      Keyboard.dismiss();
      const todoArr = [
        ...state.todos,
        { id: Math.random(), text: state.inputField, checked: false },
      ];
      return {
        ...state,
        todos: todoArr,
        displayTodos: todoArr,
        inputField: "",
      };
    }
    case "changeText": {
      return { ...state, inputField: `${action.payload}` };
    }
    case "checked": {
      state.todos[action.payload].checked = !state.todos[action.payload]
        .checked;

      return {
        ...state,
      };
    }

    case "showChecked": {
      state.showChecked = !state.showChecked;
      if (state.showChecked) {
        return {
          ...state,
          displayTodos: [...state.displayTodos].filter((todo) => todo.checked),
        };
      }
      return { ...state, displayTodos: state.todos };
    }

    case "deleteTodo": {
      state.todos.splice(action.payload, 1);
      state.displayTodos.splice(action.payload, 1);

      return { ...state };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
