import React, { useState } from 'react';

const NewTaskForm = ({ categories, onTaskFormSubmit }) => {
  const [taskText, setTaskText] = useState('');
  const [taskCategory, setTaskCategory] = useState(categories[0]); // Initialize with the first category

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create a new task object
    const newTask = {
      text: taskText,
      category: taskCategory,
    };
    onTaskFormSubmit(newTask);
    setTaskText('');
    setTaskCategory(categories[0]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="task">Task:</label>
      <input
        id="task"
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
      />
      <label htmlFor="category">Category:</label>
      <select
        id="category"
        value={taskCategory}
        onChange={(e) => setTaskCategory(e.target.value)}
      >
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <button type="submit">Add task</button>
    </form>
  );
};

export default NewTaskForm;
