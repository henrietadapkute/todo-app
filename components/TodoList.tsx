import React from 'react';
import { useTodoStore } from '../store/todoStore';

export const TodoList: React.FC = () => {
  const { todos, toggleTodo } = useTodoStore();

  return (
    <ul className="space-y-2">
      {todos.map((todo) => (
        <li key={todo.id} className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleTodo(todo.id)}
            className="form-checkbox h-5 w-5 text-blue-600"
          />
          <span className={todo.completed ? 'line-through' : ''}>{todo.title}</span>
        </li>
      ))}
    </ul>
  );
};``