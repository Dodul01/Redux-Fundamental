import { ITask } from "@/types";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Checkbox } from "../ui/checkbox";
import trashIcon from "@/assets/trash.svg";
import { cn } from "@/lib/utils";

interface IProps {
  task: ITask;
}

const TaskCard = ({ task }: IProps) => {
  const { title, description, priority } = task;

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
              <CardTitle>{title}</CardTitle>
            </div>
            <CardDescription>{description}</CardDescription>
          </div>
          <div className="flex items-center gap-3">
            <img
              className="h-6 cursor-pointer"
              src={trashIcon}
              alt="Trash Icon"
            />
            <Checkbox id="isComplete" />
          </div>
        </div>
      </CardHeader>
    </Card>
  );
};

export default TaskCard;
