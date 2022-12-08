import React, { useEffect, useRef, useState } from 'react';
import { FiTrash, FiEdit } from 'react-icons/fi';

const Todo = props => {
  const [newToDoTitle, setNewToDoTitle] = useState();

  const itemRef = useRef();

  const handleNewTitleUpdate = (id, title) => {
    const value = itemRef.current?.value || title;
    setNewToDoTitle(value);
    props.confirmToDoChange(id, value);
  };

  useEffect(() => {
    return handleNewTitleUpdate(itemRef.current?.value);
    // eslint-disable-next-line
  }, [itemRef.current?.value]);

  const modifiedToDosList = props.toDosList.map(
    ({ id, title, isCompleted, date, isBeingEdited }) => (
      <li key={id}>
        <div className="todo-item grid-container">
          {isBeingEdited ? (
            <form
              className="todo-form-edit"
              onSubmit={() => handleNewTitleUpdate(id, newToDoTitle)}
            >
              <input
                className="todo-input todo-input-edit"
                name="text"
                ref={itemRef}
                onChange={setNewToDoTitle}
                defaultValue={title}
                placeholder="Add your todo"
              />
              <button className="todo-button" type="submit">
                Confirm changes
              </button>
            </form>
          ) : (
            <div
              className={
                isCompleted
                  ? 'todo-row grid-item complete'
                  : 'todo-row grid-item'
              }
              onClick={() => props.toggleComplete(id)}
            >
              {title}
            </div>
          )}
          <div className="date grid-item">{date}</div>
          <div className="icons grid-item">
            <FiEdit
              className="todo-edit todo-icon"
              onClick={() =>
                props.toggleEditToDo({
                  id,
                  title,
                  isCompleted,
                  isBeingEdited,
                })
              }
            />
            <FiTrash
              className="todo-delete todo-icon"
              onClick={() => props.removeToDo(id)}
            />
          </div>
        </div>
      </li>
    )
  );

  return <ul>{modifiedToDosList}</ul>;
};

export default Todo;
