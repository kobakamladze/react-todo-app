import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

const TodoList = () => {
  const [toDosList, setToDosList] = useState([]);

  const addNewTodo = todo => {
    if (!todo.title || /^\s*$/.test(todo.title)) return;

    const newToDosList = [todo, ...toDosList];
    setToDosList(() => newToDosList);
  };

  const toggleComplete = id => {
    const filteredToDosList = toDosList.map(todo =>
      todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
    );

    setToDosList(() => filteredToDosList);
  };

  const editToDo = ({ id, title, isCompleted }) => {
    const modifiedToDosList = toDosList.map(todo =>
      todo.id === id ? { ...todo, title, isCompleted } : todo
    );

    setToDosList(() => modifiedToDosList);
  };

  const removeToDo = id => {
    const filteredToDosList = toDosList.filter(todo => todo.id !== id);

    setToDosList(() => filteredToDosList);
  };

  return (
    <div>
      <h1>What is a planfor today?</h1>
      <TodoForm addNewTodo={addNewTodo} />
      <Todo
        toDosList={toDosList}
        removeToDo={removeToDo}
        editToDo={editToDo}
        toggleComplete={toggleComplete}
      />
    </div>
  );
};

export default TodoList;
