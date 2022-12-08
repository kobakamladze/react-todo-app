import React from 'react';
import { FiTrash, FiEdit } from 'react-icons/fi';

const Todo = props => {
  const modifiedToDOsList = props.toDosList.map(
    ({ id, title, isCompleted, date }) => (
      <li key={id}>
        <div>
          <div
            className={isCompleted ? 'todo-row complete' : 'todo-row'}
            onClick={() => props.toggleComplete(id)}
          >
            {title}
          </div>
          <div className="date">{date}</div>
          <div className="icons">
            <FiEdit
              className="todo-edit"
              onClick={() => props.editToDo({ id, title, isCompleted })}
            />
            <FiTrash
              className="todo-delete"
              onClick={() => props.removeToDo(id)}
            />
          </div>
        </div>
      </li>
    )
  );

  return <ul>{modifiedToDOsList}</ul>;
};

export default Todo;
