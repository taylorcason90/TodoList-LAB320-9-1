import React, { useState, useEffect } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((data) => {
        const initialTodos = data.slice(0, 5).map((todo) => ({
          id: todo.id,
          text: todo.title,
          completed: todo.completed,
        }));
        setTodos(initialTodos);
      })
      .catch((error) => {
        console.error('Error fetching todos:', error);
      });
  }, []);

  const addTodo = (text) => {
    const newTodo = {
      id: todos.length + 1,
      text,
      completed: false,
    };
    setTodos([newTodo, ...todos]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const saveTodo = (id, newText) => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, text: newText };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const toggleCompletion = (id) => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList 
        todos={todos} 
        onDelete={deleteTodo} 
        onSave={saveTodo} 
        onToggleCompletion={toggleCompletion} // Pass toggleCompletion function down to TodoList
      />
    </div>
  );
}

export default App;
