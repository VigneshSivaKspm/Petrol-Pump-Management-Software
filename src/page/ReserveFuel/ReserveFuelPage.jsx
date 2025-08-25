import React from 'react';
import ReserveFuelNav from './ReserveFuelNav/ReserveFuelNav';
import { Outlet } from 'react-router-dom';

const ReserveFuelPage = () => {
  return (
    <div className="flex flex-col min-h-full">
      <ReserveFuelNav />
      <div className="flex-1 p-4 md:p-6">
        <div className="max-w-7xl mx-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default ReserveFuelPage;
