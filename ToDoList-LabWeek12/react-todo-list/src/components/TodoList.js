import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, onDelete, onSave, onToggleCompletion }) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={onDelete}
          onSave={onSave}
          onToggleCompletion={onToggleCompletion} // Pass onToggleCompletion function down to TodoItem
        />
      ))}
    </ul>
  );
}

export default TodoList;
