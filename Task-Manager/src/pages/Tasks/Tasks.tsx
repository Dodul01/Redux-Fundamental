import AddTaskModal from "@/components/AddTaskModal/AddTaskModal";
import TaskCard from "@/components/TaskCard/TaskCard";
import { selectTasks, updateFilter } from "@/redux/features/todos/todoSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Tasks = () => {
  const tasks = useAppSelector(selectTasks);
  const dispatch = useAppDispatch();


  return (
    <div className="mt-5">
      <div className="flex items-center justify-between my-3">
        <h1 className="text-xl font-semibold mb-3">Tasks</h1>

        <div className="flex items-center gap-5">
          <Tabs defaultValue="all">
            <TabsList>
              <TabsTrigger onClick={()=> dispatch(updateFilter('all'))} value="all">All</TabsTrigger>
              <TabsTrigger onClick={()=> dispatch(updateFilter('High'))} value="High">High</TabsTrigger>
              <TabsTrigger onClick={()=> dispatch(updateFilter('Medium'))} value="Medium">Medium</TabsTrigger>
              <TabsTrigger onClick={()=> dispatch(updateFilter('Low'))} value="Low">Low</TabsTrigger>
            </TabsList>
          </Tabs>

          <AddTaskModal />
        </div>
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
