/** @jsxImportSource react */
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

// Layout
import AdminDashboardLayout from '../layout/AdminDashboardLayout';

// Pages
import AdminDashboardPage from '../page/AdminDashboard/AdminDashboardPage';

// Lazy-loaded components
// Test Component
const TestComponent = React.lazy(() => import('../TestComponent'));

// Branches
const AddNewBranchForm = React.lazy(() => import('../page/Branches/AddNewBranchForm'));
const BranchesEmployeesStatus = React.lazy(() => import('../page/Branches/BranchesEmployeesStatus'));
const BranchesList = React.lazy(() => import('../page/Branches/BranchesList'));
const Report = React.lazy(() => import('../page/Reports/ReportsPage'));

// Reserve Fuel
const ReserveFuelPage = React.lazy(() => import('../page/ReserveFuel/ReserveFuelPage'));
const DailyIncomingFuel = React.lazy(() => import('../page/ReserveFuel/DailyIncomingFuel'));
const DailyOutgoingFuel = React.lazy(() => import('../page/ReserveFuel/DailyOutgoingFuel'));
const TotalReserveFuel = React.lazy(() => import('../page/ReserveFuel/TotalReserveFuel'));

// Employees
const AbsentEmployee = React.lazy(() => import("../page/Employee's/AbsentEmployee"));
const ActiveEmployee = React.lazy(() => import("../page/Employee's/ActiveEmployee"));
const TotalEmployee = React.lazy(() => import("../page/Employee's/TotalEmployee"));

// Other Pages
const FuelStatusPage = React.lazy(() => import('../page/FuelStatus/FuelStatusPage'));

// Error boundary component
const ErrorBoundary = ({ children }) => {
  try {
    return children;
  } catch (error) {
    console.error('Error in route component:', error);
    return <div>Something went wrong. Please try again later.</div>;
  }
};

// Lazy component with error boundary
const LazyComponent = ({ Component }) => (
  <React.Suspense fallback={<div className="p-4">Loading...</div>}>
    <ErrorBoundary>
      <Component />
    </ErrorBoundary>
  </React.Suspense>
);

// Routes configuration
const routes = [
  {
    path: '/',
    element: <AdminDashboardLayout />,
    errorElement: <div className="p-4">Page not found</div>,
    children: [
      // Test route
      { path: 'test', element: <LazyComponent Component={TestComponent} /> },
      
      // Dashboard
      { index: true, element: <AdminDashboardPage /> },
      
      // Branches
      {
        path: 'branch_list',
        element: <LazyComponent Component={BranchesList} />
      },
      {
        path: 'add_new_branch',
        element: <LazyComponent Component={AddNewBranchForm} />
      },
      {
        path: 'branches_employees_status',
        element: <LazyComponent Component={BranchesEmployeesStatus} />
      },
      
      // Reserve Fuel
      {
        path: 'reserve_fuel',
        element: <LazyComponent Component={ReserveFuelPage} />,
        children: [
          {
            index: true,
            element: <LazyComponent Component={DailyIncomingFuel} />
          },
          {
            path: 'daily_incoming',
            element: <LazyComponent Component={DailyIncomingFuel} />
          },
          {
            path: 'daily_outgoing',
            element: <LazyComponent Component={DailyOutgoingFuel} />
          },
          {
            path: 'total_reserve',
            element: <LazyComponent Component={TotalReserveFuel} />
          }
        ]
      },
      
      // Employees - Nested routes
      {
        path: 'employees',
        children: [
          {
            index: true,
            element: <LazyComponent Component={ActiveEmployee} />
          },
          {
            path: 'active',
            element: <LazyComponent Component={ActiveEmployee} />
          },
          {
            path: 'absent',
            element: <LazyComponent Component={AbsentEmployee} />
          },
          {
            path: 'total',
            element: <LazyComponent Component={TotalEmployee} />
          }
        ]
      },
      
      // Root level employee routes for backward compatibility
      {
        path: 'active_employee',
        element: <LazyComponent Component={ActiveEmployee} />
      },
      {
        path: 'absent_employee',
        element: <LazyComponent Component={AbsentEmployee} />
      },
      {
        path: 'total_employee',
        element: <LazyComponent Component={TotalEmployee} />
      },
      
      // Fuel Status
      {
        path: 'fuel_status',
        element: <LazyComponent Component={FuelStatusPage} />
      },
      
      // Reports
      {
        path: 'reports',
        element: <LazyComponent Component={Report} />
      }
    ]
  }
];

// Create router
const router = createBrowserRouter(routes, {
  future: {
    v7_startTransition: true,
    v7_relativeSplatPath: true,
  },
});

export default router;