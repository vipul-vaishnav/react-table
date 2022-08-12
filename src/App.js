import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Employee from './pages/Employee';

const App = () => {
  return (
    <div className="min-h-screen overflow-x-hidden text-base font-normal text-gray-900 bg-white font-default">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/employee/:name" element={<Employee />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
