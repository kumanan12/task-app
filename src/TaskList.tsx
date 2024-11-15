import { useState } from 'react';
import { useTasks, useTasksDispatch } from './TasksContext.js';

export default function TaskList() {
  const tasks = useTasks();
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <ul>
      {tasks.map(task => (
        <li key={task.id} className="mb-2">
        <Task task={task} />
        </li>
      ))}
      </ul>
    </div>
  );
}

function Task({ task }) {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useTasksDispatch();
  let taskContent;
  if (isEditing) {
    taskContent = (
      <>
        <input
          className="border border-gray-300 rounded px-2 py-1 w-full"
          value={task.text}
          onChange={e => {
        dispatch({
          type: 'changed',
          task: {
            ...task,
            text: e.target.value
          }
        });
          }} />
       
      </>
    );
  } else {
    taskContent = (
      <>
        {task.text}
       
      </>
    );
  }
  return (
    <label className="flex items-center justify-between p-2 border-b border-gray-200">
      <div className="flex items-center flex-1">
      <input
        type="checkbox"
        className="mx-2"
        checked={task.done}
        onChange={e => {
        dispatch({
          type: 'changed',
          task: {
          ...task,
          done: e.target.checked
          }
        });
        }}
      />
      <span className={`flex-1 ${task.done ? 'line-through text-gray-500' : ''}`}>
        {taskContent}
      </span>
      </div>
      <div className="flex items-center">
      {isEditing ? (
        <button className="bg-blue-500 text-white px-4 py-2 rounded mx-2" onClick={() => setIsEditing(false)}>
        Save
        </button>
      ) : (
        <button className="bg-blue-500 text-white px-4 py-2 rounded mx-2" onClick={() => setIsEditing(true)}>
        Edit
        </button>
      )}
      <button
        className="bg-red-500 text-white px-4 py-2 rounded"
        onClick={() => {
        dispatch({
          type: 'deleted',
          id: task.id
        });
        }}
      >
        Delete
      </button>
      </div>
    </label>
  );
}
