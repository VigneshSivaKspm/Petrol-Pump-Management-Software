/** @jsxImportSource react */
import React from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from './router/Roots';
import './index.css';

// Error Boundary for the entire app
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('App Error Boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <h1 className="text-2xl font-bold text-red-600 mb-4">Something went wrong</h1>
            <p className="mb-4">We're working on fixing this issue. Please try again later.</p>
            <button 
              onClick={() => window.location.reload()} 
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Main App component
const App = () => (
  <React.StrictMode>
    <ErrorBoundary>
      <RouterProvider 
        router={router} 
        fallbackElement={
          <div className="min-h-screen flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        } 
      />
    </ErrorBoundary>
  </React.StrictMode>
);

// Render the app
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);

// Log environment for debugging
console.log('Environment:', import.meta.env.MODE);
