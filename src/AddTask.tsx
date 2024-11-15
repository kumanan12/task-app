import { useState } from 'react';
import { useTasksDispatch } from './TasksContext.js';

export default function AddTask() {
  const [text, setText] = useState('');
  const dispatch = useTasksDispatch();
  return (
    <>
      <input
      className="border rounded p-2 mr-2"
      placeholder="Add task"
      value={text}
      onChange={e => setText(e.target.value)}
      onKeyDown={e => {
        if (e.key === 'Enter') {
        setText('');
        dispatch({
          type: 'added',
          id: nextId++,
          text: text,
        });
        }
      }}
      />
      <button
      className="bg-blue-500 text-white p-2 rounded"
      onClick={() => {
        setText('');
        dispatch({
        type: 'added',
        id: nextId++,
        text: text,
        });

      }}
      
      >
      Add
      </button>
    </>
  );
}

let nextId = 3;
