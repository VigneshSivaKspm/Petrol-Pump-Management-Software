import { Link } from "react-router-dom";
const EmployeesNav = () => {
  return (
    <div>

      <nav className="bg-teal-700 text-white">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">

                <Link to={'/active_employee'}>
                  <p className=" hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Active Employee</p>
                </Link>

                <Link to={'/absent_employee'}>
                  <p className=" hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Absent Employee</p>
                </Link>

                <Link to={'/total_employee'}>
                  <p className=" hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Total Employee</p>
                </Link>


              </div>
            </div>
          </div>
        </div>
      </nav>

    </div>
  );
};

export default EmployeesNav;