import React, { useState } from 'react';

const TotalReserveFuel = () => {
  const [selectedTank, setSelectedTank] = useState('all');
  
  // Sample data - replace with actual API call
  const fuelTanks = [
    { 
      id: 'tank-1', 
      fuelType: 'Petrol 95', 
      capacity: 50000, 
      currentLevel: 32500, 
      status: 'Normal',
      lastUpdated: '2023-06-15 09:30 AM'
    },
    { 
      id: 'tank-2', 
      fuelType: 'Diesel', 
      capacity: 75000, 
      currentLevel: 62500, 
      status: 'High',
      lastUpdated: '2023-06-15 09:35 AM'
    },
    { 
      id: 'tank-3', 
      fuelType: 'CNG', 
      capacity: 30000, 
      currentLevel: 8500, 
      status: 'Low',
      lastUpdated: '2023-06-15 10:15 AM'
    },
  ];

  const getStatusColor = (status) => {
    const colors = {
      'Low': 'bg-red-100 text-red-800',
      'Normal': 'bg-green-100 text-green-800',
      'High': 'bg-blue-100 text-blue-800'
    };
    return colors[status] || 'bg-gray-100 text-gray-800';
  };

  const getFilteredTanks = () => {
    if (selectedTank === 'all') return fuelTanks;
    return fuelTanks.filter(tank => tank.id === selectedTank);
  };

  const calculatePercentage = (current, total) => {
    return Math.round((current / total) * 100);
  };

  const getProgressBarColor = (percentage) => {
    if (percentage < 20) return 'bg-red-500';
    if (percentage < 50) return 'bg-yellow-500';
    if (percentage < 80) return 'bg-green-500';
    return 'bg-blue-500';
  };

  const totalCapacity = fuelTanks.reduce((sum, tank) => sum + tank.capacity, 0);
  const totalCurrent = fuelTanks.reduce((sum, tank) => sum + tank.currentLevel, 0);
  const totalPercentage = calculatePercentage(totalCurrent, totalCapacity);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">Total Reserve Fuel</h2>
          <p className="mt-1 text-sm text-gray-500">Overview of all fuel reserves and tank status</p>
        </div>
        <div className="w-full sm:w-64">
          <select
            value={selectedTank}
            onChange={(e) => setSelectedTank(e.target.value)}
            className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-md"
          >
            <option value="all">All Tanks</option>
            {fuelTanks.map((tank) => (
              <option key={tank.id} value={tank.id}>
                {tank.fuelType} Tank
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Overall Summary Card */}
      <div className="bg-white shadow-sm rounded-lg p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Fuel Reserve Summary</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="text-sm font-medium text-blue-800">Total Capacity</div>
            <div className="mt-1 text-2xl font-semibold text-blue-900">
              {(totalCapacity / 1000).toLocaleString()} KL
            </div>
            <div className="mt-2 text-xs text-blue-600">Across all tanks</div>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <div className="text-sm font-medium text-green-800">Current Reserve</div>
            <div className="mt-1 text-2xl font-semibold text-green-900">
              {(totalCurrent / 1000).toLocaleString()} KL
            </div>
            <div className="mt-2 text-xs text-green-600">{totalPercentage}% of total capacity</div>
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg">
            <div className="text-sm font-medium text-yellow-800">Average Fill Level</div>
            <div className="mt-1 text-2xl font-semibold text-yellow-900">
              {Math.round(fuelTanks.reduce((sum, tank) => 
                sum + (tank.currentLevel / tank.capacity * 100), 0) / fuelTanks.length)}%
            </div>
            <div className="mt-2 text-xs text-yellow-600">Across all tanks</div>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg">
            <div className="text-sm font-medium text-purple-800">Tanks in Alert</div>
            <div className="mt-1 text-2xl font-semibold text-purple-900">
              {fuelTanks.filter(t => t.status !== 'Normal').length}
            </div>
            <div className="mt-2 text-xs text-purple-600">Requires attention</div>
          </div>
        </div>
      </div>

      {/* Individual Tank Status */}
      <div className="bg-white shadow-sm rounded-lg overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-900">Tank Status</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Tank ID
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Fuel Type
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Current Level
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Last Updated
                </th>
                <th scope="col" className="relative px-6 py-3">
                  <span className="sr-only">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {getFilteredTanks().map((tank) => {
                const percentage = calculatePercentage(tank.currentLevel, tank.capacity);
                return (
                  <tr key={tank.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{tank.id.toUpperCase()}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{tank.fuelType}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-32 bg-gray-200 rounded-full h-2.5 mr-3">
                          <div 
                            className={`h-2.5 rounded-full ${getProgressBarColor(percentage)}`} 
                            style={{ width: `${percentage}%` }}
                          ></div>
                        </div>
                        <span className="text-sm text-gray-900">{percentage}%</span>
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        {tank.currentLevel.toLocaleString()} / {tank.capacity.toLocaleString()} L
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(tank.status)}`}>
                        {tank.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {tank.lastUpdated}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button className="text-indigo-600 hover:text-indigo-900">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Fuel Level Chart - Placeholder */}
      <div className="bg-white shadow-sm rounded-lg p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Fuel Level Trends</h3>
        <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg border border-gray-200">
          <p className="text-gray-500">Fuel level chart will be displayed here</p>
        </div>
      </div>
    </div>
  );
};

export default TotalReserveFuel;
