import React, { useReducer } from 'react';
import AddTask from './AddTask';
import TaskList from './TaskList';

const initialTasks = [
  { id: 0, text: 'Philosopher’s Path', done: true },
  { id: 1, text: 'Visit the temple', done: false },
  { id: 2, text: 'Drink matcha', done: false }
];

let nextId = 3;

export default function TaskApp() {
  const [tasks, dispatch] = useReducer(
    tasksReducer,
    initialTasks
  );

  function handleAddTask(text) {
    dispatch({
      type: 'added',
      id: nextId++,
      text: text,
    });
  }

  function handleChangeTask(task) {
    dispatch({
      type: 'changed',
      task: task
    });
  }

  function handleDeleteTask(taskId) {
    dispatch({
      type: 'deleted',
      id: taskId
    });
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-4 bg-gray-100 rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Day off in Kyoto</h1>
      <AddTask onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </div>
  );
}

function tasksReducer(tasks, action) {
  switch (action.type) {
    case 'added': {
      return [...tasks, {
        id: action.id,
        text: action.text,
        done: false
      }];
    }
    case 'changed': {
      return tasks.map(task =>
        task.id === action.task.id ? action.task : task
      );
    }
    case 'deleted': {
      return tasks.filter(task => task.id !== action.id);
    }
    default: {
      throw new Error('Unknown action: ' + action.type);
    }
  }
}