import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./features/counter/counterSlice";
import todoSlice from "./features/todos/todoSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    todo: todoSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;