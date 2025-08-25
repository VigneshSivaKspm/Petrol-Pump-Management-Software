import React, { useState, useEffect, useMemo } from 'react';
import { format, subDays, subMonths, subYears } from 'date-fns';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement,
  Filler,
} from 'chart.js';
import { Bar, Pie, Line } from 'react-chartjs-2';
import { ArrowUp, ArrowDown, Download, Eye } from 'lucide-react';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  Filler
);

// Mock data generation based on time range
const generateMockData = (range) => {
  let labels = [];
  let salesData = [];
  let revenueData = [];

  if (range === 'week') {
    labels = Array.from({ length: 7 }, (_, i) => format(subDays(new Date(), 6 - i), 'EEE'));
    salesData = [1200, 1900, 1500, 2500, 2000, 2300, 2100];
    revenueData = [120000, 190000, 150000, 250000, 200000, 230000, 210000];
  } else if (range === 'month') {
    labels = Array.from({ length: 30 }, (_, i) => format(subDays(new Date(), 29 - i), 'd MMM'));
    salesData = labels.map(() => Math.floor(Math.random() * 1500 + 1000));
    revenueData = salesData.map(d => d * 100 + Math.floor(Math.random() * 5000));
  } else if (range === 'year') {
    labels = Array.from({ length: 12 }, (_, i) => format(subMonths(new Date(), 11 - i), 'MMM'));
    salesData = labels.map(() => Math.floor(Math.random() * 10000 + 5000));
    revenueData = salesData.map(d => d * 100 + Math.floor(Math.random() * 50000));
  }

  return {
    sales: salesData,
    revenue: revenueData,
    labels: labels
  };
};

