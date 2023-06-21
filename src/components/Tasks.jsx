import { Task } from "./Task";

export const Tasks = ({ tasks, onDelete, onDoubleClick }) => {
  return (
    <>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onClick={onDelete}
          onDoubleClick={onDoubleClick}
        />
      ))}
    </>
  );
};
