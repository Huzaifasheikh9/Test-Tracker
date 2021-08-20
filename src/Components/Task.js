import React from "react";
import { FaTimes, FaUpload, FaEdit } from "react-icons/fa";

const Task = ({ task, onDelete, onToogle, onUpdate, onEdit }) => {
  return (
    <div
      className={`task ${task.reminder ? "reminder" : ""}`}
      onDoubleClick={() => onToogle(task.id)}
    >
      <h3>
        {task.name}
        <div className="funcButtons">
          <FaTimes style={{ color: "red" }} onClick={() => onDelete(task.id)} />{" "}
          &nbsp; &nbsp;
          <FaUpload
            style={{ color: "lightblue" }}
            onClick={() => onUpdate(task)}
          />
          &nbsp; &nbsp;
          <FaEdit
            style={{ color: "DodgerBlue" }}
            // onClick={() => console.log('Button Invoked')}
            onClick={() => onEdit(task)}
          />
        </div>
      </h3>
      <p>{task.date}</p>
    </div>
  );
};

export default Task;
