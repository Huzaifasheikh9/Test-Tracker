import React from "react";
import Task from "./Task";

const Tasks = ({ tasks, onDelete, onToogle, onUpdate, onEdit }) => {
  return (
    <div>
      {tasks.map((task) => (
        <Task key={task.id} task={task} onDelete={onDelete} onToogle={onToogle} onUpdate={onUpdate} onEdit={onEdit} />
      ))}
    </div>
  );
};

export default Tasks;
