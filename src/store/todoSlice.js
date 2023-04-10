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
      title: "sleel",
      description: "have some rest ",
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
  },
});

// Action creators are generated for each case reducer function
export const {AddTodo} = todoSlice.actions;

export default todoSlice.reducer;
