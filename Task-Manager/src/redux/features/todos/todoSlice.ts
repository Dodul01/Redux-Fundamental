import { RootState } from "@/redux/store";
import { ITask } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  tasks: ITask[];
  filter: 'all' | "Low" | "Medium" | "High";
}

const initialState: InitialState = {
  tasks: [
    {
      id: "lkajdfaklsdfjlsdjkdf",
      title: "Intialize project",
      description: "Create a home page.",
      dueDate: "2025-5-25",
      isCompleted: false,
      priority: "High",
    }
  ],
  filter: 'all'
};

const todoSlice = createSlice({
  name: "task",
  initialState,
  reducers: {},
});

export const selectTasks = (state: RootState) =>{
    return state.todo.tasks;
}

export const selectFilter = (state: RootState) =>{
    return state.todo.filter;
}

export default todoSlice.reducer;