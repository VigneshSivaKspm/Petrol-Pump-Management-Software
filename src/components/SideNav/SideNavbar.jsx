import { Link, useLocation } from "react-router-dom";

const SideNavbar = () => {
    const location = useLocation();
    
    const navItems = [
        { 
            to: '/', 
            icon: 'Dashboard black.png', 
            label: 'Dashboard' 
        },
        { 
            to: '/branch_list', 
            icon: 'Branch black.png', 
            label: 'Branches' 
        },
        { 
            label: 'Reserve Fuel',
            icon: 'Reserve Fuel black.png',
            children: [
                { to: '/reserve_fuel/daily_incoming', label: 'Daily Incoming' },
                { to: '/reserve_fuel/daily_outgoing', label: 'Daily Outgoing' },
                { to: '/reserve_fuel/total_reserve', label: 'Total Reserve' }
            ]
        },
        { 
            label: 'Employees',
            icon: 'Employee black.png',
            children: [
                { to: '/employees/active', label: 'Active Employees' },
                { to: '/employees/absent', label: 'Absent Employees' },
                { to: '/employees/total', label: 'All Employees' }
            ]
        },
        { 
            to: '/fuel_status', 
            icon: 'Fuel Status black.png', 
            label: 'Fuel Status' 
        },
        { 
            to: '/reports', 
            icon: 'Report black.png', 
            label: 'Reports' 
        }
    ];

    const isActive = (path) => {
        // Handle nested routes
        if (path === '/') {
            return location.pathname === '/';
        }
        return location.pathname.startsWith(path) && (location.pathname === path || location.pathname.startsWith(`${path}/`));
    };

    return (
        <div className="w-64 bg-base-200 min-h-screen border-r border-base-300">
            <div className="p-4 pt-6">
                <ul className="menu w-full p-0">
                    {navItems.map((item, index) => (
                        <li key={index} className="mb-1">
                            {item.to ? (
                                <Link 
                                    to={item.to}
                                    className={`flex items-center px-4 py-3 rounded-lg transition-colors duration-200 ${
                                        isActive(item.to) 
                                            ? 'bg-primary text-white' 
                                            : 'hover:bg-base-300 text-gray-700 hover:text-gray-900'
                                    }`}
                                >
                                    {item.icon && (
                                        <img 
                                            className="w-5 h-5 mr-3" 
                                            src={`/Side Navbar Icon/${item.icon}`} 
                                            alt={`${item.label} icon`} 
                                        />
                                    )}
                                    <span className="font-medium">{item.label}</span>
                                </Link>
                            ) : (
                                <details open>
                                    <summary className={`font-medium px-4 py-3 rounded-lg hover:bg-base-300 ${
                                        item.children?.some(child => isActive(child.to)) 
                                            ? 'bg-primary/10 text-primary' 
                                            : 'text-gray-700 hover:text-gray-900'
                                    }`}>
                                        {item.icon && (
                                            <img 
                                                className="w-5 h-5 mr-3" 
                                                src={`/Side Navbar Icon/${item.icon}`} 
                                                alt={`${item.label} icon`} 
                                            />
                                        )}
                                        {item.label}
                                    </summary>
                                    <ul className="ml-4 mt-1">
                                        {item.children?.map((child, childIndex) => (
                                            <li key={childIndex} className="my-1">
                                                <Link 
                                                    to={child.to}
                                                    className={`flex items-center px-4 py-2 rounded-lg text-sm transition-colors duration-200 ${
                                                        isActive(child.to) 
                                                            ? 'bg-primary text-white' 
                                                            : 'text-gray-600 hover:bg-base-300 hover:text-gray-900'
                                                    }`}
                                                >
                                                    {child.label}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </details>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default SideNavbar;