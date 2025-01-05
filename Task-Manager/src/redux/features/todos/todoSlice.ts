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
      id: "lkajdfaklsdfjlsdf",
      title: "Intialize project",
      description: "Create a home page.",
      dueDate: "2025-5-25",
      isCompleted: false,
      priority: "High",
    },
    {
      id: "lkajdfaklsdfjlsdjkdadf",
      title: "Intialize Github Repo",
      description: "Init project to github for other team members to contribute on project",
      dueDate: "2025-5-25",
      isCompleted: false,
      priority: "Medium",
    },
    {
      id: "lkajdfaklsdfjlsdadjkdf",
      title: "Manage project",
      description: "Manage the project and review code.",
      dueDate: "2025-5-25",
      isCompleted: false,
      priority: "Low",
    },
    {
      id: "lkajdfaklsdfjlsdjdfkdf",
      title: "Update to manager",
      description: "Update to manager what your team have done today.",
      dueDate: "2025-5-25",
      isCompleted: false,
      priority: "High",
    },
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