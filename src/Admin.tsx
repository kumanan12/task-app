import React from 'react';
import { Link } from 'react-router-dom';


export default function Admin() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Admin Page</h1>

    <Link to="/" className="text-blue-500 hover:underline">
        Go to Home
    </Link>
      <p>Welcome to the admin page!</p>
    </div>
  );
}