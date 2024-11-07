import React, { useCallback } from 'react';

const TodoItem = ({ todo, deleteTodo, toggleTodo }) => {
  const handleDelete = useCallback(() => {
    deleteTodo(todo.id);
  }, [deleteTodo, todo.id]);

  const handleToggle = useCallback(() => {
    toggleTodo(todo.id);
  }, [toggleTodo, todo.id]);

  return (
    <li>
      <span
        onClick={handleToggle}
        style={{
          textDecoration: todo.completed ? 'line-through' : 'none',
          cursor: 'pointer',
        }}
      >
        {todo.text}
      </span>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default React.memo(TodoItem);
