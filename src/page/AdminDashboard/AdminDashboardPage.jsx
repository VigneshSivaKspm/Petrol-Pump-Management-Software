import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboardPage = () => {
  // Sample data - replace with actual API calls in production
  const stats = [
    { 
      title: 'Total Branches', 
      value: '12', 
      change: '+2', 
      changeText: 'from last month',
      icon: '🏢',
      color: 'blue',
      link: '/branch_list'
    },
    { 
      title: 'Active Employees', 
      value: '84', 
      change: '+5', 
      changeText: 'from last month',
      icon: '👥',
      color: 'green',
      link: '/active_employee'
    },
    { 
      title: 'Monthly Revenue', 
      value: '$124,532', 
      change: '+12%', 
      changeText: 'from last month',
      icon: '💰',
      color: 'purple',
      link: '/report'
    },
    { 
      title: 'Fuel Inventory', 
      value: '85%', 
      change: '+5%', 
      changeText: 'capacity used',
      icon: '⛽',
      color: 'yellow',
      link: '/total_reserve_fuel'
    },
  ];

  const recentActivities = [
    { id: 1, text: 'New branch added: Downtown Station', time: '2 hours ago' },
    { id: 2, text: 'Monthly report generated for July', time: '1 day ago' },
    { id: 3, text: 'Fuel delivery received at Main Station', time: '1 day ago' },
    { id: 4, text: 'New employee onboarded: John Doe', time: '2 days ago' },
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: 'bg-blue-100 text-blue-800',
      green: 'bg-green-100 text-green-800',
      purple: 'bg-purple-100 text-purple-800',
      yellow: 'bg-yellow-100 text-yellow-800',
    };
    return colors[color] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="p-4 md:p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Dashboard Overview</h1>
        <span className="text-sm text-gray-500">Last updated: {new Date().toLocaleString()}</span>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat, index) => (
          <Link 
            to={stat.link} 
            key={index}
            className="block transform transition-all duration-200 hover:scale-[1.02] hover:shadow-lg"
          >
            <div className={`p-5 rounded-xl shadow-sm border border-gray-100 bg-white`}>
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-gray-500">{stat.title}</p>
                  <p className="mt-1 text-2xl font-semibold">{stat.value}</p>
                  <p className="text-xs mt-1">
                    <span className="text-green-500 font-medium">{stat.change} </span>
                    <span className="text-gray-500">{stat.changeText}</span>
                  </p>
                </div>
                <span className="text-3xl">{stat.icon}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activities */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-lg font-semibold mb-4">Recent Activities</h2>
          <div className="space-y-4">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="flex items-start pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                <div>
                  <p className="text-sm font-medium">{activity.text}</p>
                  <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
          <div className="space-y-3">
            <Link 
              to="/add_new_branch"
              className="p-3 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors flex items-center"
            >
              <span className="mr-2">🏢</span> Add New Branch
            </Link>
            <Link 
              to="/daily_incoming_fuel"
              className="p-3 bg-green-50 text-green-700 rounded-lg hover:bg-green-100 transition-colors flex items-center"
            >
              <span className="mr-2">⛽</span> Record Fuel Delivery
            </Link>
            <Link 
              to="/report"
              className="p-3 bg-purple-50 text-purple-700 rounded-lg hover:bg-purple-100 transition-colors flex items-center"
            >
              <span className="mr-2">📊</span> Generate Report
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardPage;
