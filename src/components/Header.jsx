import React from 'react';

const Header = ({ query, setQuery }) => {
  return (
    <div className="px-8 py-6 text-white bg-zinc-900 sm:px-12">
      <div className="flex items-center justify-between max-w-xl gap-6 mx-auto">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input
          type="text"
          placeholder="Type here"
          className="flex-1 w-full text-gray-900 input input-bordered input-accent"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Header;
