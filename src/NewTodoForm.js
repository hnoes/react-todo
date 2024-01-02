import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'; // Make sure to install uuid

function NewTodoForm({ addTodo }) {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo({ id: uuidv4(), task });
    setTask('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={task}
        onChange={e => setTask(e.target.value)}
        placeholder="Enter a task"
      />
      <button type="submit">Add Todo</button>
    </form>
  );
}

export default NewTodoForm;
