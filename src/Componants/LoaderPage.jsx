import React from 'react';

const LoaderPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <div className="spinner-border animate-spin inline-block w-12 h-12 border-4 border-t-4 border-blue-600 rounded-full" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <p className="mt-4 text-lg text-gray-700">Loading, please wait...</p>
      </div>
    </div>
  );
};

export default LoaderPage;
