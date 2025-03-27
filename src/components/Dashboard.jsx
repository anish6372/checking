import React from 'react'
import { useNavigate } from 'react-router-dom';

const Dashboard = ({ user }) => {
  const navigate = useNavigate();

  if (!user) {
      return <p>Loading...</p>;
  }

  return (
      <div className="p-6 max-w-4xl mx-auto bg-white rounded-lg shadow-md mt-10">
          <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
          <p className="mb-4 text-gray-600">Welcome, {user.name}!</p>
          <button 
              onClick={() => navigate('/editor')} 
              className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition">
              Create a New Letter
          </button>
      </div>
  );
};

export default Dashboard;
