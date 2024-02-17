import React from 'react';

const Task = ({ text, category, onDelete }) => {
  const handleDelete = () => {
    onDelete();
  };

  return (
    <div className="task">
      <span>{text}</span>
      <span>{category}</span>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Task;
