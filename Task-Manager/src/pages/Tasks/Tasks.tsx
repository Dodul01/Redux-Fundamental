import { Button } from "@/components/ui/button";
import { selectFilter, selectTasks } from "@/redux/features/todos/todoSlice";
import { useAppSelector } from "@/redux/hook";

const Tasks = () => {
  const tasks = useAppSelector(selectTasks);
  const filter = useAppSelector(selectFilter);

  return (
    <div>
      This is Tasks page.
      <Button>click me</Button>
    </div>
  );
};

export default Tasks;
