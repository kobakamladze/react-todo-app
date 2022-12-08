import React, { useState } from 'react';

const TodoForm = props => {
  const [input, setInput] = useState('');

  const handleChange = e => {
    const value = e.target.value;
    return setInput(() => value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    const date = new Date();

    props.addNewTodo({
      id: Math.round(Math.random() * 10000),
      isCompleted: false,
      title: input,
      date: `${date.toLocaleDateString()} | ${date.toLocaleTimeString()}`,
    });

    setInput('');
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        name="text"
        placeholder="Add your todo"
        value={input}
        onChange={handleChange}
      />
      <button className="todo-button" type="submit">
        Add todo
      </button>
    </form>
  );
};

export default TodoForm;
