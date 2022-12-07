import React, { useState } from 'react';
import TodoForm from './TodoForm';

const TodoList = () => {
  const [toDosList, setToDosList] = useState([]);

  const addNewTodo = todo => {
    if (!todo.title || /^\s*$/.test(todo.title)) return;

    const newToDosList = [todo, ...toDosList];
    setToDosList(() => newToDosList);
  };

  console.log(toDosList);

  return (
    <div>
      <h1>What is a planfor today?</h1>
      <TodoForm onNewToDoAdd={addNewTodo} />
    </div>
  );
};

export default TodoList;
