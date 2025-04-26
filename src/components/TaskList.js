import React from "react";
import Task from "./Task";

function TaskList({ tasks, onDeleteTask }) {
  return (
    <div className="tasks">
      {tasks.map(task => (
        <Task 
          key={task.id}
          task={task}  // Passing the whole task object
          onDelete={onDeleteTask}
        />
      ))}
    </div>
  );
}

export default TaskList;