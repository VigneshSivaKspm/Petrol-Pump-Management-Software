import React, { useState, useEffect } from 'react';
import { FaUser, FaUserClock, FaUserCheck, FaUserSlash, FaSearch, FaFilter, FaPlus, FaEdit, FaTrash, FaExchangeAlt } from 'react-icons/fa';

const EmployeeList = ({ employees, onEdit, onDelete, onStatusChange, onShiftChange }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [filteredEmployees, setFilteredEmployees] = useState([]);

  useEffect(() => {
    const filtered = employees.filter(emp => {
      const matchesSearch = 
        emp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        emp.employeeId.toLowerCase().includes(searchTerm.toLowerCase()) ||
        emp.position.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesStatus = statusFilter === 'all' || emp.status === statusFilter;
      
      return matchesSearch && matchesStatus;
    });
    
    setFilteredEmployees(filtered);
  }, [employees, searchTerm, statusFilter]);

  const getStatusBadge = (status) => {
    switch(status) {
      case 'active':
        return <span className="badge badge-success gap-2"><FaUserCheck /> Active</span>;
      case 'inactive':
        return <span className="badge badge-error gap-2"><FaUserSlash /> Inactive</span>;
      case 'on_leave':
        return <span className="badge badge-warning gap-2"><FaUserClock /> On Leave</span>;
      default:
        return <span className="badge badge-ghost gap-2">Unknown</span>;
    }
  };

  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
          <h2 className="card-title text-2xl">Employee Management</h2>
          <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
            <div className="join">
              <div className="indicator">
                <span className="indicator-item badge badge-primary">
                  <FaFilter className="w-3 h-3" />
                </span>
                <select 
                  className="select select-bordered join-item w-full md:w-auto"
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                >
                  <option value="all">All Status</option>
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                  <option value="on_leave">On Leave</option>
                </select>
              </div>
            </div>
            
            <div className="join w-full">
              <span className="join-item bg-base-300 p-2 rounded-l-lg">
                <FaSearch className="text-gray-500" />
              </span>
              <input
                type="text"
                placeholder="Search employees..."
                className="input input-bordered join-item w-full"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <button className="btn btn-primary join-item">
              <FaPlus className="mr-2" /> Add Employee
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="table table-zebra">
            <thead>
              <tr>
                <th>Employee</th>
                <th>ID</th>
                <th>Position</th>
                <th>Shift</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredEmployees.length > 0 ? (
                filteredEmployees.map((employee) => (
                  <tr key={employee.id}>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar placeholder">
                          <div className="bg-neutral text-neutral-content rounded-full w-10">
                            <FaUser className="w-6 h-6" />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{employee.name}</div>
                          <div className="text-sm opacity-50">{employee.email}</div>
                        </div>
                      </div>
                    </td>
                    <td>{employee.employeeId}</td>
                    <td>{employee.position}</td>
                    <td>
                      <div className="badge badge-outline">
                        {employee.shift || 'Not Assigned'}
                      </div>
                    </td>
                    <td>{getStatusBadge(employee.status)}</td>
                    <td>
                      <div className="flex gap-2">
                        <button 
                          className="btn btn-ghost btn-xs"
                          onClick={() => onEdit(employee)}
                        >
                          <FaEdit />
                        </button>
                        <button 
                          className="btn btn-ghost btn-xs"
                          onClick={() => onStatusChange(employee)}
                        >
                          <FaExchangeAlt />
                        </button>
                        <button 
                          className="btn btn-ghost btn-xs text-error"
                          onClick={() => onDelete(employee.id)}
                        >
                          <FaTrash />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="text-center py-8">
                    <div className="flex flex-col items-center justify-center">
                      <FaUserSlash className="w-12 h-12 text-gray-400 mb-2" />
                      <p className="text-gray-500">No employees found</p>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        
        <div className="flex justify-between items-center mt-4">
          <div className="text-sm text-gray-500">
            Showing {filteredEmployees.length} of {employees.length} employees
          </div>
          <div className="join">
            <button className="join-item btn btn-sm">«</button>
            <button className="join-item btn btn-sm btn-active">1</button>
            <button className="join-item btn btn-sm">2</button>
            <button className="join-item btn btn-sm">3</button>
            <button className="join-item btn btn-sm">»</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeList;
