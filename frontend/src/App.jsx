// src/App.jsx
import React from 'react';
import './index.css'; // Ensure your main CSS file (where Tailwind directives are) is imported

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="p-10 bg-white rounded-xl shadow-lg">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-4">
          Tailwind CSS Test
        </h1>
        <p className="text-lg text-blue-700 text-center">
          If this text is blue, bold, and centered, Tailwind is working!
        </p>
        <button className="mt-6 w-full bg-red-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition duration-300">
          Working Button
        </button>
      </div>
    </div>
  );
}

export default App;
