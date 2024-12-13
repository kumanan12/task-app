import { Link } from 'react-router-dom';
import AddTask from './AddTask.js';
import TaskList from './TaskList.js';
import { TasksProvider } from './TasksContext.js';

export default function TaskApp() {
  return (
    <TasksProvider>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Tasks</h1>
        <Link to="/admin" className="text-blue-500 hover:underline mb-4 block">Go to Admin Page</Link>
        <AddTask />
        <TaskList />
      </div>
    </TasksProvider>
  );
}