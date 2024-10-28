import { TodoList } from '../components/TodoList';
import { useTodoStore } from '../store/todoStore';

export default function Home() {
  const { addTodo } = useTodoStore();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const title = (e.target as HTMLFormElement).todoTitle.value;
    addTodo(title);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="container mx-auto mt-10 p-4">
      <h1 className="text-3xl font-bold mb-4">Todo App</h1>
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          name="todoTitle"
          placeholder="Enter a new todo"
          className="border p-2 mr-2"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Add Todo
        </button>
      </form>
      <TodoList />
    </div>
  );
}