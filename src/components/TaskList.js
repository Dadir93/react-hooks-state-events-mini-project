import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, onDeleteTask }) => {
  const handleDeleteTask = (index) => {
    onDeleteTask(index);
  };

  return (
    <div>
      {tasks.map((task, index) => (
        <Task key={index} text={task.text} category={task.category} onDelete={() => handleDeleteTask(index)} />
      ))}
    </div>
  );
};

export default TaskList;