// Main App component
const App = () => {
  const [timeRange, setTimeRange] = useState('week');
  const [data, setData] = useState(generateMockData('week'));
  const [loading, setLoading] = useState(false);

  // Update data when time range changes
  useEffect(() => {
    setLoading(true);
    // Simulate API call delay
    const timer = setTimeout(() => {
      setData(generateMockData(timeRange));
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [timeRange]);

  // Use useMemo to prevent re-creating chart data on every render
  const salesChartData = useMemo(() => ({
    labels: data.labels,
    datasets: [
      {
        label: 'Fuel Sales (Liters)',
        data: data.sales,
        backgroundColor: '#3b82f6', // blue-500
        hoverBackgroundColor: '#2563eb', // blue-600
        borderRadius: 6,
        categoryPercentage: 0.7,
        barPercentage: 0.9,
      },
    ],
  }), [data]);

  const revenueChartData = useMemo(() => ({
    labels: data.labels,
    datasets: [
      {
        label: 'Revenue (₹)',
        data: data.revenue,
        borderColor: '#10b981', // emerald-500
        backgroundColor: 'rgba(16, 185, 129, 0.2)', // emerald-500 with opacity
        tension: 0.4,
        fill: true,
        pointStyle: 'circle',
        pointRadius: 5,
        pointHoverRadius: 7,
      },
    ],
  }), [data]);

  const fuelDistributionData = {
    labels: ['Petrol', 'Diesel', 'CNG', 'Premium'],
    datasets: [
      {
        data: [35, 45, 10, 10],
        backgroundColor: [
          '#f87171', // red-400
          '#38bdf8', // light-blue-400
          '#facc15', // yellow-400
          '#60a5fa', // blue-400
        ],
        borderWidth: 0,
      },
    ],
  };

  const reports = [
    {
      id: 1,
      name: 'Sales Analytics',
      type: 'analytics',
      lastRun: '2025-08-24',
      nextRun: '2025-08-25',
      icon: '📊',
      color: 'bg-blue-50 text-blue-800'
    },
    {
      id: 2,
      name: 'Inventory Status',
      type: 'inventory',
      lastRun: '2025-08-23',
      nextRun: '2025-08-25',
      icon: '📦',
      color: 'bg-purple-50 text-purple-800'
    },
    {
      id: 3,
      name: 'Employee Performance',
      type: 'hr',
      lastRun: '2025-08-22',
      nextRun: '2025-08-25',
      icon: '�',
      color: 'bg-green-50 text-green-800'
    },
    {
      id: 4,
      name: 'Fuel Consumption',
      type: 'fuel',
      lastRun: '2025-08-24',
      nextRun: '2025-08-25',
      icon: '⛽',
      color: 'bg-yellow-50 text-yellow-800'
    },
  ];

  const metrics = [
    { name: 'Total Sales', value: '₹1,845,000', change: '+12.5%', changeType: 'increase' },
    { name: 'Fuel Sold', value: '18,500 L', change: '+5.2%', changeType: 'increase' },
    { name: 'Avg. Transaction', value: '₹1,850', change: '+2.1%', changeType: 'increase' },
    { name: 'New Customers', value: '245', change: '+8.3%', changeType: 'increase' },
  ];

  const barOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: 'top' },
      title: { display: false },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: { display: false },
      },
      x: { grid: { display: false } },
    },
  };

  const lineOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        mode: 'index',
        intersect: false,
      }
    },
    scales: {
      y: { grid: { display: false } },
      x: { grid: { display: false } },
    },
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8 font-sans antialiased">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">Analytics Dashboard</h1>
          <p className="text-gray-500 mt-1">Monitor your petrol pump performance in real-time</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="inline-flex rounded-md shadow-sm">
            {['week', 'month', 'year'].map((range) => (
              <button
                key={range}
                onClick={() => setTimeRange(range)}
                className={`py-2 px-4 text-sm font-medium rounded-md transition-colors duration-200
                  ${timeRange === range
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                  }`}
              >
                {range.charAt(0).toUpperCase() + range.slice(1)}
              </button>
            ))}
          </div>
          <button
            onClick={() => console.log('Exporting data for', timeRange)}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-200"
          >
            <Download size={18} />
            Export
          </button>
        </div>
      </div>

      {/* Loading State */}
      {loading && (
        <div className="flex items-center justify-center p-8 bg-white rounded-xl shadow-sm mb-6">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mr-3"></div>
          <p className="text-gray-600">Loading charts...</p>
        </div>
      )}

      {!loading && (
        <>
          {/* Metrics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {metrics.map((metric, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 transition-transform duration-200 hover:scale-105"
              >
                <div className="text-sm font-medium text-gray-500">{metric.name}</div>
                <div className="mt-2 flex items-baseline justify-between">
                  <div className="text-3xl font-semibold text-gray-900 tracking-tight">{metric.value}</div>
                  <span
                    className={`ml-2 flex items-center gap-1 text-sm font-medium px-2 py-0.5 rounded-full
                    ${metric.changeType === 'increase' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}
                  >
                    {metric.changeType === 'increase' ? <ArrowUp size={14} /> : <ArrowDown size={14} />}
                    {metric.change}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Main Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {/* Sales Chart */}
            <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <h3 className="font-semibold text-lg text-gray-900 mb-4">Fuel Sales Overview</h3>
              <div className="h-80">
                <Bar data={salesChartData} options={barOptions} />
              </div>
            </div>

            {/* Fuel Distribution */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <h3 className="font-semibold text-lg text-gray-900 mb-4">Fuel Distribution</h3>
              <div className="h-48 flex items-center justify-center">
                <div className="w-full h-full">
                  <Pie data={fuelDistributionData} options={{ maintainAspectRatio: false, plugins: { legend: { position: 'bottom' } } }} />
                </div>
              </div>
            </div>
          </div>

          {/* Revenue Trend */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 mb-8">
            <h3 className="font-semibold text-lg text-gray-900 mb-4">Revenue Trend</h3>
            <div className="h-80">
              <Line data={revenueChartData} options={lineOptions} />
            </div>
          </div>

          {/* Quick Reports Section */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <h3 className="font-semibold text-xl text-gray-900">Quick Reports</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Report</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Run</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Next Run</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {reports.map((report) => (
                    <tr key={report.id} className="hover:bg-gray-50 transition-colors duration-150">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <span className="text-2xl mr-3">{report.icon}</span>
                          <div>
                            <div className="font-medium text-gray-900">{report.name}</div>
                            <div className="text-xs text-gray-500">ID: {report.id}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2.5 py-1 text-xs rounded-full font-semibold ${report.color} capitalize`}>
                          {report.type}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{report.lastRun}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{report.nextRun}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <div className="flex gap-2">
                          <button
                            title="Download Report"
                            className="text-gray-500 hover:text-gray-900 transition-colors duration-150"
                            onClick={() => console.log('Downloading report', report.id)}
                          >
                            <Download size={20} />
                          </button>
                          <button
                            title="View Details"
                            className="text-gray-500 hover:text-gray-900 transition-colors duration-150"
                            onClick={() => console.log('Viewing details for report', report.id)}
                          >
                            <Eye size={20} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default App;