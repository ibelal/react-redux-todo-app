import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

type TodoId = string;

type Todo = {
  id: TodoId;
  title: string;
  created: string;
  completed: boolean;
};

type TodosState = {
  list: Todo[];
};

const initialState: TodosState = {
  list: [],
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo(state: TodosState, action: PayloadAction<Todo>) {
      state.list.push(action.payload);
    },
    toggleTodo(state, action: PayloadAction<TodoId>) {
      const index = state.list.findIndex(({ id }) => id === action.payload);

      if (index > -1) {
        state.list[index].completed = !state.list[index].completed;
      }
    },
    deleteTodo(state, action: PayloadAction<TodoId>) {
      if (action.payload) {
        state.list = state.list.filter((x) => x.id !== action.payload);
      }
    },
  },
});

export const { addTodo, toggleTodo, deleteTodo } = todosSlice.actions;
export const selectTodos = (state: RootState) => state.todos.list;
export default todosSlice.reducer;
