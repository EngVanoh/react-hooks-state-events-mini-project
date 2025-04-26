import React from "react";

function Task({ task, text, category, onDelete }) {
  const taskText = text || task?.text;
  const taskCategory = category || task?.category;
  const taskId = task?.id;

  const handleDelete = () => {
    onDelete(taskId);
  };

  return (
    <div className="task">
      <div className="label">{taskCategory}</div>
      <div className="text">{taskText}</div>
      <button className="delete" onClick={handleDelete}>X</button>
    </div>
  );
}

export default Task;