import React, { useState, useEffect } from 'react';
import { FaUser, FaEnvelope, FaPhone, FaIdCard, FaBriefcase, FaCalendarDay, FaSave, FaTimes } from 'react-icons/fa';

const EmployeeForm = ({ employee, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    employeeId: '',
    position: '',
    department: '',
    joinDate: new Date().toISOString().split('T')[0],
    status: 'active',
    shift: 'morning',
    address: ''
  });

  useEffect(() => {
    if (employee) {
      setFormData({
        name: employee.name || '',
        email: employee.email || '',
        phone: employee.phone || '',
        employeeId: employee.employeeId || '',
        position: employee.position || '',
        department: employee.department || '',
        joinDate: employee.joinDate || new Date().toISOString().split('T')[0],
        status: employee.status || 'active',
        shift: employee.shift || 'morning',
        address: employee.address || ''
      });
    }
  }, [employee]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title text-2xl mb-6">
          {employee ? 'Edit Employee' : 'Add New Employee'}
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Personal Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <FaUser /> Personal Information
              </h3>
              
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="input input-bordered w-full"
                  required
                />
              </div>
              
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <FaEnvelope className="text-gray-400" />
                  </span>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="input input-bordered w-full pl-10"
                    required
                  />
                </div>
              </div>
              
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Phone Number</span>
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <FaPhone className="text-gray-400" />
                  </span>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="input input-bordered w-full pl-10"
                    required
                  />
                </div>
              </div>
              
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Address</span>
                </label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="textarea textarea-bordered h-24"
                  placeholder="Full address..."
                ></textarea>
              </div>
            </div>
            
            {/* Employment Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <FaBriefcase /> Employment Details
              </h3>
              
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Employee ID</span>
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <FaIdCard className="text-gray-400" />
                  </span>
                  <input
                    type="text"
                    name="employeeId"
                    value={formData.employeeId}
                    onChange={handleChange}
                    className="input input-bordered w-full pl-10"
                    required
                    disabled={!!employee}
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Position</span>
                  </label>
                  <input
                    type="text"
                    name="position"
                    value={formData.position}
                    onChange={handleChange}
                    className="input input-bordered w-full"
                    required
                  />
                </div>
                
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Department</span>
                  </label>
                  <select
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                    className="select select-bordered w-full"
                    required
                  >
                    <option value="">Select Department</option>
                    <option value="operations">Operations</option>
                    <option value="sales">Sales</option>
                    <option value="finance">Finance</option>
                    <option value="hr">Human Resources</option>
                    <option value="it">IT</option>
                    <option value="maintenance">Maintenance</option>
                  </select>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Status</span>
                  </label>
                  <select
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                    className="select select-bordered w-full"
                  >
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                    <option value="on_leave">On Leave</option>
                  </select>
                </div>
                
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Shift</span>
                  </label>
                  <select
                    name="shift"
                    value={formData.shift}
                    onChange={handleChange}
                    className="select select-bordered w-full"
                  >
                    <option value="morning">Morning (8AM - 4PM)</option>
                    <option value="evening">Evening (4PM - 12AM)</option>
                    <option value="night">Night (12AM - 8AM)</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </div>
              </div>
              
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Join Date</span>
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <FaCalendarDay className="text-gray-400" />
                  </span>
                  <input
                    type="date"
                    name="joinDate"
                    value={formData.joinDate}
                    onChange={handleChange}
                    className="input input-bordered w-full pl-10"
                    required
                  />
                </div>
              </div>
            </div>
          </div>
          
          <div className="divider"></div>
          
          <div className="flex justify-end gap-4">
            <button 
              type="button" 
              onClick={onCancel}
              className="btn btn-ghost"
            >
              <FaTimes className="mr-2" /> Cancel
            </button>
            <button 
              type="submit" 
              className="btn btn-primary"
            >
              <FaSave className="mr-2" /> {employee ? 'Update' : 'Save'} Employee
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmployeeForm;
