import AddTask from './AddTask.js';
import TaskList from './TaskList.js';
import { TasksProvider } from './TasksContext.js';

export default function TaskApp() {
  return (
    <TasksProvider>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Day off in Kyoto</h1>
        <AddTask />
        <TaskList />
      </div>
    </TasksProvider>
  );
}