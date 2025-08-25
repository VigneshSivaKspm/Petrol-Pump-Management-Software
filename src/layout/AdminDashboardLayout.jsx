
import { Outlet } from 'react-router-dom';
import NavbarDefault from '../components/Navbar/NavbarDefault';
import SideNavbar from '../components/SideNav/SideNavbar';

const AdminDashboardLayout = () => {
    return (
        <div className="min-h-screen bg-base-100">
            <NavbarDefault />
            <div className="drawer lg:drawer-open">
                <input id="sidebar-drawer" type="checkbox" className="drawer-toggle" />
                
                {/* Page content */}
                <div className="drawer-content flex flex-col flex-1">
                    <div className="p-4 lg:p-6">
                        <Outlet />
                    </div>
                </div>
                
                {/* Sidebar */}
                <div className="drawer-side z-10">
                    <label htmlFor="sidebar-drawer" className="drawer-overlay"></label>
                    <SideNavbar />
                </div>
                
                {/* Mobile menu button */}
                <label 
                    htmlFor="sidebar-drawer" 
                    className="fixed bottom-4 right-4 btn btn-circle btn-primary lg:hidden z-20"
                    style={{ width: '3rem', height: '3rem' }}
                >
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        className="w-6 h-6 stroke-current"
                    >
                        <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth="2" 
                            d="M4 6h16M4 12h16M4 18h16"
                        ></path>
                    </svg>
                </label>
            </div>
        </div>
    );
};

export default AdminDashboardLayout;