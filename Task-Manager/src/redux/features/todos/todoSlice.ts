import { RootState } from "@/redux/store";
import { ITask } from "@/types";
import { createSlice, PayloadAction, nanoid } from "@reduxjs/toolkit";

interface InitialState {
  tasks: ITask[];
  filter: "all" | "Low" | "Medium" | "High";
}

const initialState: InitialState = {
  tasks: [
    {
      id: 'jalksdjflkjsdf',
      isCompleted: false,
      title: 'test delete',
      description: 'test desc',
      priority: 'High',
      dueDate: '34243234'
    }
  ],
  filter: "all",
};

type DreftTask = Pick<ITask, "title" | "description" | "dueDate" | "priority">;

const createTask = (taskData: DreftTask): ITask => {
  return { id: nanoid(), isCompleted: false, ...taskData };
};

const todoSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTasks: (state, action: PayloadAction<DreftTask>) => {
      const taskData = createTask(action.payload);
      state.tasks.push(taskData);
    },
  },
});

export const selectTasks = (state: RootState) => {
  return state.todo.tasks;
};

export const selectFilter = (state: RootState) => {
  return state.todo.filter;
};

export const { addTasks } = todoSlice.actions;
export default todoSlice.reducer;
