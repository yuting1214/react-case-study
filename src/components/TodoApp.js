import React, { useReducer, useEffect } from 'react';
import { todoReducer } from '../reducers/todoReducer';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import ThemeToggle from './ThemeToggle';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { ThemeProvider } from '../context/ThemeContext';

const TodoApp = () => {
  const [storedTodos, setStoredTodos] = useLocalStorage('todos', []);
  const [todos, dispatch] = useReducer(todoReducer, storedTodos);

  useEffect(() => {
    setStoredTodos(todos);
  }, [todos, setStoredTodos]);

  const addTodo = (text) => {
    dispatch({ type: 'ADD_TODO', payload: text });
  };

  const deleteTodo = (id) => {
    dispatch({ type: 'DELETE_TODO', payload: id });
  };

  const toggleTodo = (id) => {
    dispatch({ type: 'TOGGLE_TODO', payload: id });
  };

  return (
    <ThemeProvider>
      <div className="todo-app">
        <ThemeToggle />
        <h1>Todo List</h1>
        <TodoForm addTodo={addTodo} />
        <TodoList
          todos={todos}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
        />
      </div>
    </ThemeProvider>
  );
};

export default TodoApp;
