import { ITask } from "@/types";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Checkbox } from "../ui/checkbox";
import trashIcon from "@/assets/trash.svg";
import { cn } from "@/lib/utils";
import { useAppDispatch } from "@/redux/hook";
import {
  deleteTask,
  toggleCompleteState,
} from "@/redux/features/todos/todoSlice";

interface IProps {
  task: ITask;
}

const TaskCard = ({ task }: IProps) => {
  const { title, description, priority } = task;
  const dispatch = useAppDispatch();

  return (
    <Card className="w-full mb-3">
      <CardHeader>
        <div className="flex justify-between">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div
                className={cn("h-4 w-4 rounded-full", {
                  "bg-green-500": priority === "Low",
                  "bg-yellow-500": priority === "Medium",
                  "bg-red-500": priority === "High",
                })}
              ></div>
              <CardTitle className={task.isCompleted ? 'line-through' : ''}>{title}</CardTitle>
            </div>
            <CardDescription className={task.isCompleted ? 'line-through' : ''}>{description}</CardDescription>
          </div>
          <div className="flex items-center gap-3">
            <img
              onClick={() => dispatch(deleteTask(task.id))}
              className="h-6 cursor-pointer"
              src={trashIcon}
              alt="Trash Icon"
            />
            <Checkbox
              checked={task.isCompleted === true}
              id="isComplete"
              onClick={() => dispatch(toggleCompleteState(task.id))}
            />
          </div>
        </div>
      </CardHeader>
    </Card>
  );
};

export default TaskCard;
