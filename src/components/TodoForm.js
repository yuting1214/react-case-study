import React, { useState, useCallback, useRef, useEffect } from 'react';

const TodoForm = ({ addTodo }) => {
  const [input, setInput] = useState('');
  const inputRef = useRef(null);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (input.trim()) {
        addTodo(input);
        setInput('');
      }
    },
    [input, addTodo]
  );

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [input]);

  return (
    <form onSubmit={handleSubmit}>
      <input
        ref={inputRef}
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new todo"
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default React.memo(TodoForm);