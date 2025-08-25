import React, { useState } from 'react';

const DailyIncomingFuel = () => {
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  
  // Sample data - replace with actual API call
  const incomingFuelData = [
    { id: 1, fuelType: 'Petrol', quantity: 5000, supplier: 'ABC Oil Co.', deliveryTime: '09:30 AM', status: 'Delivered' },
    { id: 2, fuelType: 'Diesel', quantity: 3000, supplier: 'XYZ Petroleum', deliveryTime: '11:15 AM', status: 'In Transit' },
    { id: 3, fuelType: 'CNG', quantity: 2000, supplier: 'GasPro', deliveryTime: '02:45 PM', status: 'Scheduled' },
  ];

  const getStatusBadge = (status) => {
    const statusClasses = {
      'Delivered': 'bg-green-100 text-green-800',
      'In Transit': 'bg-blue-100 text-blue-800',
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
          <h2 className="text-xl font-semibold text-gray-900">Daily Incoming Fuel</h2>
          <p className="mt-1 text-sm text-gray-500">Track and manage incoming fuel deliveries</p>
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
            New Delivery
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
                  Supplier
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Delivery Time
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
              {incomingFuelData.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{item.fuelType}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{item.quantity.toLocaleString()}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{item.supplier}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{item.deliveryTime}</div>
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

      <div className="bg-white shadow-sm rounded-lg p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Delivery Summary</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="text-sm font-medium text-blue-800">Total Deliveries</div>
            <div className="mt-1 text-2xl font-semibold text-blue-900">3</div>
            <div className="mt-2 text-xs text-blue-600">For {new Date(date).toLocaleDateString()}</div>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <div className="text-sm font-medium text-green-800">Total Volume</div>
            <div className="mt-1 text-2xl font-semibold text-green-900">10,000 L</div>
            <div className="mt-2 text-xs text-green-600">Across all fuel types</div>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg">
            <div className="text-sm font-medium text-purple-800">Next Scheduled</div>
            <div className="mt-1 text-2xl font-semibold text-purple-900">2:45 PM</div>
            <div className="mt-2 text-xs text-purple-600">CNG from GasPro</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailyIncomingFuel;
