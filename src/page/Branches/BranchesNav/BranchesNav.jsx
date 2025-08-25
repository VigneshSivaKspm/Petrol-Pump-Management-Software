import { Link } from "react-router-dom";
const BranchesNav = () => {
  return (
    <div>

      <nav className="bg-[#0F79B9] text-white ">
        <div className="w-full px-2 sm:px-6 ">
          <div className="relative flex items-center justify-between h-16 w-full ">
            <div className="hidden sm:block sm:ml-6 w-full ">
              <div className="flex justify-start  w-full rounded-md space-x-4">

                <Link to={'/add_new_branch'}>
                  <p className=" hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Add New Branch</p>
                </Link>

                <Link to={'/branches_employees_status'}>
                  <p className=" hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Branch Employee Status</p>
                </Link>

                <Link to={'/branch_list'}>
                  <p className=" hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Branch List</p>
                </Link>

                <Link to={'/report'}>
                  <p className=" hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Report</p>
                </Link>

              </div>
            </div>
          </div>
        </div>
      </nav>

    </div>
  );
};

export default BranchesNav;