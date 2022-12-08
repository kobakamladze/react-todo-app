import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

const TodoList = () => {
  const [toDosList, setToDosList] = useState([
    {
      id: Math.round(Math.random() * 10000),
      isCompleted: false,
      title: 'Enjoy',
      isBeingEdited: false,
      date: `DD.MM.YYYY | HH:MM:SS`,
    },
    {
      id: Math.round(Math.random() * 10000),
      isCompleted: false,
      title: 'Bake pizza',
      isBeingEdited: false,
      date: `DD.MM.YYYY | HH:MM:SS`,
    },
    {
      id: Math.round(Math.random() * 10000),
      isCompleted: false,
      title: 'Buy ingredients for pizza',
      isBeingEdited: false,
      date: `DD.MM.YYYY | HH:MM:SS`,
    },
  ]);

  // Adds new todo to list and also checks if entered text has many spaces
  const addNewTodo = todo => {
    if (!todo.title || /^\s*$/.test(todo.title)) return;

    const newToDosList = [todo, ...toDosList];
    setToDosList(() => newToDosList);
  };

  // Toggles isComplete property of todo
  const toggleComplete = id =>
    setToDosList(prevList =>
      prevList.map(todo =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );

  // Toggles isBeingEdited property of todo
  const toggleEditToDo = ({ id, title, isBeingEdited }) =>
    setToDosList(prevList =>
      prevList.map(todo =>
        todo.id === id
          ? { ...todo, title, isBeingEdited: !isBeingEdited }
          : { ...todo, isBeingEdited: false }
      )
    );

  // Confirms changes to todo
  const confirmToDoChange = (id, title) =>
    setToDosList(prevList =>
      prevList.map(todo =>
        todo.id === id
          ? { ...todo, title, isBeingEdited: !todo.isBeingEdited }
          : todo
      )
    );

  // Deletes todo
  const removeToDo = id =>
    setToDosList(prevList => prevList.filter(todo => todo.id !== id));

  return (
    <div className="container">
      <h1>What is your plan for today?</h1>
      <TodoForm addNewTodo={addNewTodo} />
      <Todo
        toDosList={toDosList}
        removeToDo={removeToDo}
        toggleEditToDo={toggleEditToDo}
        confirmToDoChange={confirmToDoChange}
        toggleComplete={toggleComplete}
      />
    </div>
  );
};

export default TodoList;
