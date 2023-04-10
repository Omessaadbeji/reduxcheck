import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: Math.random(),
      title: "learn redux",
      description: "learn more ",
      isDone: "false",
    },
    {
      id: Math.random(),
      title: "work",
      description: "work work ",
      isDone: "false",
    },
  ],
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    AddTodo: (state, action) => {
      state.todos = [...state.todos, action.payload];
    },
    updateIsDone: (state, action) => {
      let item = state.todos.find((el) => el.id == action.payload);
      item.isDone = !item.isDone;
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((el) => el.id !== action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { AddTodo, updateIsDone, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
