import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Todo = {
  id: number;
  title: string;
  completed: boolean;
  createdAt: Date;
};

interface TodoState {
  todos: Todo[];
}

const initialState: TodoState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    setTodos(state, action: PayloadAction<Todo[]>) {
      state.todos = action.payload;
    },
    addTodoOnState(state, action: PayloadAction<Todo>) {
      state.todos.push(action.payload);
    },
    removeTodoOnState(state, action: PayloadAction<number>) {
      const id = action.payload;
      state.todos = state.todos.filter((item) => item.id !== id);
    },
    toggleTodoOnState(state, action: PayloadAction<number>) {
      const todo = state.todos.find((t) => t.id === action.payload);
      if (todo) todo.completed = !todo.completed;
    },
  },
});

export const {
  setTodos,
  addTodoOnState,
  removeTodoOnState,
  toggleTodoOnState,
} = todoSlice.actions;
export default todoSlice.reducer;
