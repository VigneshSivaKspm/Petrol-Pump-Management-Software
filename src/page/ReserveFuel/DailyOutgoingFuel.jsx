import React, { useState } from 'react';

const DailyOutgoingFuel = () => {
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  
  // Sample data - replace with actual API call
  const outgoingFuelData = [
    { id: 1, fuelType: 'Petrol', quantity: 2500, vehicle: 'Truck 101', driver: 'John Doe', time: '10:15 AM', status: 'Completed' },
    { id: 2, fuelType: 'Diesel', quantity: 1800, vehicle: 'Truck 205', driver: 'Jane Smith', time: '01:30 PM', status: 'In Progress' },
    { id: 3, fuelType: 'CNG', quantity: 1200, vehicle: 'Truck 312', driver: 'Bob Johnson', time: '03:45 PM', status: 'Scheduled' },
  ];

  const getStatusBadge = (status) => {
    const statusClasses = {
      'Completed': 'bg-green-100 text-green-800',
      'In Progress': 'bg-blue-100 text-blue-800',
      'Scheduled': 'bg-yellow-100 text-yellow-800',
      'Cancelled': 'bg-red-100 text-red-800'
    };
    
    return (
      <span className={`px-2 py-1 text-xs font-medium rounded-full ${statusClasses[status] || 'bg-gray-100 text-gray-800'}`}>
        {status}
      </span>
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">Daily Outgoing Fuel</h2>
          <p className="mt-1 text-sm text-gray-500">Track and manage outgoing fuel distribution</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
          <div className="relative">
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="block w-full pl-4 pr-10 py-2 text-sm border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
            />
          </div>
          <button className="btn btn-primary">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
            </svg>
            New Distribution
          </button>
        </div>
      </div>

      <div className="bg-white shadow-sm rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Fuel Type
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Quantity (Liters)
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Vehicle
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Driver
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Time
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="relative px-6 py-3">
                  <span className="sr-only">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {outgoingFuelData.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{item.fuelType}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{item.quantity.toLocaleString()}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{item.vehicle}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{item.driver}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{item.time}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {getStatusBadge(item.status)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-indigo-600 hover:text-indigo-900 mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </button>
                    <button className="text-yellow-600 hover:text-yellow-900">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white shadow-sm rounded-lg p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Distribution Summary</h3>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-sm text-gray-500">Total Distributed</span>
              <span className="text-sm font-medium">5,500 L</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-500">Vehicles Served</span>
              <span className="text-sm font-medium">3</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-500">Average per Vehicle</span>
              <span className="text-sm font-medium">1,833 L</span>
            </div>
          </div>
        </div>

        <div className="bg-white shadow-sm rounded-lg p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Fuel Type Distribution</h3>
          <div className="space-y-3">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-gray-700">Petrol</span>
                <span className="text-sm text-gray-500">45%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '45%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-gray-700">Diesel</span>
                <span className="text-sm text-gray-500">33%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '33%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-gray-700">CNG</span>
                <span className="text-sm text-gray-500">22%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-yellow-600 h-2.5 rounded-full" style={{ width: '22%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailyOutgoingFuel;
