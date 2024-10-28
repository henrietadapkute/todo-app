import { create } from 'zustand';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

interface TodoStore {
  todos: Todo[];
  addTodo: (title: string) => void;
  toggleTodo: (id: number) => void;
  // Add more actions as needed
}

export const useTodoStore = create<TodoStore>((set) => ({
  todos: [],
  addTodo: (title) => set((state) => ({ todos: [...state.todos, { id: Date.now(), title, completed: false }] })),
  toggleTodo: (id) => set((state) => ({
    todos: state.todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    )
  })),
  // Implement more actions
}));