import { Link, useLocation } from "react-router-dom";

const ReserveFuelNav = () => {
  const location = useLocation();
  
  const isActive = (path) => {
    return location.pathname === path || location.pathname.startsWith(`${path}/`);
  };

  const navItems = [
    { 
      to: '/reserve_fuel/daily_incoming', 
      label: 'Daily Incoming Fuel',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
      )
    },
    { 
      to: '/reserve_fuel/daily_outgoing', 
      label: 'Daily Outgoing Fuel',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m0 0l-4-4m4 4l4-4" />
        </svg>
      )
    },
    { 
      to: '/reserve_fuel/total_reserve', 
      label: 'Total Reserve Fuel',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
        </svg>
      )
    }
  ];

  return (
    <div className="bg-base-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-14 overflow-x-auto">
          <nav className="flex space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`flex items-center px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                  isActive(item.to)
                    ? 'bg-primary text-white'
                    : 'text-gray-700 hover:bg-base-300 hover:text-gray-900'
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default ReserveFuelNav;