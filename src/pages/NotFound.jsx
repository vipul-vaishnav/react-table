import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen text-center bg-gray-900">
      <h1 className="px-6 py-12 text-5xl font-extrabold text-center text-teal-600 sm:text-9xl">404.</h1>
      <button onClick={() => navigate('/')} className="max-w-xs btn btn-accent btn-outline btn-block">
        Back to home
      </button>
    </div>
  );
};

export default NotFound;
