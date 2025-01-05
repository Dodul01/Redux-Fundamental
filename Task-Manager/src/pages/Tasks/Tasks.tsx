import AddTaskModal from "@/components/AddTaskModal/AddTaskModal";
import TaskCard from "@/components/TaskCard/TaskCard";
import { selectTasks } from "@/redux/features/todos/todoSlice";
import { useAppSelector } from "@/redux/hook";

const Tasks = () => {
  const tasks = useAppSelector(selectTasks);

  return (
    <div className="mt-5">
      <div className="flex items-center justify-between my-3">
        <h1 className="text-xl font-semibold mb-3">Tasks</h1>
        <AddTaskModal />
      </div>
      <div>
        {tasks.map((task) => (
          <TaskCard task={task} key={task.id} />
        ))}
      </div>
    </div>
  );
};

export default Tasks;
