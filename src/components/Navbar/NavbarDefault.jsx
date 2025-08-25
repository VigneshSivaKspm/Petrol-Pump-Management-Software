import { Link } from 'react-router-dom';

const NavbarDefault = () => {
    return (
        <div className="bg-base-200 shadow-sm">
            <div className="navbar max-w-7xl mx-auto px-4">
                {/* Logo/Brand */}
                <div className="flex-1">
                    <Link to="/" className="btn btn-ghost text-xl font-bold">
                        Smart Petrol Pump
                    </Link>
                </div>

                {/* Navigation Icons */}
                <div className="flex-none gap-4">
                    {/* Search */}
                    <div className="form-control hidden md:block">
                        <input 
                            type="text" 
                            placeholder="Search..." 
                            className="input input-bordered w-full max-w-xs" 
                        />
                    </div>

                    {/* Icons */}
                    <div className='flex items-center gap-4'>
                        <button className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <img 
                                    src="/NavbarDefaultIcon/Notifications.png" 
                                    alt="Notifications" 
                                    className="w-6 h-6"
                                />
                                <span className="badge badge-xs badge-primary indicator-item"></span>
                            </div>
                        </button>
                        
                        <button className="btn btn-ghost btn-circle">
                            <img 
                                src="/NavbarDefaultIcon/Vector.png" 
                                alt="Messages" 
                                className="w-5 h-5"
                            />
                        </button>
                    </div>

                    {/* Profile Dropdown */}
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                                    A
                                </div>
                            </div>
                        </div>
                        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow-lg menu menu-sm dropdown-content bg-base-100 rounded-box w-56">
                            <li className="p-2 font-semibold">
                                <div>Admin</div>
                                <div className="text-xs text-gray-500">Administrator</div>
                            </li>
                            <div className="divider my-0"></div>
                            <li>
                                <Link to="/profile" className="justify-between">
                                    My Profile
                                </Link>
                            </li>
                            <li>
                                <Link to="/settings">
                                    Settings
                                </Link>
                            </li>
                            <div className="divider my-0"></div>
                            <li>
                                <button className="text-error">
                                    Logout
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavbarDefault;