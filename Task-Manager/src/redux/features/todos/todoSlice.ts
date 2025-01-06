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
      id: "jalksdjflkjsdf",
      isCompleted: true,
      title: "test delete",
      description: "test desc",
      priority: "High",
      dueDate: "34243234",
    },
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
    toggleCompleteState: (state, action: PayloadAction<string>) => {
      state.tasks.forEach((task) =>
        task.id === action.payload
          ? (task.isCompleted = !task.isCompleted)
          : task
      );
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    updateFilter: (state, action: PayloadAction<"all" | "Low" | "Medium" | "High">) =>{
      state.filter = action.payload;
    }
  },
});

export const selectTasks = (state: RootState) => {
  const filter = state.todo.filter;

  if(filter === 'Low'){
    return state.todo.tasks.filter(task => task.priority === 'Low');
  }else if(filter === 'High'){
    return state.todo.tasks.filter(task => task.priority === 'High');
  }else if(filter === 'Medium'){
    return state.todo.tasks.filter(task => task.priority === 'Medium');
  }else{
    return state.todo.tasks;
  }
};

export const selectFilter = (state: RootState) => {
  return state.todo.filter;
};

export const { addTasks, toggleCompleteState , deleteTask, updateFilter} = todoSlice.actions;
export default todoSlice.reducer;
