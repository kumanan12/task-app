import { useState } from 'react';

export default function AddTask({ onAddTask }) {
  const [text, setText] = useState('');
  return (
    <div className="flex items-center space-x-2">
      <input
        className="border border-gray-300 rounded px-2 py-1"
        placeholder="Add task"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button
        className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600"
        onClick={() => {
          setText('');
          onAddTask(text);
        }}
      >
        Add
      </button>
    </div>
  );
}