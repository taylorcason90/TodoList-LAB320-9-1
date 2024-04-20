import React, { useState } from 'react';

function TodoItem({ todo, onDelete, onSave, onToggleCompletion }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo.text);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    onSave(todo.id, editedText);
    setIsEditing(false);
  };

  const handleDelete = () => {
    onDelete(todo.id);
  };

  const handleCheckboxChange = () => {
    onToggleCompletion(todo.id); // Call onToggleCompletion function with todo id
  };

  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={handleCheckboxChange}
      />
      {!isEditing ? (
        <div>
          <span>{todo.text}</span>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      ) : (
        <div>
          <input
            type="text"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
        </div>
      )}
    </li>
  );
}

export default TodoItem;
