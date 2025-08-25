import React from 'react';

const FuelStatusPage = () => {
  // Sample data - replace with actual API call
  const fuelStatus = [
    { id: 1, type: 'Petrol', currentLevel: 4500, capacity: 10000, status: 'Good' },
    { id: 2, type: 'Diesel', currentLevel: 3200, capacity: 10000, status: 'Good' },
    { id: 3, type: 'CNG', currentLevel: 1800, capacity: 5000, status: 'Low' },
  ];

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'good':
        return 'bg-green-500';
      case 'low':
        return 'bg-yellow-500';
      case 'critical':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className="p-4 md:p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Fuel Status</h1>
        <div className="flex gap-2">
          <button className="btn btn-primary btn-sm">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Add Fuel
          </button>
          <button className="btn btn-outline btn-sm">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Export
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Fuel Type</th>
                <th>Current Level (Liters)</th>
                <th>Capacity (Liters)</th>
                <th>Percentage</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {fuelStatus.map((fuel) => {
                const percentage = Math.round((fuel.currentLevel / fuel.capacity) * 100);
                
                return (
                  <tr key={fuel.id}>
                    <td className="font-medium">{fuel.type}</td>
                    <td>{fuel.currentLevel.toLocaleString()}</td>
                    <td>{fuel.capacity.toLocaleString()}</td>
                    <td>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div 
                          className={`h-2.5 rounded-full ${getStatusColor(fuel.status)}`}
                          style={{ width: `${percentage}%` }}
                        ></div>
                      </div>
                      <span className="text-sm text-gray-500">{percentage}%</span>
                    </td>
                    <td>
                      <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(fuel.status)} text-white`}>
                        {fuel.status}
                      </span>
                    </td>
                    <td>
                      <div className="flex gap-2">
                        <button className="btn btn-ghost btn-xs">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                        </button>
                        <button className="btn btn-ghost btn-xs">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="text-sm font-medium text-gray-500">Total Fuel Capacity</h3>
            <p className="text-2xl font-bold">25,000 L</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="text-sm font-medium text-gray-500">Fuel Available</h3>
            <p className="text-2xl font-bold">9,500 L</p>
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg">
            <h3 className="text-sm font-medium text-gray-500">Daily Consumption (Avg)</h3>
            <p className="text-2xl font-bold">1,200 L</p>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg">
            <h3 className="text-sm font-medium text-gray-500">Days of Supply Left</h3>
            <p className="text-2xl font-bold">7.9 days</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FuelStatusPage;
