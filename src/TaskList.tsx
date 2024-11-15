import { useState } from 'react';

export default function TaskList({
  tasks,
  onChangeTask,
  onDeleteTask
}) {
  return (
    <ul className="space-y-2">
      {tasks.map(task => (
        <li key={task.id} className="bg-white shadow rounded p-2">
          <Task
            task={task}
            onChange={onChangeTask}
            onDelete={onDeleteTask}
          />
        </li>
      ))}
    </ul>
  );
}

function Task({ task, onChange, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  let taskContent;
  if (isEditing) {
    taskContent = (
      <div className="flex items-center space-x-2">
        <input
          className="border border-gray-300 rounded px-2 py-1"
          value={task.text}
          onChange={e => {
            onChange({
              ...task,
              text: e.target.value
            });
          }} />
        <button
          className="bg-green-500 text-white px-4 py-1 rounded hover:bg-green-600"
          onClick={() => setIsEditing(false)}
        >
          Save
        </button>
      </div>
    );
  } else {
    taskContent = (
      <div className="flex items-center space-x-2">
        <span>{task.text}</span>
        <button
          className="bg-yellow-500 text-white px-4 py-1 rounded hover:bg-yellow-600"
          onClick={() => setIsEditing(true)}
        >
          Edit
        </button>
      </div>
    );
  }
  return (
    <div className="flex items-center space-x-2">
      <input
        type="checkbox"
        checked={task.done}
        onChange={e => {
          onChange({
            ...task,
            done: e.target.checked
          });
        }}
        className="form-checkbox h-5 w-5 text-blue-600"
      />
      {taskContent}
      <button
        className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
        onClick={() => onDelete(task.id)}
      >
        Delete
      </button>
    </div>
  );
}